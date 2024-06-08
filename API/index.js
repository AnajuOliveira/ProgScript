const { createApp } = Vue;

createApp({
    data() {
        return {
            monsters: []
        };
    },
    created() {
        this.fetchMonsters();
    },
    methods: {
        async fetchMonsters() {
            try {
                const response = await fetch('https://www.dnd5eapi.co/api/monsters');
                const data = await response.json();
                const monstersData = await Promise.all(
                    data.results.map(async monster => {
                        const monsterResponse = await fetch(`https://www.dnd5eapi.co${monster.url}`);
                        return await monsterResponse.json();
                    })
                );
                this.monsters = monstersData.map(monster => ({
                    name: monster.name,
                    index: monster.index,
                    type: monster.type,
                    alignment: monster.alignment,
                    armor_class: monster.armor_class[0] // assuming armor_class is an array
                }));
            } catch (error) {
                console.error('Error fetching the monsters:', error);
            }
        }
    }
}).mount('#app');

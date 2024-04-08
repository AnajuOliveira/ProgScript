
const { createApp } = Vue;

createApp({
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 }
        }
    },
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                this.vilao.vida -= 10;
                this.acaoVilao();
            } else {
                this.heroi.vida -= 10;
            }
        },
        defender(isHeroi) {
            if (isHeroi) {
                this.heroi.defender = true;
                this.vilao.atacar -= 10
                this.acaoVilao();
            } else {
                this.vilao.defender = true;
                this.heroi.atacar -= 10
            }
            this.acoes.defender = false
        },
        usarPocao(isHeroi) {
            if (isHeroi) {
                this.heroi.vida += 15;
                this.acaoVilao();
            } else {
                this.vilao.vida += 15;
            }
        },
        correr(isHeroi) {
            if (isHeroi) {
                this.heroi.correr = true;
                this.vilao.atacar = 0
                this.acaoVilao();
            } else {
                this.vilao.correr = true;
                this.heroi.atacar = 0
            }
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false); 
        },
        vencedor() {
            if (this.vilao.vida == 0){
                console.log("Vitória!!!")
            } else if (this.heroi.vida ==0){
                console.log("Game Over!")
            }
        }
    }
}).mount("#app");

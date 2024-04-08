
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
                this.heroi.vida -= 20;
            }
        },
        defender(isHeroi) {
            if (isHeroi) {
                this.acaoVilao();
            } else {
                this.heroi.vida -= 20;
            }
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
                this.vilao.vida -= 10;
                this.acaoVilao();
            } else {
                this.heroi.vida -= 20;
            }
        },
        acaoVilao() {
            const acoes = ['atacar', 'defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            this[acaoAleatoria](false); b
        }
    }
}).mount("#app");

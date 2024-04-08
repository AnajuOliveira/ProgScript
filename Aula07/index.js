const { createApp } = Vue

createApp({
    data() {
        return {
            display: '0',
            numeroAtual: null,
            numeroAnterior: null,
            operador: null
        }
    },

    methods: {
        lidarBotao(botao) {
            switch (botao) {
                case "*":
                case "-":
                case "+":
                case "/":
                    this.lidarOperador(botao);
                    break;
                case ".":
                    this.lidarDecimal();
                    break;
                case "=":
                    this.lidarIgual();
                    break;
                case "AC":
                    this.lidarClear();
                    break;
                default:
                    this.lidarNumero(botao);
            }
        },

        lidarOperador(operador) {
            if (this.operador && this.numeroAtual !== null && this.numeroAnterior !== null) {
                this.lidarIgual(); // Para calcular o resultado anterior antes de aplicar o novo operador
            }
            this.operador = operador; // Correção aqui, passando o operador recebido como parâmetro
            this.numeroAnterior = parseFloat(this.numeroAtual);
            this.numeroAtual = null;
        },

        lidarIgual() {
            if (this.operador && this.numeroAtual !== null && this.numeroAnterior !== null) {
                switch (this.operador) {
                    case "*":
                        this.numeroAtual = this.numeroAnterior * parseFloat(this.numeroAtual);
                        break;
                    case "-":
                        this.numeroAtual = this.numeroAnterior - parseFloat(this.numeroAtual);
                        break;
                    case "+":
                        this.numeroAtual = this.numeroAnterior + parseFloat(this.numeroAtual);
                        break;
                    case "/":
                        this.numeroAtual = this.numeroAnterior / parseFloat(this.numeroAtual);
                        break;
                }
                this.operador = null;
                this.numeroAnterior = null;
            }
        },

        lidarDecimal() {
            if (!this.numeroAtual.includes('.')) {
                this.numeroAtual += '.';
            }
        },

        lidarClear() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },

        lidarNumero(numero) {
            if (this.numeroAtual === null) {
                this.numeroAtual = numero;
            } else {
                this.numeroAtual += numero;
            }
        }
    }
}).mount('#app')
const { createApp } = Vue

createApp({
    data(){
        return{
            isPurple: false
        }
    },

    computed:{
        return{purple: this.isPurple }
    },

    methods:{

    }
}).mount("#app")
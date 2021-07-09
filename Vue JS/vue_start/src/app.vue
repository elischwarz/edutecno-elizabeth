    <template lang="html">
    <div id="app">
    {{ message }}
    <HelloVue></HelloVue>
    </div>
    </template>
    <script>
        import HelloVue from './hellovue.vue';
        
        export default {
            name: "App",
            components: {
                HelloVue
            },
                data(){
                return {
                    message: 'Hola Desafío Latam!!! 🤟🤟'
                }
            }
        };
    </script>
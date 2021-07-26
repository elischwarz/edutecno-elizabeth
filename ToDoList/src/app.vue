<template lang="html">
<div id="app">
    Tarea
<input type="text" v-model="name"/>
<p> LISTA {{name}} </p>
    <div v-if="mostrar">
{{ message }}
</div>
</div>
</template>
<script>
export default {
name: "app",
data() {
return {
message: 'Hola Desafío Latam!!! 🤟🤟',
};
}
};
</script>



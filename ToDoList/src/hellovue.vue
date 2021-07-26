<template>
<div class="hellovue">
{{message}}
</div>
</template>
<script>
export default {
name: 'HelloVue',
data() {
return {
message :'LISTA',
};
},
};
</script>
<style scoped>
.hellovue {
color: black;
font-size: 20px;
}
</style>
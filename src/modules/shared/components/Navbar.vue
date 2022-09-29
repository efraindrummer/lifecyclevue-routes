<template>
    <div>
        <router-link to="/">Pokemon List</router-link>    
        <router-link :to="{name: 'pokemon-id', params: {id: 85 }}">Pokemon por alli</router-link>    
        <router-link to="/about">About</router-link>    
    </div>    
</template>

<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

div .router-link-active {
    color:#43b983;
}
</style>
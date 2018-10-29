<template>
    <div class="home-page">
        <h1>{{ msg }}</h1>
        <ul v-if="arr.length">
            <li v-for="item in arr" :key="item.id">
                {{item.username}}
            </li>
        </ul>
    </div>
</template>

<script src="./HomePage.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./HomePage.scss"></style>

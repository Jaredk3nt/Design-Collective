<template>
<div class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="../assets/deco-logo-text.png" alt="">
            </router-link>
            <div class="navbar-burger burger" :class="{ 'is-active': activeNav }" ref="burger" data-target="decoNavMenu" @click="activate()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="navbar-menu" id="decoNavMenu" :class="{ 'is-active': activeNav }">
            <div class="navbar-end">
                <div @click="activate()" class="navbar-item is-hoverable"><router-link to="/About">About</router-link></div>
                <div @click="activate()" class="navbar-item"><router-link to="/Community" @click="activate()">Community</router-link></div>
                <div @click="activate()" class="navbar-item"><router-link to="/Events">Events</router-link></div>
                <div @click="activate()" class="navbar-item"><router-link to="/Collection">Collection</router-link></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DecoNavbar',
    data: function() {
        return {
            activeNav: false
        }
    },
    methods: {
        activate: function() {
            this.activeNav = !this.activeNav;
        }
    }
}
</script>

<style scoped lang="scss">

</style>

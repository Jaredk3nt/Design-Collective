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
                <span @click="activate()"><router-link class="navbar-item" to="/About">About</router-link></span>
                <span @click="activate()"><router-link class="navbar-item" to="/Community" @click="activate()">Community</router-link></span>
                <span @click="activate()"><router-link class="navbar-item" to="/Events" @click="activate()">Events</router-link></span>
                <span @click="activate()"><router-link class="navbar-item" to="/Collection" @click="activate()">Collection</router-link></span>
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

<style scoped>

</style>

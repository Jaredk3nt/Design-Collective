<template>
<div class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="../assets/deco-logo-text.png" alt="">
            </a>
            <div class="navbar-burger burger" data-target="decoNavMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" id="decoNavMenu">
            <div class="navbar-end">
                <a class="navbar-item" href="/About">About</a>
                <a class="navbar-item" href="/Community">Community</a>
                <a class="navbar-item" href="/Events">Events</a>
                <a class="navbar-item" href="/Collection">Collection</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'DecoNavbar',
}
</script>

<style scoped>

</style>

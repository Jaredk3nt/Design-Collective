<template>
    <div id="root">
        <div class="container">
            <deco-navbar></deco-navbar>
            <router-view></router-view>
        </div>
        <deco-footer></deco-footer>
    </div>
</template>

<script>
import DecoNavbar from './components/Navbar'
import DecoFooter from './components/Footer'
export default {
    name: 'app',
    components: {
        DecoNavbar,
        DecoFooter
    }
}
</script>

<style lang="scss">


$white: #fff;
$black: #000;

.has-content-centered {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

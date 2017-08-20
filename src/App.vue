<template>
    <div id="root">
        <deco-navbar></deco-navbar>
        <!-- <contact-form></contact-form> -->
        <div class="container">
            <router-view></router-view>
        </div>
        <deco-footer></deco-footer>
    </div>
</template>

<script>
import DecoNavbar from './components/Navbar'
import DecoFooter from './components/Footer'
import ContactForm from './components/ContactForm'

export default {
    name: 'app',
    components: {
        DecoNavbar,
        DecoFooter,
        ContactForm
    }
}
</script>

<style lang="scss">

$white: #fff;
$black: #000;

body {
    font-family: 'Varela Round', sans-serif;
}

.has-content-centered {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>

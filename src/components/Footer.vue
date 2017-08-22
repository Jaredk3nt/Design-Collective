<template>
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <div class="is-inline h-list-item"><a href="https://www.twitter.com" target="blank">Twitter</a></div>
                <div class="is-inline h-list-item"><a href="https://www.facebook.com" target="blank">Facebook</a></div>
                <div class="is-inline h-list-item"><a href="https://www.instagram.com" target="blank">Instagram</a></div>
            </div>
            <hr>
            <div class="content has-text-centered">
                <p>Design Collective 2017</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'DecoFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$white: #fff;
$grey: #4a4a4a;
$black: #000;

.footer {
    background-color: $black;
    color: $white;

    .h-list-item {
        font-size: 1.1rem;
        margin-right: 2em;

        &:last-child {
            margin-right: 0em;
        }

        a {
            color: $white;

            &:hover {
                color: $grey;
            }
        }
    }
}

</style>

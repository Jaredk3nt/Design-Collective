<template>
<div class="columns is-centered page-body">
    <div class="column is-three-quarters">
        <div class="content">
            <h3>Working Together to Build Community</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est, sagittis at ipsum eu, iaculis dapibus velit. Integer aliquam tellus vel libero mollis, eget ultrices lacus venenatis. Quisque ut rutrum sapien. Aenean egestas risus sed fringilla sodales. Aenean vitae lacus justo. Suspendisse eu laoreet lacus. Vestibulum vulputate eros vitae risus pellentesque, ac ultricies erat tincidunt. Praesent eu nibh egestas turpis blandit mattis nec ornare ante. Etiam eu massa quis ipsum mattis varius vitae vitae tortor. Curabitur fringilla lacus sed placerat cursus. Vestibulum maximus sapien metus, non pretium felis suscipit et. Quisque porttitor nulla eget enim porttitor consequat.
            </p>
            <div class="deco-button">
                Contact Us
            </div>
        </div>
        <br>
        <img-grid title="Team" :list="team"></img-grid>
        <img-grid title="Sponsors" :list="sponsors"></img-grid>
        <img-grid title="Partners" :list="partners"></img-grid>
    </div>
</div>
</template>

<script>
import ImgGrid from './ImgGrid'

export default {
    name: 'About',
    data: function() {
        return {
            team: [
                { name: 'Jared Jones', title: 'President', img: './static/jared.jpg' },
                { name: 'Kexin Yang', title: 'VP of Finance', img: './static/kexin.jpg' },
            ],
            sponsors: [

            ],
            partners: [

            ]
        }
    },
    components: {
        ImgGrid
    }
}
</script>

<style scoped lang="scss">

</style>

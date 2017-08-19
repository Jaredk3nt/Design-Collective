<template>
<div class="columns is-centered page-body">
    <div class="column is-three-quarters">
        <!-- <img src="../../static/banner.jpg" alt="" style="margin-bottom: 1em;"> -->
        <div class="content">
            <h3>Working Together to Build Community</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est, sagittis at ipsum eu, iaculis dapibus velit. Integer aliquam tellus vel libero mollis, eget ultrices lacus venenatis. Quisque ut rutrum sapien. Aenean egestas risus sed fringilla sodales. Aenean vitae lacus justo.
            </p>
            <div class="deco-button">Contact Us</div>
        </div>
        <br>
        <img-grid title="Team" :list="team" chunkSize="4"></img-grid>
        <img-grid title="Sponsors" :list="sponsors" chunkSize="4"></img-grid>
        <img-grid title="Partners" :list="partners" chunkSize="4"></img-grid>
    </div>
</div>
</template>

<script>
import ImgGrid from '../ImgGrid'
const team = require('../../../static/data/team.json');

export default {
    name: 'About',
    data: function() {
        return {
            team: team.data,
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

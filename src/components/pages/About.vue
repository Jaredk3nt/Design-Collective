<template>
<div class="page-container">
    <div class="page-body">
        <!-- <img src="../../static/banner.jpg" alt="" style="margin-bottom: 1em;"> -->
        <div class="content">
            <h3>A Team of Passionate Students</h3>
            <p>
                Design Collective is run tirelessly by a group of interdisciplinary UT students who all share a passion for DECO's primary focus: sharing design with others.
            </p>
            <a href="https://facebook.com/dsgncoll" target="_blank" class="deco-button">Contact Us</a>
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

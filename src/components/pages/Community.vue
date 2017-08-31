<template lang="html">
    <div class="page-container">
        <div class="page-body">
            <img-grid title="Design Orgs at the University of Texas" :list="orgList" chunkSize="3"></img-grid>
            <div class="content">
                <h4>Are we missing a UT organization?</h4>
            </div>
            <a href="https://goo.gl/forms/HWWf14t2MMl2xpMm1" target="_blank" class="deco-button">
                Submit an Org
            </a>
        </div>
    </div>
</template>

<script>
import ImgGrid from '../ImgGrid'
const orgs = require('../../../static/data/orgs.json');

export default {
    name: 'Community',
    data: function() {
        return {
            orgList: orgs.data
        }
    },
    components: {
        ImgGrid
    }
}
</script>

<style lang="scss">
</style>

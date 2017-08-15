<template lang="html">
    <div class=" columns is-centered page-body">
        <div class="column is-three-quarters">
            <img-grid title="Design Orgs at the University of Texas" :list="orgList" chunkSize="3"></img-grid>
            <div class="content">
                <h4>Are we missing a UT organization?</h4>
            </div>
            <div class="deco-button">
                Submit an Org
            </div>
        </div>
    </div>
</template>

<script>
import ImgGrid from './ImgGrid'
const orgs = require('../../static/data/orgs.json');

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

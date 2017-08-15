<template lang="html">
    <div class="columns is-centered page-body">
        <div class="column is-three-quarters">
            <event :event="events[0]"></event>
        </div>
    </div>

</template>

<script>
import Event from './Event'
const calendar = require('../../static/data/calendar.json');

export default {
    name: 'Events',
    data: function() {
        return {
            events: calendar.data
        }
    },
    components: {
        Event
    }
}
</script>

<style lang="scss">
</style>

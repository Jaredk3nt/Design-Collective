<template lang="html">
    <div class="columns is-centered page-body">
        <div class="column is-three-quarters">
            <div class="content">
                <h2>Fall 2017 Calendar of Events</h2>
            </div>
            <event :event="events[0]"></event>
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

h2 {
    font-size: 2.25rem;
    font-weight: 600;
}

</style>

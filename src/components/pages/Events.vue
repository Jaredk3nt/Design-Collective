<template lang="html">
    <div class="columns is-centered page-body">
        <div class="column is-three-quarters">
            <div class="content">
                <h2>Fall 2017 Calendar of Events</h2>
            </div>
            <calendar :calendar="events"></calendar>
        </div>
    </div>

</template>

<script>
import Calendar from '../Calendar'
const calendar = require('../../../static/data/calendar.json');

export default {
    name: 'Events',
    data: function() {
        return {
            events: calendar.data
        }
    },
    components: {
        Calendar
    }
}
</script>

<style lang="scss">

h2 {
    font-size: 2.25rem;
    font-weight: 600;
}

</style>

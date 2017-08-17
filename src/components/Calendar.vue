<template lang="html">
    <div class="calendar">
        <div class="" v-for="(events, month) in calendar">
            <div class="month">
                {{month}}
            </div>
            <!-- <hr> -->
            <div v-for="event in events">
                <event :event="event"></event>
            </div>
        </div>
    </div>
</template>

<script>
import Event from './Event'

export default {
    name: 'Calendar',
    props: ['calendar'],
    components: {
        Event
    },
}
</script>

<style lang="scss">
    .calendar {
        .month {
            font-size: 1.5rem;
            margin-left: 1em;
            color: #000;
        }
        hr {
            margin: .5em 0em 1em;
            margin-left: 1em;
            margin-right: 3em;
            background-color: #000;
        }
    }
</style>

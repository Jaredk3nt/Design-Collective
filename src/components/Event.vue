<template lang="html">
    <div class="event">
        <div class="day-left">
            {{event.day}}
        </div>
        <div class="info content">
            <div class="event-title"> {{event.title}} </div>
            <div class="event-time"> {{event.time}} </div>
            <div class="event-description"> {{event.description}} </div>
            <div class="buttons">
                <a class="deco-button"> {{event.location}} </a>
                <a class="deco-button" :href="event.url"> Event Page </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Event',
    props: ['event']
}
</script>

<style lang="scss">
$black: #000;

.event {
    padding: 0em 5em;
    margin: 2em 0em;

    .day-left {
        position: absolute;
        font-size: 2rem;
        font-weight: 600;
        padding: .25em 0em 0em 0em;
    }
    .info {
        margin-left: 4em;
        border-left: 3px $black solid;
        padding: .5em 0em .5em 2em;

        .event-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: $black;
        }

        .event-time {
            font-size: .8rem;
            font-weight: 600;
        }

        .event-description {
            padding: .75em 0em;
            font-size: 1.05rem;
        }

        .buttons {
            .deco-button {
                margin-right: .75em;
            }
        }
    }

}

</style>

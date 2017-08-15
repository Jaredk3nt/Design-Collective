<template lang="html">
    <div class="event">
        <div class="day-left">
            {{event.day}}
        </div>
        <div class="info content">
            <div class="event-title">
                {{event.title}}
            </div>
            <div class="event-time">
                {{event.time}}
            </div>
            <p>{{event.description}}</p>
            <div class="buttons">
                <a class="deco-button">
                    {{event.location}}
                </a>
                <a class="deco-button" :href="event.url">
                    Event Page
                </a>
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

.event {
    .day-left {
        position: fixed;
        font-size: 2rem;
        font-weight: 600;
    }
    .info {
        margin-left: 4em;
        border-left: 2px #000 solid;
        padding-left: 1em;
    }

}

</style>

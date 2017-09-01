<template lang="html">
    <div class="img-grid" v-if="list.length > 0">
        <div class="content">
            <h3>{{title}}</h3>
        </div>
        <div class="columns" v-for="row in y">
            <div class="column" v-bind:class="chunkClass" v-for="item in chunkList[row - 1]">

                <!-- Turn this into a component that you can pass in -->
                <a :href="item.url" target="blank"><div class="team-container">
                    <div class="team-img">
                        <img :src="item.img">
                    </div>
                    <div class="team-overlay flex-center flex-column">
                        <div class="name">{{item.name}}</div>
                        <div class="t-title">{{item.title}}</div>
                    </div>
                </div></a>
                <!-- // -->

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgGrid',
    props: ['title', 'list', 'chunkSize'],
    computed: {
        y : function() {
            var x = this.list.length;
            if(x > this.chunkSize) {
                var extra = x % this.chunkSize ? 1 : 0;
                return parseInt(x / this.chunkSize) + extra;
            }
            return 1;
        },
        chunkList : function() {
            var i,
            temp = this.list,
            chunkList = [],
            j = this.list.length;

            for(i = 0; i < j; i += this.chunkSize) {
                chunkList.push(temp.slice(i, i + this.chunkSize));
            }
            return chunkList;
        },
        chunkClass : function() {
            var size = parseInt(12 / this.chunkSize);
            return "is-" + size;
        }
    }
}
</script>

<style lang="scss">

.img-grid {
    margin-bottom: 2.25em;

    .team-container {
        position: relative;
        box-sizing: inherit;
        height: 96.5%;

        &:hover {
            cursor: pointer;
        }

        &:hover .team-overlay {
            opacity: 1;
        }

        .team-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            transition: .3s ease;
            background-color: rgba(0, 0, 0, .5);
            color: #fff;
            text-align: center;

            @media screen and (max-width: 1200px) {
        		background-color: rgba(0, 0, 0, .25);
                opacity: 1;
        	}
        }

        .t-title {
            font-weight: 600;
        }
    }
}
</style>

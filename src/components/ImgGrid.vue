<template lang="html">
    <div class="img-grid">
        <div class="content">
            <h3>{{title}}</h3>
        </div>
        <div class="columns" v-for="row in y">
            <div class="column is-one-quarter" v-for="item in chunkList[row - 1]">
                <div class="team-container">
                    <div class="team-img">
                        <img :src="item.img">
                    </div>
                    <div class="team-overlay flex-center flex-column">
                        <div class="name">{{item.name}}</div>
                        <div class="t-title">{{item.title}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImgGrid',
    props: ['title', 'list'],
    data: function() {
        return {
            chunk: 4
        }
    },
    computed: {
        y : function() {
            var x = this.list.length;
            if(x > this.chunk) {
                var extra = x % this.chunk ? 1 : 0;
                return parseInt(x / this.chunk) + extra;
            }
            return 1;
        },
        chunkList : function() {
            var i,
            temp = this.list,
            chunkList = [],
            j = this.list.length;

            for(i = 0; i < j; i += this.chunk) {
                chunkList.push(temp.slice(i, i + this.chunk));
            }
            return chunkList;
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
        }

        .t-title {
            font-weight: 600;
        }
    }
}
</style>

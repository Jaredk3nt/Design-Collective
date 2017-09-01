<template lang="html">
<div class="img-display">
    <div class="img-display-container" v-if="side === 'left'">
        <div class="img-box">
            <img v-bind:src="image">
        </div>
        <div class="content-container">
            <div class="content">
                <h3>{{title}}</h3>
                <p>{{description}}</p>
                <div v-if="buttonText.length > 0">
                    <a :href="url" class="deco-button" v-if="link">
                        {{buttonText}}
                    </a>
                    <router-link class="deco-button" :to="url" v-if="!link">
                        {{buttonText}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="img-display-container right" v-else>
        <div class="content-container">
            <div class="content">
                <h3>{{title}}</h3>
                <p>{{description}}</p>
                <div v-if="buttonText.length > 0">
                    <a :href="url" class="deco-button" v-if="link">
                        {{buttonText}}
                    </a>
                    <router-link class="deco-button" :to="url" v-if="!link">
                        {{buttonText}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="img-box">
            <img v-bind:src="image">
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "ImgDisplay",
    props: ["side", "title", "description", "image", "buttonText", "url", "link"]
}
</script>

<style lang="scss">
.img-display {
    display: flex;
    align-items: center;
    justify-content: center;

    .img-display-container {
        width: 100%;
        display: flex;
        flex-direction: row;

        .img-box {
            flex: 1;
            width: 49%;
            box-sizing: border-box;
            img {
                width: 100%;
            }

            @media screen and (max-width: 1200px) {
        		display: none;
        	}
        }
        .content-container {
            flex: 1;
            width: 49%;
            box-sizing: border-box;
            vertical-align: top;
            padding-left: 1.2rem;

            @media screen and (max-width: 1200px) {
        		padding-left: 0rem;
                width: 90%;
        	}

            .content {
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: center;

                .deco-button {
                    width: auto;
                }

            }
        }
    }

    .right {
        .content-container {
            padding-left: 0em;
            padding-right: 1.2rem;
        }

        .deco-button {

        }
    }
}
</style>

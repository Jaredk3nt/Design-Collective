<template lang="html">
<div class="columns is-centered page-body">
    <div class="column is-three-quarters">
        <div class="content">
            <h3>The Design Collection</h3>
        </div>
        <div class="columns is-multiline design-collection">
            <div class="column card-blue is-half">
                <div class="card-title-big">
                    UT Design Course-list
                </div>
            </div>
            <div class="column card-pink is-half">
                <div class="card-title-big">
                    Center For Integrated Design
                </div>
            </div>
            <div class="column card-pink is-one-third">
                <div class="card-title">
                    Graphic Design
                </div>
            </div>
            <div class="column card-yellow is-one-third">
                <div class="card-title">
                    UI/UX
                </div>
            </div>
            <div class="column card-blue is-one-third">
                <div class="card-title">
                    Interaction Design
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$blue: #3390ff;
$pink: #ff99d8;
$yellow: #eac40c;

.design-collection {
    .card {
        display: flex;
        border-radius: 0px;
        height: 10em;
        text-align: center;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;

        &:hover .card-title {
            transform: scale(1.1);
        }

        .card-title {
            color: #fff;
            font-weight: 600;
            font-size: 1.2rem;

            transition: transform 0.3s ease-in-out;
            -webkit-transition: transform 0.3s ease-in-out;
            -moz-transition: transform 0.3s ease-in-out;
            -o-transition: transform 0.3s ease-in-out;
            -ms-transition: transform 0.3s ease-in-out;
        }

        .card-title-big {
            @extend .card-title;
            font-size: 1.4rem;
        }
    }

    .card-blue {
        @extend .card;
        background-color: $blue;
    }

    .card-pink {
        @extend .card;
        background-color: $pink;
    }

    .card-yellow{
        @extend .card;
        background-color: $yellow;
    }
}

</style>

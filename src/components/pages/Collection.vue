<template lang="html">
<div class="page-container">
    <div class="page-body">
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
            <div class="column card-grey is-one-third">
                <div class="card-title">
                    Graphic Design
                </div>
            </div>
            <div class="column card-grey2 is-one-third">
                <div class="card-title">
                    UI/UX
                </div>
            </div>
            <div class="column card-grey is-one-third">
                <div class="card-title">
                    Interaction Design
                </div>
            </div>
            <div class="column card-grey2 is-one-third">
                <div class="card-title">
                    Animation
                </div>
            </div>
            <div class="column card-grey is-one-third">
                <div class="card-title">
                    Industrial Design
                </div>
            </div>
            <div class="column card-grey2 is-one-third">
                <div class="card-title">
                    Game Design
                </div>
            </div>
            <div class="column card-grey is-one-third">
                <div class="card-title">
                    Fashion
                </div>
            </div>
            <div class="column card-grey2 is-one-third">
                <div class="card-title">
                    Illustration
                </div>
            </div>
            <div class="column card-grey is-one-third">
                <div class="card-title">
                    Video Design
                </div>
            </div>
        </div>
        <div class="content">
            <h5><strong>*</strong> Grey Boxes are WIP, we'll have them ready for you soon!</h5>
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
    @mixin card-hover {
        &:hover {
            cursor: pointer;
        }

        &:hover .card-title {
            transform: scale(1.1);
        }
    }

    .card {
        display: flex;
        border-radius: 0px;
        height: 10em;
        text-align: center;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;

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
        @include card-hover();
        background-color: $blue;
    }

    .card-pink {
        @extend .card;
        @include card-hover();
        background-color: $pink;
    }

    .card-yellow {
        @extend .card;
        @include card-hover();
        background-color: $yellow;
    }

    .card-grey {
        @extend .card;
        background-color: #aaa;
        .card-title {
            color: #eee;
        }
    }

    .card-grey2 {
        @extend .card-grey;
        background-color: #bbb;
    }
}

</style>

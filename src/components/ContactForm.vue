<template lang="html">
    <div class="contact-form">
        <div class="close-button">
            X
        </div>
        <div class="flex-container container">
            <div class="form-content">
                <div class="columns">
                    <div class="column is-4">
                        <div class="field">
                            <label class="label is-small">Name</label>
                            <div class="control">
                                <input type="text" class="input is-small" value="">
                            </div>
                        </div>
                    </div>
                    <div class="column is-4">
                        <div class="field">
                            <label class="label is-small">Email</label>
                            <div class="control">
                                <input type="text" class="input is-small" value="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <textarea class="textarea" placeholder="e.g. Hello world" rows="3"></textarea>
                    </div>
                </div>


                <div class="field is-grouped-right">
                    <div class="control">
                        <button class="button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactForm",
    props: []
}
</script>

<style lang="scss">
.contact-form {
    width: 100%;
    margin-top: 3.25em;
    height: auto;
    background: #000;

    .close-button {
        font-size: 1.4rem;
        position: relative;
        float: right;
        color: #fff;
        font-weight: 600;
        margin: .2em .75em;
    }

    .flex-container {
        width: 100%;
        padding: .5rem 0rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .form-content {
            width: 75%;
            padding: .75rem;

            .columns {
                margin-bottom: 0em;
            }

            .label {
                color: #fff;
            }
        }
    }
}
</style>

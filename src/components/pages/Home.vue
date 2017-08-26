<template lang="html">
<div class="page-container-home">
    <div class="page-body">
        <div class="logo-container">
            <!-- <img src="../../assets/deco-logo-text.png" class="logo"> -->
            <div class="content">
                <h3>Working to promote the design community at the University of Texas at Austin</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est, sagittis at ipsum eu, iaculis dapibus velit. Integer aliquam tellus vel libero mollis, eget ultrices lacus venenatis. Quisque ut rutrum sapien. Aenean egestas risus sed fringilla sodales. Aenean vitae lacus justo.
                </p>
            </div>
        </div>

        <div class="image-display-container">
            <img-display
                side="left"
                title="A Community of Designers"
                description="Some description goes here to explain the purpose of the image display. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est, sagittis at ipsum eu, iaculis dapibus velit. Integer aliquam tellus vel libero mollis, eget ultrices lacus venenatis. libero mollis, eget ultrices lacus venenatis. "
                image="../../../static/community.jpg"
                buttonText="Join Us">
            </img-display>
        </div>
        <div class="image-display-container">
            <img-display
                side="right"
                title="Design Events"
                description="Some description goes here to explain the purpose of the image display. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est, sagittis at ipsum eu, iaculis dapibus velit. Integer aliquam tellus vel libero mollis, eget ultrices lacus venenatis. "
                image="../../../static/events.jpg"
                buttonText="Our Events">
            </img-display>
        </div>
        <div class="image-display-container">
            <img-display
                side="left"
                title="The Design Collection"
                description="Some description goes here to explain the purpose of the image display. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est."
                image="../../../static/collection.jpg"
                buttonText="Learn More">
            </img-display>
        </div>
        <div class="image-display-container">
            <img-display
                side="right"
                title="DECO Studio"
                description="Some description goes here to explain the purpose of the image display. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim metus quis enim bibendum, non aliquet nunc blandit. Morbi elementum cursus tempor. Morbi nisl est, sagittis at ipsum eu, iaculis dapibus velit. Integer aliquam tellus vel libero mollis, eget ultrices lacus venenatis. "
                image="../../../static/jared.jpg"
                buttonText="Contact">
            </img-display>
        </div>
    </div>
</div>
</template>

<script>
import ImgDisplay from '../ImgDisplay'
export default {
    name:"Home",
    components: {
        ImgDisplay
    }
}
</script>

<style lang="scss">
.logo-container {
    //text-align: center;
    .logo {
        width: 80%;
        margin-bottom: 2em;
    }
}


.image-display-container {
    padding-top: 3.25em;
}

</style>

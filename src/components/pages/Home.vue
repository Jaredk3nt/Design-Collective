<template lang="html">
<div class="page-container-home">
    <div class="page-body">
        <div class="logo-container">
            <!-- <img src="../../assets/deco-logo-text.png" class="logo"> -->
            <div class="content">
                <h3>Working to promote the design community at the University of Texas at Austin</h3>
                <p>
                    The field of design is exploding, more and more people are finding out that design is more than just the way things look, its a way of thinking about problems. Design Collective is here to help grow an interactive and supportive student community for anyone interested in design, no matter their major or ambitions.
                </p>
            </div>
        </div>

        <div class="image-display-container">
            <img-display
                side="left"
                title="A Community of Designers"
                description="Design Collective provides learning experiences, mentorship, and career growth opportunities. We have a facebook group for students of UT so that they can interact with one another and reach out to student designers for support and mentorship."
                image="../../../static/community.jpg"
                buttonText="Join Us"
                url="/About"
                :link="false">
            </img-display>
        </div>
        <div class="image-display-container">
            <img-display
                side="right"
                title="Design Events"
                description="Design Collective holds events throughout the year hosting local Austin designers and innovators to help inspire and teach the UT student body."
                image="../../../static/events.jpg"
                buttonText="Our Events"
                url="/Events"
                :link="false">
            </img-display>
        </div>
        <div class="image-display-container">
            <img-display
                side="left"
                title="The Design Collection"
                description="Design Collective is working to create a comprehensive guide to many design fields that will give students resources on how to get started learning, and help them find classes that will fit their interests."
                image="../../../static/collection.jpg"
                buttonText="Learn More"
                url="/Collection"
                :link="false">
            </img-display>
        </div>
        <div class="image-display-container">
            <img-display
                side="right"
                title="DECO Studio"
                description="DECO Studio is a unique portion of Design Collective that takes on work from UT organizations and local non-profits. This allows students to obtain real world experience and expand their portfolios, while giving back to the Austin community."
                image="../../../static/studio.jpg"
                buttonText="Contact"
                url="https://docs.google.com/forms/d/e/1FAIpQLSdJYEtmbpPdTlTeV3kO5Y1VAQYNCEUP2yQlZnbooRaw-ty2ug/viewform"
                :link="true">
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

# design-collective

> Website for UT Austin's Design Collective

## Build Setup
Getting started you will need to install [Node.js](https://nodejs.org) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
> Check the 'Technologies' section for more info on what Node.js & Git are and how we are using it in this project

After you have Node.js and Git, you can `git clone` this repository and then run `npm install` and `npm run dev` to get started.

``` bash
# install dependencies
npm install

# serve locally with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Technologies
### Vue.js
[Vue documentation](https://www.vuejs.org/v2/guide/)
> Vue.js is a front-end javascript framework that helps to allow you to quickly create powerful SPA's

##### What do you need to know
Vue.js is a component based framework, so the application is made up of individual "components" that help to encapsulate ideas, and modularize the code base. In this project we are using single file components, so instead of writing javascript/HTML/CSS files we are creating .vue files that contain the HTML templating, scripts, and scoped CSS for each component.
```
<template lang="html">
    HTML goes here
</template>

<script>
    export default {
        JS Goes here
    }
</script>

<style lang="scss">
    CSS goes here
</style
```

### Bulma & SCSS

### Node.js

### Git
>Great tutorial on git [here](https://www.atlassian.com/git/tutorials)

Git is a 'version control system' that we use to allow us to keep track of the code and work in parallel with one another.

## Data Formats
#### Team member
``` json
{
    "name": "First Last",
    "title": "Title",
    "img": "./static/name.jpg",
    "url": "https://url.com"
}
```
#### Organizations
``` json
{
    "name": "UT Org Name",
    "img": "./static/orgName.jpg",
    "url": "https://orgurl.com"
}
```
#### Events
``` json
{
    "time": "",
    "day": "",
    "month": "",
    "year": "",
    "title": "",
    "description": "",
    "location": "",
    "url": ""
}
```

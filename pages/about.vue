<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()

const tabData = [
    ['#d9c29c', ''],
    ['#d1ddff', 'career'],
    ['#f2d1ff', 'education'],
    ['#babaff', 'spiritual-health'],
    ['#daffba', 'physical-health'],
]
const colour = computed(() => {
    let backgroundColour
    for (let i = 0; i < tabData.length; i++) {
        if ('/about/' + (tabData[i][1] ? tabData[i][1] + '/' : '') == route.path + '/') {
            backgroundColour = tabData[i][0]
        }
    }
    return (backgroundColour)

});

function tabZIndex(tabName) {
    if ('/about/' + (tabData[tabName][1] ? tabData[tabName][1] + '/' : '') == route.path + '/') {
        return (10)

    } else {
        return (0)
    }
}

</script>
<template>
    <div class="page">
        <Title>About Asher</Title>

        <h1>My name is Asher.</h1>

        <div id="file-window">
            <div id="tab-bar">
                <NuxtLink :style="{ backgroundColor: tabData[0][0], zIndex: tabZIndex(0) }" id="index-tab" to="/about">
                    General</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[1][0], zIndex: tabZIndex(1) }" class="tab"
                    to="/about/career">
                    Career</NuxtLink>   
                <NuxtLink :style="{ backgroundColor: tabData[2][0], zIndex: tabZIndex(2) }" class="tab"
                    to="/about/education">
                    Education</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[3][0], zIndex: tabZIndex(3) }" class="tab"
                    to="/about/spiritual-health">
                    Spiritual Health</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[4][0], zIndex: tabZIndex(4) }" class="tab"
                    to="/about/physical-health">
                    Physical Health</NuxtLink>
            </div>
            <div id="mini-page" v-if="route.path == '/about'">
                <h1> {{ colour }}</h1>
                <h2>no</h2>

            </div>
            <NuxtPage />

        </div>
    </div>
</template>
<style>
a {
    white-space: nowrap;
}

#mini-page {
    background-color: v-bind(colour);
}
</style>
<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()

const tabData = [
    ['#d9c29c', ''],
    ['#d1ddff', 'service'],
    ['#f2d1ff', 'career'],
    ['#babaff', 'community'],
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
        return (2)

    } else {
        return (0)
    }
}


</script>
<template>
    <div class="page">
        <Title>About Asher</Title>

        <h1>About Asher</h1>

        <div id="file-window">
            <div id="tab-bar">
                <NuxtLink :style="{ backgroundColor: tabData[0][0], zIndex: tabZIndex(0) }"
                    id="index-tab" to="/about">
                    General</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[1][0], zIndex: tabZIndex(1) }"
                    class="tab" to="/about/service">
                    Service</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[2][0], zIndex: tabZIndex(2) }"
                    class="tab" to="/about/career">
                    Career</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[3][0], zIndex: tabZIndex(3) }"
                    class="tab" to="/about/community">
                    Community</NuxtLink>
                <NuxtLink :style="{ backgroundColor: tabData[4][0], zIndex: tabZIndex(4) }"
                    class="tab" to="/about/physical-health">
                    Health</NuxtLink>
            </div>
            <div id="mini-page" v-if="route.path == '/about'">
                <h1>Some things about me.</h1>
                <ul>
                    <li>
                        Age: 15
                    </li>
                    <li>
                        School: Vancouver Christian School
                    </li>
                    <li>
                        A brother and a sister
                    </li>
                    <li>
                        Favourite subject is science
                    </li>
                    <li>
                        Loves programming
                    </li>
                </ul>

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
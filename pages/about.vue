<script setup>
import { useRoute } from 'vue-router';

    const route = useRoute()
    if (route.path == "/about") {

    }
</script>
<template>
    <div class="page">
        <Title>About Asher</Title>

        <h1>My name is Asher.</h1>

        <div id="file-window">
            <div id="tabs">
                <NuxtLink to="/about">General</NuxtLink>
                <NuxtLink to="/about/career-and-education">Career and Education</NuxtLink>
                <NuxtLink to="/about/spiritual-health">Spiritual Health</NuxtLink>
                <NuxtLink to="/about/physical-health">Physical Health</NuxtLink>
            </div>
            <div id="mini-page">
                
                <NuxtPage />

            </div>
        </div>
    </div>
</template>

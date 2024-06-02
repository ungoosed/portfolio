<script setup>
defineProps({
    caption: String,
    image: String,
    color: Boolean,
})

</script>
<template>
    <div class="ImageCard">
        <h3>{{ caption }}</h3>
        <img :src="image">

    </div>
</template>
<style scope>
.ImageCard {
    min-height: 10rem;
    max-height: 30vh;

    position: relative;
    box-shadow: 2px 3px 20px black;
    border-radius: 12px;
    margin: 1rem;
}
img {
    border-radius: 12px;
    min-height: 10rem;
    max-height: 30vh;

}
h3 {
    color:white;
    position: absolute;
    left:0px;
    bottom:0px;
    margin: 0.5rem;
}
</style>

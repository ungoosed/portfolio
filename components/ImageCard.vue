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
    width: 30rem;
    position: relative;
    box-shadow: 2px 3px 10px black;
    border-radius: 12px;
    margin: 1rem;
    display:flex;
    flex-grow: 1;
    max-width: 20rem;
}
img {
    border-radius: 12px;
    flex-grow: 1;
    width: 1rem;


}
h3 {
    color:white;
    position: absolute;
    left:0px;
    bottom:0px;
    margin: 0.5rem;
}
</style>

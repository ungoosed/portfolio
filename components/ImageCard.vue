<script setup>
defineProps({
    caption: String,
    image: String,
    color: String,
})

</script>
<template>
    <div class="ImageCard">
        <h3>{{ caption }}</h3>
        <img :src="image" :alt="caption">

    </div>
</template>
<style scope>
.ImageCard img {
    border-radius: 12px;
    flex-grow: 1;
    width: 1rem;


}
.ImageCard h3 {
    color: v-bind(color);
    position: absolute;
    left:0px;
    bottom:0px;
    margin: 0.5rem;
}
</style>

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
    left: 0rem;
    bottom: 0rem;
    padding: 0.5rem;
    width: calc(100% - 1rem);
    border-radius: 0px 0px 12px 12px;
    margin: 0rem;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>

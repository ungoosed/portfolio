<script setup>
defineProps({
    title: String,
    content: String,
    color: String,
})

</script>
<template>
    <div class="TextCard">
        <div id="section">
            <h2>{{ title }}</h2>
            <p>{{content}}</p>
        </div>
        <slot>

        </slot>

    </div>
</template>
<style scoped>

h2 {
    color:black;
    margin: 0.5rem;
    top:0.5rem;
    left:0.5rem;
    margin-bottom: 0px;
}
p {
    color:black;
    margin: 0.5rem;
}
.TextCard {
    background-color: v-bind(color);
}
</style>

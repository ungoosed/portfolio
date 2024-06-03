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
#section {
    display:flex;
    flex-direction: column;
    align-items: center;
}
.TextCard {
    position: relative;
    box-shadow: 2px 3px 10px black;
    border-radius: 12px;
    display:flex;
    flex-flow: row wrap;
    flex-grow: 1;
    max-width: 90%;
    background-color: v-bind(color)
}
h2 {
    color:black;
    margin: 0.5rem;
    top:0.5rem;
    left:0.5rem;
}
p {
    color:black;
    margin: 0.5rem;
    width: 20rem;
}
</style>

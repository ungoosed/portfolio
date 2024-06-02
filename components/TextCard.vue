<script setup>
defineProps({
    title: String,
    body: String,
})

</script>
<template>
    <div class="TextCard">
        <h2>{{ title }}</h2>
        <p>{{body}}</p>

    </div>
</template>
<style scope>
.TextCard {
    position: relative;
    box-shadow: 2px 3px 20px black;
    border-radius: 12px;
    margin: 1rem;
}
h2 {
    color:black;
    margin: 0.5rem;
}
p {
    color:black;
    margin: 0.5rem;
}
</style>

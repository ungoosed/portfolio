<template>
    <div id="homeButton">
        <h1>Asher Chan's Portfolio</h1>
    </div>
    <div id="NavBar">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/Projects">Projects</NuxtLink>
        <NuxtLink to="/about">Skills</NuxtLink>
    </div>

</template>
<style scoped>
h1 {
  color:white;
}
@media only screen and (max-width: 60rem) {
  h1 {
    display: none;
  }
}

</style>
<template>
    <div id="homeButton">
        <h1 id="title">Asher Chan's Portfolio</h1>
    </div>
    <div id="NavBar">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/skills">Skills</NuxtLink>
    </div>

</template>
<style scoped>
h1 {
  color:white;
}
@media only screen and (max-width: 60rem) {
  #title {
    display: none;
  }
}

</style>
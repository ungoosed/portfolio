<template>
  <div id="mini-page">
    <h1>Job Shadowing</h1>
    <TextCard title="Presentation"
      content="I job shadowed various people for 5 days. These people including a geotechnical engineer, two architects, an engineering consultant. ">
      <iframe id="job-shadow"
        src="https://docs.google.com/presentation/d/e/2PACX-1vTwAKDeH42thGbOMzY_IxibmbyegYY5jzn-HZy_RCo65RnR9ayxdsOCldAwc-XYBq9uzGbzumzky6Tl/embed?start=true&loop=true&delayms=5000"
        frameborder="0" width="500" height="299" allowfullscreen="true" mozallowfullscreen="true"
        webkitallowfullscreen="true" />
    </TextCard>
<h1>Resume</h1>
    <embed id="resume" src="/resume.pdf" type="application/pdf" />
  </div>
</template>
<style scoped>
.ImageCard {
  width: 15rem;
  flex-grow: 1;
}

#job-shadow {
  border-radius: 12px;
  box-shadow: 0px 0px 10px black;
}
#resume {
  border-radius: 12px;
  box-shadow: 0px 0px 10px black;
  flex-grow: 1;
  margin: 1rem;
  height: 50rem;
}
.TextCard {
  flex-grow: 1;
}
</style>
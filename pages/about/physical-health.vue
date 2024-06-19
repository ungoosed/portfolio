<template>
  <div id="mini-page">
    <h1>Health</h1>
    <TextCard title="Physical Health"
      content="Hiking is a fun way that I am physically active, as well as a way to spend time with family and friends. I've recently hiked the Juan de Fuca Trail, up Frosty Mountain, and through Garibaldi Park. I also frequently run. 
      I participate in Parkrun, a weekly free five-kilometre run hosted by volunteers. Every so often I'll do a longer run, ranging from 10 - 25 kilometres, sometimes in the forest or the city. Another way I get out and about is by cycling. Last summer, I did my first 100 km bike ride, at the Tour de Victoria.">
    </TextCard>
    <TextCard title="Mental Health" content="Some ways I exercise my brain are through coding and math contests. I've been learning various coding languages since Grade 6, and am fully self taught. I've found that learning on my own helps me get better at researching and taking my own initiative. Coding improves my logical thinking and math ability.
       I also read books fairly often.">
    </TextCard>
    <h1>Photos</h1>
    <div class="accomplish">
      <ImageCard caption="At the top of Frosty Mountain" image="/images/hiking-frosty.jpg" color="white">
      </ImageCard>
      <ImageCard caption="Run Ridge Run - 25km Trail race" image="/images/run-ridge-run.jpg" color="white">
      </ImageCard>
    </div>
    <div class="accomplish">
      <ImageCard caption="Cycling from the sea to Mount Seymour" image="/images/cycling-seymour.jpg" color="white">
      </ImageCard>
      <ImageCard caption="Camping at Bear Beach" image="/images/hiking-juan-de-fuca.png" color="white">
      </ImageCard>

    </div>


  </div>
</template>
<style scoped>
.accomplish {
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  flex-flow: row wrap;

}

.ImageCard {
  width: 25rem;
  align-self: center;
}

.TextCard {
  width: 56rem;
  flex-grow: 1;
}
</style>
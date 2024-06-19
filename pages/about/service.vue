<template>
  <div id="mini-page">
    <h1>Camp Qwanoes</h1>
    <TextCard title="Kitchen OSC Week"
      content="I volunteered in the Qwanoes Kitchen from August 25th - August 31st, working the morning shift from around 5:30 am to 12 pm">
      <ImageCard caption="Youth Camp Kitchen Crew" image="/images/qwanoes-kitchen-team.png" color="white">
      </ImageCard>
    </TextCard>
    <TextCard title="Step-Out & CIT OSC" content="I finished Qwanoes' Step-Out leadership program in the summer of 2023. 
        Part of the program involves a week of service in the dish pit, for a few hours a day.
        From May 17th to May 20th, I volunteered in the Qwanoes dish pit for somewhere around 16 hours in total.">
        <ImageCard caption="Step-Out #1" image="/images/qwanoes-step-out.png" color="white">
      </ImageCard>
    </TextCard>
    <TextCard title="FBC Art Camp" content="I volunteered at the First Baptist Church of Nanaimo for a week in the summer of 2021 and another week in the summer of 2022. This camp involved organizing activities for kids, helping a group complete them, playing with the kids outside, and cleaning and setting up.">
      <ImageCard caption="FBC Art Camp 2021" image="/images/fbc-art-camp.png" color="white">
      </ImageCard>
    </TextCard>

  </div>

</template>
<style scoped>
.ImageCard {
  position: relative;
  box-shadow: 0px 0px 10px black;
  border-radius: 12px;
  flex-grow: 1;
  min-width: 20rem;
}

.TextCard {
  flex-grow: 1;
}
</style>
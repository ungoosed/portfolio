<template>
    <div class="page">
        <Title>Asher's Skills</Title>
        <h1>Talents</h1>
        <TextCard color="#b2f7c5bb" title="Origami" content="I've been folding origami most of my life. 
            My first major project was at the end of Grade 6 for my passion project, during the COVID19 pandemic. 
            I folded Satoshi Kamiya's Ancient Dragon, which took around 15 hours, including prep time to fold. 
            My latest project was designing my own original origami penguin.">
            <ImageCard color="white" image="/images/penguin-origami.jpg" caption="Origami Penguins - Designed by me" />

        </TextCard>
        <TextCard color="#ffffffbb" title="Coding"
            content="I first learned programming in Grade 5 through Scratch, 
            a visual coding language geared towards beginners, where I created my first games.
            In Grade 7, I began messing around with HTML and Javascript, creating my first websites. 
            In 2023, I coded a video game about reproduction for Science 9/10. 
            I've involved myself in other self-driven projects including Minecraft mods, web development, and more video games.">
            <ImageCard color="white" image="/images/quest-for-conception.png"
                caption="The Quest for Conception - Created by Asher Chan and Jayden Law" />
        </TextCard>
        <TextCard color="#ecc7fcaa" title="Juggling"
            content="My juggling journey began in the spring of 2022, where I first learned the 3 ball cascade. 
            I continued to practice infrequently until the winter of 2022, when I chose it as my skill activity for the Duke of Edinburgh Award. 
            Since then I have learned the Mill's Mess, the Shower, and various other tricks, including a 4 ball fountain.">
            <ImageCard color="white" image="/images/juggle.jpg" caption="Juggling 3 balls" />
        </TextCard>
        <h1>Accomplishments</h1>
        <div id="accomplish">
            <ImageCard color="white" image="/images/honours-science.png" caption="Top Science 9/10 Honours Accelerated Student" />
            <ImageCard color="white" image="/images/dragon-origami.jpg" caption="I folded the Ancient Dragon - Designed by Satoshi Kamiya" />
        </div>
        <div id="accomplish">
        <ImageCard color="white" image="/images/distinction-cayley.png" caption="Distinction - CEMC Cayley Math Contest" />
            <ImageCard color="white" image="/images/distinction-galois.png" caption="Distinction - CEMC Galois Math Contest" />
        </div>

    </div>
</template>
<style scoped>
.ImageCard {
    width: 20rem;
}
#accomplish {
    display:flex;
    flex-flow: row wrap;
    margin: 1rem;
}
.TextCard {
    width: 56rem;
    flex-grow: 1;
}
</style>

<template>
    <div class="content">
        <Title>Asher's Portfolio - Skills</Title>
        <h1>Skills & Accomplishments</h1>
        <div class="section">
            <h2>
                Origami
            </h2>
            <ImageCard image="/images/dragon-origami.jpg" caption="Origami Ancient Dragon - Designed by Satoshi Kamiya">
            </ImageCard>
        </div>

        <h2>
            Coding
        </h2>
        <br>
        <h2>
            Juggling
        </h2>
    </div>
</template>
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    border-radius: 12px;
    min-width: 5rem;
    width: 70%;
}

.content h1 {
    color: palegoldenrod;
    text-shadow: 2px 3px 20px black;
}
.section {
    display:flex;
    flex-direction: row wrap;
    padding: 1rem;
}
</style>
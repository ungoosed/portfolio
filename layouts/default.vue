<template>
    <NavBar>
    </NavBar>
    <slot>
    </slot>
</template>
<style>
@import url(/assets/base.css);

#feet {
    box-shadow: 2px 3px 20px black;
    background: #7dc0ff50;
    width:100%;
    height: 3rem;
    z-index: 100;
    color:white;
    justify-self: center;
    padding: 1rem;
    bottom: 0px;
}

@media only screen and (max-width: 60rem) {
  h1 {
    display: none;
  }
}



</style>
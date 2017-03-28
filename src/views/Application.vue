<template>
  <div id="app">
    <router-view></router-view>
    <router-link :to="{ name: 'homepage' }" exact class="logo--chiediariccardo">Chiedi a Riccardo</router-link>
    <router-link :to="{ name: 'newPerla' }" exact class="button--new-perla">Nuova Perla</router-link>
  </div>
</template>

<script>
  /* global window */

  import { mapActions } from 'vuex'

  export default {
    created() {
      window.addEventListener('keyup', this.changeAsync)
    },

    methods: mapActions([
      'changeAsync',
    ]),
  }
</script>

<style lang="scss">
  @import '../scss/mixins.scss';

  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:900');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,500,600&subset=latin-ext');

  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background-image: url('../assets/natural.png');
    font-style: italic;
    overflow: hidden;
    margin: 0;
  }

  .logo--chiediariccardo {
    @include size(200px 120px);
    @include hide-text();
    @include position(absolute, 30px null null 50%);

    transform: translateX(-50%);

    background-position: center;
    background-image: url('../assets/logo.png');
    background-repeat: no-repeat;
  }

  .button--new-perla {
    @include position(absolute, null null 35px 50%);

    transform: translateX(-50%);

    color: white;

    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 14px;

    font-style: normal;

    text-transform: uppercase;
    text-decoration: none;

    padding: 10px 16px;

    border: 1px solid white;

    &:hover {
      background-color: white;
      color: black;
    }
  }
</style>

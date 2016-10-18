<template>
  <div id="app" tabindex="0" @click="changeAsync">
    <div id="quote-wrapper" v-bind:class="{ infused: isInfused }">
  	  <div id="quote-gif" v-bind:style="{ backgroundImage: `url(${current.image})` }"></div>
  	  <h1 id="quote">
    		<span v-html="current.perla"></span>
    		<sub style="vertical-align: sub; font-size:20px;">
    			R.V.
    		</sub>
  	  </h1>
    </div>
    <p id="counter">Saggezza infusa {{ count }} {{ count != 1 ? 'volte' : 'volta' }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Hello from './components/Hello';

export default {
  created() {
    window.addEventListener('keyup', this.changeAsync);
  },
  components: {
    Hello,
  },
  computed: mapGetters([
    'count',
    'current',
    'recentHistory',

    'isInfused',
  ]),
  methods: mapActions([
    'change',
    'changeAsync',
  ]),
};
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    background: #666;
    font-style: italic;
    overflow: hidden;
    margin: 0;
  }

  #quote-wrapper {
    font-family: 'Avenir LT W01_95 Black1475556';

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-transform: uppercase;

    opacity: 0;
    transition: opacity 700ms;

    &.infused {
      opacity: 1;
    }
  }

  #quote-gif {
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }

  #quote {
    position: absolute;

    top: 50%;
    left: 0;
    right: 0;

    margin: 0;
    padding: 1em;

    font-size: 45px;
    line-height: 1.2em;
    text-align: center;

    transform: translateY(-50%);

    color: white;
    text-shadow: 0 0 5px rgba(0,0,0,0.25), 0 1px 1px rgba(0,0,0,0.5);
  }

  #counter {
    position: absolute;

    margin: 0;

    right: 5px;
    bottom: 3px;

    font-size: 10px;
    text-transform: uppercase;

    color: #999;
    text-shadow: 0 0 20px rgba(0,0,0,0.45), 0 2px 2px rgba(0,0,0,0.65);
  }
</style>

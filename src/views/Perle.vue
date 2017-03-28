<template>
  <div id="perle" tabindex="0" @click="changeAsync">
    <div id="quote-wrapper" v-bind:class="{ infused: isInfused }">
  	  <div id="quote-gif" v-bind:style="{ backgroundImage: `url(${current.image_url})` }"></div>
  	  <h1 id="quote">
    		<span v-html="current.text"></span>
    		<!--<sub style="vertical-align: sub; font-size:20px;">
    			R.V. {{ currentRating }}
    		</sub>-->
  	  </h1>
    </div>
    <p id="counter">Saggezza infusa {{ count }} {{ count != 1 ? 'volte' : 'volta' }}</p>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    created() {
      this.$store.dispatch('getAllPerle')
    },
    computed: {
      ...mapGetters([
        'count',
        'current',
        'ratings',
        'recentHistory',

        'isInfused',
      ]),
      currentRating() {
        const { id } = this.current

        if (id) {
          const { cumulative, quantity } = this.ratings[id]

          if (cumulative && quantity) {
            return cumulative / quantity
          }
        }

        return ''
      },
    },
    methods: mapActions([
      'change',
      'changeAsync',
    ]),
  }
</script>

<style lang="scss">
  @import '../scss/mixins.scss';

  #quote-wrapper {
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
    @include position(absolute, 0 0 0 0);

    z-index: 0;

    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }

  #quote {
    @include position(absolute, 50% 0 null 0);

    transform: translateY(-50%);

    font-family: 'Poppins', sans-serif;

    font-weight: 600;
    font-size: 36px;
    line-height: 1.2em;
    text-align: center;

    margin: 0;
    padding: 1em;

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

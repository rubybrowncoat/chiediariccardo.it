<template>
  <div id="form" class="form--new">
    <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
        <h1>Nuova Perla</h1>
        <div class="form-item" :class="{'has-error': errors.has('perla') }">
            <input name="perla" v-model="perla" v-validate:perla.initial="'required|min:3'" type="text" placeholder="Perla">
            <p class="text-danger" v-show="errors.has('perla')">
              !
              <span class="tooltip">{{ errors.first('perla') }}</span>
            </p>
        </div>
        <div class="form-item" :class="{'has-error': errors.has('gif') }" >
            <input name="gif" v-model="gif" v-validate:gif.initial="'url'" type="text" placeholder="Gif">
            <p class="text-danger" v-show="errors.has('gif')">
              !
              <span class="tooltip">{{ errors.first('gif') }}</span>
            </p>
        </div>
        <div class="form-item" :class="{'has-error': errors.has('slug') }">
            <input name="slug" v-model="slug" v-validate:url.initial="'alpha_dash'" type="text" placeholder="Slug">
            <p class="text-danger" v-show="errors.has('slug')">
              !
              <span class="tooltip">{{ errors.first('slug') }}</span>
            </p>
        </div>
        <div class="form-item" :class="{'has-error': errors.has('segreto') }">
            <input name="segreto" v-model="segreto" v-validate:url.initial="'required|segreto'" type="password" placeholder="Segreto">
            <p class="text-danger" v-show="errors.has('segreto')">
              !
              <span class="tooltip">{{ errors.first('segreto') }}</span>
            </p>
        </div>

        <button class="button--spara-nello-spazio" type="submit" :disabled="formSubmitting">Spara nello Spazio!</button>
    </form>
    <div v-else>
      <h1 class="submitted">Perla salvata correttamente!</h1>
      <p v-on:click="resetForm">Nuova Perla?</p>
    </div>
    <router-link :to="{ name: 'homepage' }" exact class="action--close">&middot;</router-link>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        perla: '',
        gif: '',
        slug: '',
        segreto: '',
        formSubmitting: false,
        formSubmitted: false,
      };
    },
    methods: {
      validateBeforeSubmit(e) {
        this.$validator.validateAll().then(() => {
          this.submitForm()
        }).catch(() => {

        });
      },
      async submitForm(){
        this.formSubmitting = true

        await this.postNewPerla({
          text: this.perla,
          image_url: this.image,
          slug: this.slug,
        });

        this.formSubmitted = true
      },
      resetForm() {
        Object.assign(this.$data, this.$options.data())
      },
      ...mapActions([
        'postNewPerla',
      ]),
    }
  }
</script>

<style lang="scss">
  @import '../scss/mixins.scss';

  .container {
    width: 500px;
  }
  h1 {
    text-align: center;
  }
  img {
    text-align: center;
  }
  .submitted {
    color: #4fc08d;
  }

  .form-item {
    @include position();

    padding: 5px 50px 5px 10px;
    border-bottom: 1px solid #a6a6a6;

    width: 220px;

    input {
      width: 100%;
      height: 30px;

      border: 0;
      outline: none;
    }
  }

  .text-danger {
    @include size(30px);
    @include position(absolute, 5px 10px null null);

    margin: 0;
    text-align: center;
    line-height: 30px;
    font-style: normal;

    color: white;
    background: red;

    border-radius: 3px;

    cursor: pointer;

    .tooltip {
      visibility: hidden;
      width: 210px;
      background-color: black;
      color: white;
      text-align: left;
      border-radius: 3px;
      padding: 5px;

      font-size: 12px;
      font-weight: 300;
      line-height: 16px;

      min-height: 20px;

      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: 0;
      right: calc(100% + 10px);
    }

    &:hover {
      .tooltip {
        visibility: visible;
      }
    }
  }

  .form--new {
    padding: 30px 60px;

    background-color: white;

    font-family: 'Poppins', sans-serif;

    position: relative;

    h1 {
      font-size: 18px;

      font-weight: 500;
      font-style: normal;

      text-transform: uppercase;
    }
  }

  .button--spara-nello-spazio {
    @include position(relative, null null 0 50%);

    color: black;
    border: 1px solid black;
    background-color: white;
    text-transform: uppercase;
    padding: 10px 16px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;

    margin-top: 30px;

    cursor: pointer;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  .action--close {
    @include position(absolute, 10px 10px null null);
    @include size(20px);

    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;

    cursor: pointer;

    line-height: 16px;
    font-size: 40px;

    text-align: center;
    overflow: hidden;

    color: black;
  }
</style>

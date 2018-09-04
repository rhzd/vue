<template>
  <div class="hello">
    <div class="left">
      <h1>{{ title }}</h1>
      <form @submit.prevent="addword">
          <input class="word-input" type="text" placeholder="Add a word" v-model="newword" />
      </form>
      <ul>
        <li v-for="(word, index) in words" v-bind:key="index">
          {{ word }}
          <button v-on:click="removewords(index)" class="rm">Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
      <VuexRight />
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }

  input {
    border: none;
    padding: 20px;
    width: calc(100% - 40px);
    box-shadow: 0 5px 5px lightgrey;
    margin-bottom: 50px;
    outline: none;
  }

  .rm {
    float: right;
    text-transform: uppercase;
    font-size: .8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: #ff0076;
    cursor:pointer;
  }

</style>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import VuexRight from '@/components/VuexRight'

export default {
  name: 'HelloWorld',
  data() {
    return {
      newword: ''
    }
  },
  components: {
    VuexRight
  },
  computed: {
    ...mapState([
      'title',
      'words'
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_word'
    ]),
    ...mapActions([
      'removeword'
    ]),
    addword: function() {
      this.ADD_word(this.newword)
      this.newword = ''
    },
    removewords: function(word) {
      this.removeword(word)
    }
  }
}
</script>

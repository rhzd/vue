<template>
  <v-container fluid>
    <div id="app">
      <h1 class="display-1">Click the button to get Random jokes</h1>
      <v-btn class="mb-3" color="primary" id="btn" v-on:click="getJokes"> Get Jokes </v-btn>
        <ul>
          <template v-for="(joke, index) in jokes">
            <li class="font-weight-regular">
              {{ joke.joke }} {{ joke.categories }}
            </li>
          </template>
        </ul>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
 name: 'app',
 data() {
  return {
   jokes: [],
   loading: false
  }
 },
 methods: {
  getJokes: function() {
   this.loading = true;
   axios.get("http://api.icndb.com/jokes/random/30").then((response) => {
    this.loading = false;
    this.jokes = response.data.value;
   }, (error) => {
    this.loading = false;
   })
  }
 },
}
</script>

<style>

</style>

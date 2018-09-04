<template>
  <div class="stats">
    <h1>A different component</h1>
    <p>There are currently {{ countwords }} words</p>
    <div class="text-xs-center">
      <v-btn
        :disabled="dialog"
        :loading="dialog"
        class="white--text"
        color="secondary"
        @click.stop="dialog = true"
        v-on:click="removeAllwords"
      >
        Remove all data
      </v-btn>
      <v-alert
      :value="alert"
      dismissible
      color="success"
      icon="check_circle"
      outline
      type="success"
      transition="scale-transition"
    >
      This is a success alert.
    </v-alert>
      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="secondary"
          dark
        >
          <v-card-text>
            Please wait
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<style scoped>
  button {
      width: 95%;
  }
</style>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Stats',
  data() {
    return {
      alert: false,
      dialog: false

    }
  },
  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 1500)
    }
  },
  computed: {
    ...mapGetters([
      'countwords'
    ]),
  },
  methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeAll']),
    removeAllwords() {
      this.removeAll().then(() => {
        this.alert = true
      });
    }
  }
}
</script>

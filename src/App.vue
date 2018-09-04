<template>
<v-app>
  <v-toolbar fixed app :clipped-left="clipped">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>VUE DEV</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to='/'>Home</v-btn>
      <v-btn flat to='/axios'>Axios</v-btn>
      <v-btn flat to='/vuex'>Vuex</v-btn>
      <v-btn flat to='/about'>About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <router-view/>
  </v-content>
  <v-navigation-drawer :clipped="clipped" v-model="drawer" enable-resize-watcher app>

    <v-container>
      <v-layout align-center>
        <v-flex xs12 class="text-xs-center">
          <img src="@/assets/avatar.png" alt="Logo" height="200">
          <p class='display-1'>VUE DEV</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-divider></v-divider>

    <v-list>
      <v-list-tile to="/">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Home</v-list-tile-title>
      </v-list-tile>

      <v-list-tile to="/axios">
        <v-list-tile-action>
          <v-icon>table</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Axios</v-list-tile-title>
      </v-list-tile>

      <v-list-tile to="/vuex">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Vuex</v-list-tile-title>
      </v-list-tile>

      <v-list-tile to="/about">
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>About</v-list-tile-title>
      </v-list-tile>

      <v-list-group prepend-icon="account_circle" value="true">
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group no-action sub-group value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(admin, i) in admins" :key="i" @click="">
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="">
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>

  </v-navigation-drawer>
  <v-footer height="auto">
    <v-layout justify-center row wrap>
      <v-flex lighten-2 py-3 text-xs-center xs12>
        &copy;2018 — <strong>IZAD</strong>
      </v-flex>
    </v-layout>
  </v-footer>

</v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: null,
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ]
    }
  }
}
</script>

<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-toolbar-title class="mr-5"
        >Getting data from GoRest API</v-toolbar-title
      >
      <router-link to="/users"
        ><v-btn depressed color="primary">Users</v-btn></router-link
      >
      <router-link to="/addUser"
        ><v-btn justify="space-around" color="#D8FFD4"
          >Add User</v-btn
        ></router-link
      >

      <router-link to="/about"
        ><v-btn justify="space-around">About</v-btn></router-link
      >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script></script>

<template>
  <div class="ListApp">
    <v-container>
      <v-list two-line flat>
        <v-row>
          <v-col v-for="user in usersList" :key="user.id">
            <v-card
              cols="2"
              height="300"
              width="500"
              class="d-flex justify-center mb-6"
            >
              <tr>
                <v-btn
                  depressed
                  color="#D4DDFF"
                  @click="navigateToEdit(user.id)"
                  >edit: {{ user.name }}</v-btn
                >
                <v-dialog v-model="dialog" width="500">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="red" dark v-bind="attrs" v-on="on">
                      Click Me
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title class="text-h5 grey lighten-2">
                      Are you sure?
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="(dialog = false), deleteUser(user.id)"
                      >
                        Yes
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <td>ID: {{ user.id }}</td>
                <hr />
                <td>
                  <h4>Name:</h4>
                  {{ user.name }}
                </td>
                <hr />
                <td>
                  <h4>Email:</h4>
                  {{ user.email }}
                </td>
                <hr />
                <td>
                  <h4>Gender:</h4>
                  {{ user.gender }}
                </td>
                <hr />
                <td>
                  <h4>Status:</h4>
                  {{ user.status }}
                </td>
                <hr />
              </tr>
            </v-card>
          </v-col>
        </v-row>
        <v-card
          cols="2"
          height="30"
          v-for="comment in usersComments"
          :key="comment.id"
        >
          <tr>
            <h5>COMMENT:</h5>
            <td>{{ comment.body }}</td>
          </tr>
        </v-card>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "userListApp",
  data() {
    return {
      usersList: [],
      usersComments: [],
      usersPosts: [],
    };
  },
  methods: {
    navigateToEdit(userID) {
      router.push(`editUser/${userID}`);
    },
    getData() {
      axios
        .get("https://gorest.co.in/public/v2/users/")
        .then((resp) => {
          this.usersList = resp.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteUser(userID) {
      const headers = {
        Authorization:
          "Bearer 41a8f27be7ff57ea6b993063a2a32bad327dd94363f69a07d4cb315dbc53bdcb",
      };

      axios
        .delete("https://gorest.co.in/public/v2/users/" + userID, { headers })
        .then(() => {
          let i = this.usersList.map((data) => data.id).indexOf(userID);
          this.usersList.splice(i, 1);
          console.log("user deleted");
        });
    },
    getComments() {
      axios
        .get("https://gorest.co.in/public/v2/comments")
        .then((resp) => {
          this.usersComments = resp.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPosts() {
      axios
        .get("https://gorest.co.in/public/v2/posts")
        .then((resp) => {
          this.usersPosts = resp.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getData(), this.getComments(), this.getPosts();
  },
};
</script>

<style></style>

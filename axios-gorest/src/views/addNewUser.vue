<template>
  <div>
    <div class="container d-flex">
      <div class="row">
        <div class="text-h5 mt-5">Enter new user details</div>
        <div class="col-md-12">
          <form>
            <div class="form-group">
              <label>Name</label>
              <v-text-field placeholder="Name..." v-model="newUser.name" />
            </div>
            <div class="form-group">
              <label>Gender</label>
              <v-text-field
                rows="5"
                placeholder="Gender..."
                v-model="newUser.gender"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <v-text-field placeholder="Email..." v-model="newUser.email" />
            </div>
            <div class="form-group">
              <label>Status</label>
              <v-text-field placeholder="Status..." v-model="newUser.status" />
            </div>
            <div class="d-flex justify-center">
              <v-btn @click="addUser()"> Create </v-btn>
              <v-btn class="ml-5" @click="updateUser()"> Update </v-btn>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: {},
      existingUserID: 2593,
      newUser: {
        name: "",
        gender: "",
        email: "",
        status: "",
      },
      baseURL: "https://gorest.co.in/public/v2/users/",
    };
  },
  methods: {
    getData() {
      axios.get(this.baseURL).then((resp) => {
        this.list = resp.data.data;
      });
    },
    addUser() {
      const newObject = {
        name: this.newUser.name,
        gender: this.newUser.gender,
        email: this.newUser.email,
        status: this.newUser.status,
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 41a8f27be7ff57ea6b993063a2a32bad327dd94363f69a07d4cb315dbc53bdcb",
      };

      axios
        .post(this.baseURL, newObject, { headers })
        .then((resp) => {
          console.log("added: " + resp.data.name);
          this.list.push(this.newUser);
          console.log(this.list);
          (this.newUser.name = ""),
            (this.newUser.email = ""),
            (this.newUser.gender = ""),
            (this.newUser.status = "");
        })
        .catch((error) => console.log(error));
    },
    updateUser() {
      const newObject = {
        name: this.newUser.name,
        email: this.newUser.email,
        status: this.newUser.status,
      };
      const headers = {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 41a8f27be7ff57ea6b993063a2a32bad327dd94363f69a07d4cb315dbc53bdcb",
      };

      axios.put(this.baseURL + this.existingUserID, newObject, { headers });
    },
  },
};
</script>

<style>
.btn-primary {
  margin-left: 5%;
}
.btn-secondary {
  width: 30%;
  margin-left: 30%;
}
.container {
  max-width: 50%;
}
</style>

<template>
  <div class="d-flex justify-center">
    <div class="container">
      <div class="text-h4 mt-5">Enter new details...</div>
      <v-text-field
        v-model="newName"
        :label="this.user.name"
        class="d-flex justify-center"
      ></v-text-field>
      <v-select
        v-model="newGender"
        :label="this.user.gender"
        :items="availableGendersToPick"
        class="d-flex justify-center"
      ></v-select>
      <v-select
        v-model="newStatus"
        :label="this.user.status"
        :items="availableStatusesToPick"
        class="d-flex justify-center"
      ></v-select>
      <div class="d-flex justify-center">
        <v-btn color="green" @click="acceptChanges()"> ACCEPT </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {},
      userID: this.$route.params.id,
      availableGendersToPick: ["male", "female"],
      availableStatusesToPick: ["active", "inactive"],
      newName: "",
      newGender: "",
      newStatus: "",
    };
  },
  methods: {
    async getDataAboutProduct() {
      try {
        await axios
          .get(`https://gorest.co.in/public/v2/users/${this.userID}`)
          .then((resp) => {
            this.user = resp.data;
          });
      } catch (err) {
        console.log(err);
      }
    },
    async acceptChanges() {
      const headers = {
        Authorization:
          "Bearer 41a8f27be7ff57ea6b993063a2a32bad327dd94363f69a07d4cb315dbc53bdcb",
      };
      try {
        await axios.put(
          `https://gorest.co.in/public/v2/users/${this.userID}`,
          {
            name: this.newName,
            gender: this.newGender,
            status: this.newStatus,
          },
          { headers }
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getDataAboutProduct();
  },
};
</script>

<style>
.container {
  width: 400px;
}
</style>

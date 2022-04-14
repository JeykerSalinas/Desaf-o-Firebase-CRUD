<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col cols="12">
          <p>Ingrese usuario nuevo</p>
          <b-form-input
            type="text"
            placeholder="Enter name"
            required
            label="Usuario:"
            v-model="myNewUser.name"
          ></b-form-input>
          <div class="row mt-3">
            <div class="col-8">
              <p>Ingrese email</p>
              <b-form-input
                type="email"
                placeholder="Enter email"
                required
                label="Correo:"
                v-model="myNewUser.email"
              ></b-form-input>
            </div>
            <div class="col-4">
              <p>Ingrese edad</p>
              <b-form-input
                type="number"
                placeholder="Enter age"
                required
                label="Edad:"
                v-model="myNewUser.age"
              ></b-form-input>
            </div>
          </div>
          <div class="text-end py-3">
            <b-button variant="danger" class="ms-3" @click="resetInput"
              >Limpiar</b-button
            >
            <b-button variant="success" class="ms-3" @click="addSome(myNewUser)"
              >Agregar</b-button
            >
          </div>
        </b-col>
        <b-col cols="12">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Correo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in myData" :key="i">
                  <th scope="row">{{ i + 1 }}</th>
                  <td>{{ item.name }}</td>
                  <td>{{ item.age }}</td>
                  <td>{{ item.email }}</td>
                  <td>
                    <b-button
                      variant="danger"
                      class="ms-3"
                      @click="deleteSome(item)"
                      >Eliminar</b-button
                    >
                    <b-button
                      variant="success"
                      class="ms-3"
                      @click="$bvModal.show('modal-' + i)"
                      >Editar</b-button
                    >
                    <b-modal :id="'modal-' + i" title="BootstrapVue">
                      <b-col cols="12">
                        <p>Ingrese usuario nuevo</p>
                        <b-form-input
                          type="text"
                          placeholder="Enter name"
                          required
                          label="Usuario:"
                          v-model="item.name"
                        ></b-form-input>
                        <div class="row mt-3">
                          <div class="col-8">
                            <p>Ingrese email</p>
                            <b-form-input
                              type="email"
                              placeholder="Enter email"
                              required
                              label="Correo:"
                              v-model="item.email"
                            ></b-form-input>
                          </div>
                          <div class="col-4">
                            <p>Ingrese edad</p>
                            <b-form-input
                              type="number"
                              placeholder="Enter age"
                              required
                              label="Edad:"
                              v-model="item.age"
                            ></b-form-input>
                          </div>
                        </div>
                      </b-col>
                    </b-modal>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      myNewUser: {
        name: "",
        age: "",
        email: "",
      },
    };
  },
  computed: {
    ...mapState(["myData"]),
  },
  methods: {
    ...mapActions(["getData", "deleteSome", "addSome", "setSome"]),
    click() {
      console.log("click");
    },
  },
  created() {
    this.getData();
    this.setSome({
      name: "andrea",
      age: "23",
      email: "andrea",
      id: "BFDRyXNFoqglIK24MrRD",
    });
  },
};
</script>

<style lang="scss"></style>

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
            <b-button variant="success" class="ms-3" @click="addSome"
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
                    <b-button variant="danger" class="ms-3" @click="resetInput"
                      >Eliminar</b-button
                    >
                    <b-button variant="success" class="ms-3" @click="addUser"
                      >Editar</b-button
                    >
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
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/helpers/firebase";
export default {
  name: "App",
  data() {
    return {
      myData: [],
      myNewUser: {
        name: "",
        age: "",
        email: "",
      },
    };
  },
  methods: {
    async setSome() {
      await setDoc(doc(db, "usuarios", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "Chilesfdasd",
      });
      console.log("seted");
    },
    async deleteSome() {
      await deleteDoc(doc(db, "usuarios", "E8l1MVJUlYh6fdpxXiMg"));
      console.log("deleted");
    },

    async addSome() {
      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.log(error);
      }
    },
    async getData() {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        this.myData.push(doc.data());
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(this.myData);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss"></style>

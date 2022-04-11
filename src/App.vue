<template>
  <div id="app">
   
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
    };
  },
  methods: {
    async setSome() {
      await setDoc(doc(db, "trabajadores", "LA"), {
        name: "Los Angeles",
        state: "CA",
        country: "Chilesfdasd",
      });
      console.log("seted");
    },
    async deleteSome() {
      await deleteDoc(doc(db, "trabajadores", "E8l1MVJUlYh6fdpxXiMg"));
      console.log("deleted");
    },

    async addSome() {
      try {
        const docRef = await addDoc(collection(db, "trabajadores"), {
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
      const querySnapshot = await getDocs(collection(db, "trabajadores"));
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

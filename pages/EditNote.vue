<template>
<div>
     <div
    class="
      h-100
      w-full
      flex
      items-center
      justify-center
      bg-teal-lightest
      font-sans
    "
  >
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Edit notes</h1>
        <div class="flex mt-4">
          <input
            v-model="msg"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              mr-4
              text-grey-darker
            "
            placeholder="Add Todo"
          />
          <button
           @click="edit" 
            class="
              flex-no-shrink
              p-2
              border-2
              rounded
              text-teal
              border-teal
              hover:text-white hover:bg-teal
            "
          >
            Edit
          </button>
        </div>
      </div>
      <div>
        <div v-for="(todo, index) in todos" :key="index" >
          <p class="w-full text-grey-darkest">
            {{todo.content}}
          </p>
        </div>
      </div>
    </div>
  </div>
   
</div>
</template>

<script>
import {
    db
} from "../plugins/firebase";
import {
    getStorage,
    uploadBytes,
    ref,
    getDownloadURL
} from "firebase/storage";
import {
    collection,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
    query,
    where,
    addDoc,
    orderBy,
    limit,
    updateDoc
} from 'firebase/firestore';
export default {
    data() {
        return {
            id: this.$route.query.id,
            msg: "",
        }
    },
    methods: {
       async edit() {
            const docRef = doc(db, 'todos', this.id);
            await updateDoc(docRef, {todo: this.msg});
            this.$router.push({
                name: 'Todo'
            });
        },
    },
    async mounted() {
        const docRef = doc(db, 'todos', this.id);
        const docSnapshot = await getDoc(docRef);
        this.msg = docSnapshot.data().todo;
    },
}
</script>

<style>

</style>

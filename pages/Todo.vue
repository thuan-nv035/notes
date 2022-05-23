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
        <h1 class="text-grey-darkest">Notes List</h1>
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
            @click.prevent="addTodo"
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
            Add
          </button>
        </div>
      </div>
      <div>
        <div v-for="(todo, index) in todos" :key="index" >
          <p class="w-full text-grey-darkest">
            {{todo.content}}
          </p>
          <button
           @click="remove(todo.id)"
            class="
              flex-no-shrink
              p-2
              ml-2
              border-2
              rounded
              text-red
              border-red
              hover:bg-red
            "
          >
            Remove
          </button>
          <nuxt-link :to="{ name: 'EditNote', query: { id: todo.id }}">
          <button
            class="
              flex-no-shrink
              p-2
              ml-2
              border-2
              rounded
              text-red
              border-red
              hover:bg-red
            "
          >
            Edit
          </button>
          </nuxt-link>
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
} from 'firebase/firestore';
export default {
    data() {
        return {
            msg: "",
            todos: [],
            search:'',
        };
    },
    async mounted() {
        let unSub = null;
        const collectionRef = collection(db, 'todos');
        unSub = onSnapshot(collectionRef, (snapShot) => {
            const localMessage = [];
            console.log(snapShot);
            snapShot.forEach(doc => {
                localMessage.push({
                    id: doc.id,
                    content: doc.data().todo,
                });
            });
            this.todos = localMessage;
        });

    },
    methods: {
        async addTodo() {
            //add doc to firebase
            const collectionRef = collection(db, 'todos');
            try {
                await addDoc(collectionRef,{
                todo:this.msg
            })
            this.msg= "";
            } catch (error) {
              console.log(error)  
            }
            
        },
       async remove(id) {
        const docRef = doc(db, 'todos', id);
        await deleteDoc(docRef);
        },


        handSearch (){
         this.todos = this.todos.filter(todo => todo.content.includes(this.search))
         this.search="";
        }
    }
}
</script>

<style>

</style>

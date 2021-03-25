<template>
    <div v-for="(todo, index) in todos" :key="index">
        <ul class="list-group">
          <div class="row">
            <div class="col-10">
                <li class="list-group-item"> {{todo.title}}</li>
            </div>
            <div class="col mt-2 todo_item__button">
                <button @click="deleteTodo(todo.id)" class="btn btn-danger"><b-icon-trash class="mr-3"/>Delete</button>
            </div>
        </div>
        </ul>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: "TodoItem",
  props: ['todo'],
   methods: {
    ...mapActions(['getTodos']),
    deleteTodo(id){
        this.$store.dispatch('deleteTodo', id)
    }
  },
  computed: {
      todos () {
        return this.$store.getters.getTodos
      },
  },
  created(){
      this.getTodos()
  },
}
</script>
<style>
    .todo_item__button{
        float: right;
    }
</style>
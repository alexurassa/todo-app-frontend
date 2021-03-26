<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4" v-if="this.$store.getters.getTodos.length">
        You haven't done the following yet:
      </h1>
      <h1 class="display-4" v-else>It seems you done did everytihng :)</h1>
      <hr class="my-4" />
      <transition
        name="todo_item"
        enter-active-class="animate__animated animate__bounce"
        leave-active-class="animate__animated animate__bounce"
      >
        <div>
          <TodoItem />
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem.vue";
import store from "../store";
export default {
  name: "TodoBox",
  store: store,
  components: {
    TodoItem,
  },
};
</script>
<style >
</style>

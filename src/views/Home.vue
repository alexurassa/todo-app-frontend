<template>
  <div class="home">
    <TodoBox />
    <TodoForm />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoBox from "@/components/TodoBox.vue";
import TodoForm from "@/components/TodoForm.vue";

export default {
  name: "Home",
  components: {
    TodoBox,
    TodoForm,
  },
};
</script>

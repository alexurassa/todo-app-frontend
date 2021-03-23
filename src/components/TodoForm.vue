<template>
  <div class="container">
    <form @submit.prevent="saveTodo">
      <div class="row justify-content-end">
        <div class="col-10" offset="3">
          <input
            type="text"
            class="form-control"
            v-model="title"
            placeholder="Enter Title for Todo Item"
          />
        </div>
        <div class="col todo_item__button">
          <button type="submit" class="btn btn-primary">
            <b-icon-file-plus class="mb-1 mr-2" />Add Todo
          </button>
        </div>
      </div>
    </form>
    <div v-show="emptyform" style="color: red">
      <p>Please Enter Title</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { title: "", emptyform: false };
  },
  methods: {
    saveTodo() {
      if (this.title === "") {
        this.emptyform = true;
      } else {
        this.$store.dispatch("postTodo", this.title);
        this.title = "";
        this.emptyform = false
      }
    },
  },
};
</script>
<style >
.todo_item__button {
  float: right;
}
</style>
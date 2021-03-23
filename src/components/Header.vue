<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" @click="$router.push({name: 'Home'})">Todo Application</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
          <div v-if="this.$store.getters.checkUserStatus">
            <button type="button" @click="$router.push('account_information')" class="btn btn-primary"><b-icon-person-circle class="mb-1 mr-1"/>Account</button>
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .navbar-brand{
      cursor: pointer;
    }
</style>

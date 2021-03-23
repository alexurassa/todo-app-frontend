<template >
  <div class="container mt-5">
    <div style="color: red;" v-if="invalid_credentials">
        <p>Invalid credentials, Please enter valid ones</p>
    </div>
    <form @submit.prevent="loginView">
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" v-model="username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      invalid_credentials : false
    };
  },
  methods: {
      async loginView() {
        const get_token_url = 'http://localhost:8000/rest-auth/login/'
        const get_user_info_url = 'http://localhost:8000/accounts/get_user_info/'
        const body = JSON.stringify({ username: this.username, password: this.password })

        const resp = await fetch(get_token_url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: body})
        const data = await resp.json()

        if (data){
        this.$store.commit('SET_USER_TOKEN', data)
        console.log(this.$store.getters.getToken)
        const req = await fetch(get_user_info_url, {method: "GET", headers: {'Authorization': `Token ${this.$store.getters.getToken}`}})
        const user_data = await req.json()
        this.$store.commit('ADD_USER', user_data)
        this.$router.push('/home')
        }
        else{
            this.invalid_credentials = true
        }
        
    },
  },
};
</script>
<style>
</style>
<template>
    <div class="mt-5">
        <div class="card" >
            <div class="card-header">Account Information</div>
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">@{{user.username}}</h6>
                <p class="card-text">Username: <span class="user_description__text">@{{ user.username }}</span></p>
                <p class="card-text">First Name: <span class="user_description__text">{{ user.first_name }}</span></p>
                <p class="card-text">Last Name: <span class="user_description__text">{{ user.last_name }}</span></p>
                <p class="card-text">Email Address: <span class="user_description__text">{{ user.email_address }}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserDescription",
    computed: {
        user(){
            return this.$store.getters.getUser
        }
    }
}
</script>
<style >
    .user_description__text{
        font-size: 20px;
        font-weight: bold;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    }
</style>
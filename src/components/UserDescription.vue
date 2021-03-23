<template>
    <div class="mt-5">
        <div class="card" >
            <div class="card-header">Account Information</div>
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">@{{username}}</h6>
                <p class="card-text">Username: <span class="user_description__text">@{{ username }}</span></p>
                <p class="card-text">First Name: <span class="user_description__text">{{ first_name }}</span></p>
                <p class="card-text">Last Name: <span class="user_description__text">{{ last_name }}</span></p>
                <p class="card-text">Email Address: <span class="user_description__text">{{ email_address }}</span></p>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {}, 
    data () {
        return {
            username: this.$store.getters.getUser.username,
            first_name: this.$store.getters.getUser.first_name,
            last_name: this.$store.getters.getUser.last_name,
            email_address: this.$store.getters.getUser.email_address,

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
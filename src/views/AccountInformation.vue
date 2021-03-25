<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-start no-gutters">
                <div class="col">
                    <img src="../assets/logo.png" class="img-thumbnail rounded">
                </div>
                <div class="col align-self-center">
                    <h1>@gerard_sanga</h1>
                </div>
            </div>
            <UserDescription />
        </div>
    </div>
</template>
<script>
import UserDescription from '@/components/UserDescription.vue'
export default {
    name: "AccountInformation",
    components: {
        UserDescription,
    }
}
</script>
<style>
 
</style>
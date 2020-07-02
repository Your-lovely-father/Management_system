<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "Body",
        methods:{
            exit(){
                window.sessionStorage.clear();
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div>
    <h1>b</h1>
    </div>
</template>

<script>
    export default {
        created() {
            console.log('触发')
        },
        beforeRouteUpdate (to, from, next) {
           console.log('复用组件触发')
           next()
        }

    }
</script>

<style lang="scss" scoped>

</style>
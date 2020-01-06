<template>
   <header class="header" >
                <h1>todos</h1>
                <input 
                class="new-todo"
                placeholder="请输入内容"
                v-model="val"
                @keyup.enter="addVal"
                >
    </header>
</template>
<script>
    export default {
        data(){
            return {
                val:''
            }
        },
        methods: {
            addVal(){
                this.$emit('childVal',this.val)
                this.val=''
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
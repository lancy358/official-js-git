<template>
   <footer class="footer">
	            <span class="todo-count">
	            	<strong>{{unChecked}}</strong>
	            	<span>条未选中</span>
                </span>
                <ul 
                    class="filters"
                >
                    <li 
                        v-for="(val,key) in conTent"
                        @click="changeFn(key)"
                    >   
                        <a 
                            href="javascript:;" 
                            :class="  B===key?'selected':''"
                        >{{val}}</a>
                    </li>
                </ul>
               
            </footer>
            
</template>

<script>
    export default {
        props:['pary','unChecked','conTent','B'],
        data(){
            return {
             
            }
        },
        methods: {
            changeFn(key){
                this.$emit('changfn',key)
                
            }
        },
       
    }
</script>

<style lang="scss" scoped>

</style>
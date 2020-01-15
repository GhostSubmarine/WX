<template>
    <div>
        <div class="main"> 
            <p v-for="(value,index) in 10" :key="index">{{index}}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .main {
        column-count: 4;
    }
</style>
<script>
export default {
    data:{

    },
    methods:{
        getMap(){
           var map=new Map(); 
           var keyString="a string";
           map.set(keyString,"和键a相关联的值");
           map.get(keyString);
           map.get("a string");
        }
    }
}
</script>
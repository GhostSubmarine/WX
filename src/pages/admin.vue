<template>
    <div class="main">
        <button @click="query">测试</button>
    </div>
</template>
<script>
  import { mapState } from "vuex"; // vuex的使用
  import { getData } from "@/service/getData"; // 统一接口请求方法
  import { getEleNum } from '@/utils/jsCommon';
  import axios from 'axios'
  export default {
    components: {},
    data () {
      return {

      }
    },
    watch: {
      // '$route': function (to, from) {
      //   let _this = this
      //   // 设置当前选中菜单
      //   setTimeout(function () {
      //     let fullPath = to.fullPath.split('/main/')
      //     let keyPath = fullPath[0]
      //     _this.selectItems(keyPath)
      //     // console.log(keyPath);
      //   }, 200)
      // }
    },
    mounted () {
      // 获取当前路由 并赋值到选中菜单
      // let fullPath = this.$route.fullPath.split('/main/')
      // let keyPath = fullPath[0]
      // this.selectItems(keyPath)
      // // console.log("this.$route.fullPath---------");
      // // console.log(this.$route.fullPath);
      // this.getArticleList(-1);
    },
    created(){
    },
    methods: {
        query(){
            axios.post('/admin/modify',{name:'111'})
            .then((res)=>{
            });
        }
  }
}
</script>
<style lang="scss" scoped>


</style>

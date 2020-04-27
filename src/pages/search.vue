<template>
  <div class="main">
    <div class="top">
      <el-input v-model="searchWord"></el-input>
      <i class="el-icon-search" @click="toMain()"></i>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"; // vuex的使用
import { getData } from "@/service/getData"; // 统一接口请求方法
import { getEleNum } from '@/utils/jsCommon';
import axios from 'axios'
export default {
  components: {
  },
  data () {
    return {
      searchWord:'',
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
  methods: {
    toMain(){
      let searchWord=this.searchWord
      this.$store.state.searchWord=searchWord;
      this.$router.push({path:'/'});
    },
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  overflow:auto;
  background-color: #f2f2f2;
  .top{
    display: flex;
    padding: 1vh 5vw;
    align-items: center;
    .serach {
      width: 50vw;
      display: inline-block;
      margin-right:5vw;
    }
    .el-icon-search {
      font-size:3rem;
      position:fixed;
      right:0;
    }
  }
  .container {
    cursor: pointer;
    width: 95vw;
    display: flex;
    flex-direction: column;
    margin: 2vh 2.5vw;
    border: 1px solid #f2f2f2;
    text-shadow: 5px 5px 5px #999999;
    background-color: white;
    .title,
    .content {
      height:20px;
      font-size: 16px;
      width: 90vw;
      margin: 0 2.5vw;
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;/*溢出部分用...省略号代替*/
    }
  }
}


</style>

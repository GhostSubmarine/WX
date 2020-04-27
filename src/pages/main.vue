<template>
    <div>
        <div class="main">
            <div class="menu">
                <el-menu v-show="!isSearch" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item v-for="item in title" :index="item.id.toString()" :key="item.id">
                        {{item.name}}
                    </el-menu-item>
                </el-menu>
                <el-input v-show="isSearch" v-model="searchWord"></el-input>
                <i @click="queryArticle(0)" class="el-icon-search"></i>
            </div>
            <div v-for="(item,index) in article" :key="index" @click="toArticleRouter(index)" class="container">
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
            </div>
        </div>
        <div class="article">
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
      isSearch:false,
      article:'',
      mysql:'',
      test:{},
      index:'',
      activeIndex:'0',
      title:[],//标题
      searchWord:''//查询的字段
    }
  },
  watch: {
  },
  mounted () {
      this.getArticleList();
      this.getTitleList();
  },
  created(){
    
  },
  methods: {
      queryArticle(id){
          if(this.isSearch){
              let url = '/api/article';
              let params = {
                  title:this.searchWord,
                  id
              };
              getData(url,params,'GET').then( res =>{
                  this.article = res;
                  this.isSearch = false;
                  this.getTitleList();
                  console.log(this.title)
              });
          }
          else{
              this.isSearch = true;
          }
      },
      handleSelect(key, keyPath) {
        this.queryArticle(key);
      },
      getArticleList(){
          let searchWord=this.$store.state.searchWord||'';
          let that=this;
          axios.get('/api/article')
          .then(function (response) {
              that.article=response.data
          })
          .catch(function (error) {
          });
      },
      getTitleList(){
          let that=this;
          let url=this.$store.state.url;
          axios.get('/api/menu')
          .then(function (response) {
              that.title=response.data
          })
          .catch(function (error) {
          });
      },
      toArticleRouter(index){
          this.$store.state.index=index;
          this.$router.push({path:'/article'});
      },
  }
}
</script>
<style lang="scss" scoped>
.main {
    .menu{
        height: 60px;
        width: 100vw;
        overflow-x: auto;
        .el-menu {
            height: 60px;
            overflow-y: hidden;
            overflow-x: auto!important;
            display: flex;
            margin-right: 50px;
            width: 90%;
        }
        .el-input {
            width: 70vw;
            height: 60px;
            line-height: 60px;
            margin: auto;
        }
        >i {
            position: fixed;
            top: 0;
            right: 0;
            line-height: 60px;
            font-size: 30px;
        }
    }
}
</style>

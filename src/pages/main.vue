<template>
  <div class="main">
    <div class="top">
      <el-input class="serach" placeholder="请输入想要查询的信息">
      </el-input>
      <i class="el-icon-search"></i>
    </div>
    
    <div v-for="(item,index) in article" :key="index" @click="toArticle(index)" class="container">
      <div class="title">{{item.title}}</div>
      <div class="content">{{item.content}}</div>
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
      article:'',
      mysql:'',
      test:{},
      index:'',
      defaultActive: '0', // 选中菜单index
      menuData: [
        {
          menuId: 0,
          menuIcon: '全部',
          menuName: '全部',
          menuLink: '/workingTable'
        }
      ]
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
    this.getArticleList();
  },
  methods: {
    getData(){
      let arr=[];
      $("#svg #g-line").find("path").each(function(index,val){
        arr.push($(this).attr("d"))
      });
      let data=JSON.stringify(arr);
      console.log(data)
    },
    operateMysql(){
      let url="/user";
      let params={
        mysql:this.mysql
      };
      getData(url,params,"post").then(res=>{
        debugger
      });
    },
    handleSelect(key, keyPath) {
      this.getArticleList(key);
    },
    getArticleList(){
      let that=this;
      let url = "http://"+window.location.host.split(':')[0]+":3000"
      axios.get(url+'/api/article')
      .then(function (response) {
        that.article=response.data
      })
      .catch(function (error) {
      });
    },
    toArticle(index){
      this.$store.state.index=index;
      this.$router.push({path:'/article'});
      debugger
    },
    getMenu(){
      let url="/article/menu";
      let params={
      };
      getData(url, params, "get").then(res => {

      });  
    },
    testrouter(){
      debugger
      let url="/user";
      let params={
      };
      getData(url, params, "get").then(res => {
        this.test=res.user
      });  
    },
    // logout(){
    //   this.$router.push({path:'/'})
    // },
    // // 当前激活的index
    // selectIndex (keyPath) {
    //   this.menuData.forEach((item, index) => {
    //     if (item.menuLink === keyPath) {
    //       this.defaultActive = item.menuId + ''
    //     }
    //   })
    // },

    // // 点击子菜单 跳转路由等处理
    // selectItems (keyPath) {
    //   if(keyPath!=undefined){
    //     this.selectIndex(keyPath)
    //     this.$router.push(keyPath) // 点击菜单页面路由跳转
    //   }
    //   // if (keyPath === 'healthFile') {
    //   //   this.$store.state.statusName = '-1' // 跳转到健康状态页面-选择状态为"全部", 因为在健康中心页面中的跳转改变过-选择状态
    //   // }
      
    // },
    // handleOpen (key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose (key, keyPath) {
    // }
  }
}
</script>
<style lang="scss" scoped>
.main {
  overflow-y:scroll; 
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
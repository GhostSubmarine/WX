<template>
  <div class="main">
    <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item
        v-for="item in menuData"
        :key="item.menuId"
        :index="item.menuId.toString()"
        @click="selectItems(item.menuLink)">
        {{item.menuName}}
      </el-menu-item>
    </el-menu>
    <div class="main-container">
      <div class="FlexWrapper"> 
        <div class="FlexItems FlexOne">I am content in the inner Flexbox 
        1.</div> 
        <div class="FlexItems FlexTwo">I am content in the inner Flexbox 
        2.</div> 
        <div class="FlexItems FlexThree">I am content in the inner Flexbox 
        3.</div> 
      </div>
      <div v-for="item in articel" :key="item.id" class="main-container-list">
        <div class="list">
          <span class="list-title">{{item.title}}</span>
          <span class="list-info">{{item.info}}</span>
        </div>
        <div class="icon">
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"; // vuex的使用
import { getData } from "@/service/getData"; // 统一接口请求方法
import { getEleNum } from '@/utils/jsCommon';
export default {
  components: {
  },
  data () {
    return {
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
    this.testrouter();
    debugger
  },
  created(){

  },
  methods: {
    handleSelect(key, keyPath) {
      this.getArticleList(key);
    },
    getArticleList(key){
      let url="/article/articleList";
      let params={
        menuIndex:key
      };
      getData(url, params, "get").then(res => {
        
      });  
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
<style lang="scss">
    .main {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      .el-menu-demo {
        position: fixed;
        top:0;
      }
      .main-container {
        display: flex;
        flex-direction: column;
        margin: 1% 5%;
        .main-container-list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .list {
            font-size:24px;
            width:80%;
            .list-title {
              overflow: hidden;
              text-overflow: ellipsis;
              text-align: left;
              margin: 5% 0;
            }
            .list-info {
              margin:0 0 5% 0;
            }
          }
          .icon {
            width: 10%;
            display: flex;
            align-items: center;
          }
        }
      }
    }  
</style>
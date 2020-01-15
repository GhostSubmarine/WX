<template>
  <div>
    <div>
      {{article.title}}
    </div>
    <div>
      {{article.content}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"; // vuex的使用
import { getData } from "@/service/getData"; // 统一接口请求方法
import { getEleNum } from '@/utils/jsCommon';
import axios from 'axios'
export default {
  data () {
    return {
      article:'',
      index:''
    }
  },
  created(){
    this.getArticleList()
  },
  methods:{
    getIndex(){
    },
    getArticleList(){
      let that=this;
      that.index=that.$store.state.index
      let url = "http://"+window.location.host.split(':')[0]+":3000"
      axios.get(url+'/api/article')
      .then(function (response) {
        that.article=response.data[that.index]
      })
      .catch(function (error) {
      });
    },
  }
}
</script>

<style>

</style>
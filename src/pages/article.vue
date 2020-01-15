<template>
  <div>
    <div>
      
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article:'',
      index:''
    }
  },
  created(){
    this.getIndex()
  },
  methods:{
    getIndex(){
      this.index=this.$store.state.index
      alert(this.index)
    }
  }
}
</script>

<style>

</style>
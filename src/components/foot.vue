<template>
  <div  class="footer">
    <router-link  class="left-item   active" @click="toggleActive"   to="/index">首页</router-link>
    <router-link class="right-item"   @click="toggleActive"   to="/manger">人员管理</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      default: 'index'
    }
  },
  methods: {
    toggleActive (el) {
      this.default = this.default === 'index' ? 'manger' : 'index'
    }
  }
}
</script>

<style  lang="css">
  .footer{
    position: fixed;
    bottom:0;
    width:100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 0;
    background-color: #ccc;
  }
  .left-item,.right-item{
    font-size: 24px;
    display: inline-block;
    width: 50%;
    text-decoration: none;
  }
  .active{
    background-color: green;
  }
</style>

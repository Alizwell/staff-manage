<template>
  <div>
    <!-- 新增按钮 -->
    <button  v-show="add"   @click="addBtn">新增</button>
    <!-- 新增输入框 -->
    <div  v-if="!add">
      <input   type="text"  v-model="name" @keyup.enter="sure">
      <button  @click="sure">确定</button>
    </div>
    <!-- 已经添加的人员列表 -->
    <table>
      <thead>
        <th>姓名</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr  v-for="(item,index)  in  allStaff"  :key="index">
          <td>{{item}}</td>
          <td>
            <button @click="del(item)" >删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { setItem, getItem, getAllItem } from '../api/storage.js'
import { setItem, getAllItem, delItem } from '../api/storage.js'

export default {
  data () {
    return {
      add: true,
      allStaff: [],
      name: ''
    }
  },
  created () {
    this.allStaff = getAllItem()
  },
  methods: {
    addBtn () {
      this.add = false
      this.name = ''
    },
    sure (e) {
      if (!this.name) {
        alert('请输入名称')
      } else {
        setItem(this.name)
        this.add = true
        this.allStaff = getAllItem()
      }
    },
    del (item) {      
      delItem(item)
      this.allStaff = getAllItem()
    }
  }
}

</script>

<style lang="css" scoped>
  table{
    width: 100%;
  }
  td,th{
    width: 50%;
    text-align: center;
    font-size: 24px;
  }
</style>

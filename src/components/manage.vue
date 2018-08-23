<template>
  <div>
    <!-- 新增按钮 -->
    <button  v-if="add">新增</button>
    <!-- 新增输入框 -->
    <div  v-if="newAdd">
      <input   type="text" >
      <button  @click="sure">确定</button>
    </div>
    <!-- 已经添加的人员列表 -->
    <table>
      <thead>
        <th>姓名</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr  v-for="item  in  allStaff">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { setItem, getItem, getAllItem } from '../api/storage.js'

export default {
  data () {
    return {
      allStaff: []
    }
  },
  created () {
    this.allStaff = getAllItem()
  },
  methods: {
    
  }
}

</script>

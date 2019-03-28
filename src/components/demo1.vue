<template>
  <div id="demo">
    <ul>
      <li v-for="(item,index) in list"
      :key="index"
      :class="num==index ? 'active':''"
      @click="li_click(index)">
        {{index}}---------------------{{item}}
      </li>
    </ul>
    <button @click="add(num)">add</button>
    <ul>
      <li v-for="(item, index) in arr" 
      :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'Demo1',
  data(){
    return{
      list:[1, 2, 3, 4, 6, 7, 8, 9],
      num:0,
      arr:[]
    }
  },
  methods:{
    add(index) {
      this.arr.push(this.list[index]);
    },
    li_click(index) {
      this.num = index;
    }
  }
}
</script>
<style>
.active{
  background: #ccc;
}
</style>

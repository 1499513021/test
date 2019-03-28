<template>
  <div class="main">
    <h2>标签列表</h2>
    <input type="text" v-model="addText" @keyup.13="addList()">
    共有{{prolist.length}}目标 已完成{{noend}}目标 未完成{{prolist.length-noend}}目标
    <input type="radio" name="changeType" checked="true" @click="chooseList(1)">
    <label>所有标签</label>
    <input type="radio" name="changeType" @click="chooseList(2)">
    <label >已完成标签</label>
    <input type="radio" name="changeType" @click="chooseList(3)">
    <label >未完成标签</label>
    <ul>
      <li v-for="(item,index) in newlist"
      :key="index" :class="{'eidting':curIndex===index}">
        <div>
          <span class="status-span" @click="changeType(index)" :class="{'status-end':item.status}"></span>
          <span @dblclick="curIndex=index">{{item.name}}</span>
          <span class="close" @click="deleteList(index)">X</span>
        </div>
        <input type="text" v-model="item.name" @blur="edited" @focus="editBefore(item.name)" @keyup.esc="cancelEdit(item)" @keyup.enter="edited" class="text2" v-focus>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Sel1',
  data () {
    return {
      addText: '',
      prolist:[
                {name:"HTML5",status:false},
                {name:"CSS3",status:false},
                {name:"vue",status:false},
                {name:"react",status:false}
            ],
      newlist:[],
      curType:'',
      curIndex:'',
      beforeEditText:''
    }
  },
  computed: {
    noend:function () {
      return this.prolist.filter(function(item){
          return item.status;
        }).length;
    }
  },
  methods: {
    addList(){
      if(this.addText.trim()!=''){
        this.prolist.push({
          name:this.addText,
          status:false
        });
        this.addText='';
      }     
    },
    chooseList(type){
      this.curType=type;
      switch (type) {
        case 1:
          this.newlist=this.prolist;
          break;
        case 2:
          this.newlist=this.prolist.filter(function(item){
            return item.status;
          })
        break;
        case 3:
          this.newlist=this.prolist.filter(function(item){
            return !item.status;
          })
        break;
      
        default:
          break;
      }
    },  
    deleteList(index){
      this.prolist.splice(index,1);
      this.newlist=this.prolist;
      this.chooseList(this.curType);
    },
    changeType(index){
      this.newlist[index].status=!this.newlist[index].status;
      this.chooseList(this.curType);
    },
    edited(){
      this.curIndex=''
    },
    editBefore(name){
      this.beforeEditText = name;
    },
    cancelEdit(item){
      item.name = this.beforeEditText;
      this.curIndex=''
    }

  },
  mounted () {
      this.newlist = this.prolist;
    },
    directives:{
            "focus":{
                update(el){
                    el.focus();
                }
            }
        }
}
</script>

<style>
body {
  font-family: "微软雅黑";
  font-size: 14px;
}
input {
  font-size: 14px;
}
body,
ul,
div,
html {
  padding: 0;
  margin: 0;
}
.hidden {
  display: none;
}
.main {
  width: 800px;
  margin: 0 auto;
}
li {
  list-style-type: none;
  line-height: 40px;
  position: relative;
  border: 1px solid transparent;
  padding: 0 20px;
}
li .status-span {
  display: block;
  width: 10px;
  height: 10px;
  background: #ccc;
  margin: 14px 10px 0 0;
  float: left;
}
li .status-span.status-end {
  background: #09f;
}
li .close {
  position: absolute;
  color: #f00;
  font-size: 20px;
  line-height: 40px;
  height: 40px;
  right: 20px;
  cursor: pointer;
  display: none;
  top: 0;
}
li:hover {
  border: 1px solid #09f;
}
li:hover .close {
  display: block;
}
li div {
  display: block;
}
li.eidting div {
  display: none;
}
li .text2 {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}
li.eidting .text2 {
  display: block;
}
li .text-keyword {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}
.text-keyword {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
}
</style>

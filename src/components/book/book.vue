<template>
  <div id="book">
    <ul>
      <li v-for="(item, index) in books"
        :key="index">
        {{item.name}}-------------------
        {{item.author}}------------------
        {{item.price}}---------------------
        <button @click="delete_book(item.id)">delete</button>
        <button @click="edit(item)">edit</button>
      </li>
    </ul>
    <div>
      <input type="text" v-model="id" placeholder="编号">
      <input type="text" name="" id="" v-model="name" placeholder="bookName">
      <input type="text" name="" id="" v-model="author" placeholder="作者">
      <input type="text" name="" id="" v-model="price" placeholder="价格">
      <button @click="add()">add</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'book',
  created: function() {
        var _this = this;
        this.$http.get('http://localhost:8080/static/json/book.json')
        .then((response) => {
          console.log(response.data);
          this.books = response.data;
          this.$set(this.books,response);
      }).catch(function(error) {
            console.log('error'+error);
        })
    },
    data(){
      return {
        books:'',
        id:'',
        name:'',
        price:'',
        author:''
      }
    },
    methods: {
      edit(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.price = obj.price;
        this.author = obj.author;
      },
      delete_book(id){
        var index = this.books.findIndex(function(item){
        return item.id == id;
        });
        this.books.splice(index,1);
      },
      add(){
        var obj={
          id:this.id,
          name:this.name,
          author:this.author,
          price:this.price
        };
        this.books.push(obj);
      }
    }
}
</script>

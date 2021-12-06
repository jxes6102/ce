<template>
  <div class="all">
      <div class="container">
        <div class="row pt-5">
            <div class="col-12">
                <h3>新增單筆:</h3>
            </div>
        </div>
        <div class="container">
            <div class="row pt-2">
                    <div class="col-3">
                        <p>名稱: <input class="addInputSize" type="text" v-model="name"></p>
                    </div>
                    <div class="col-3">
                        <p>單價: <input class="addInputSize" type="text" v-model="price"></p>
                    </div>
                    <div class="col-3">
                        <p>數量: <input class="addInputSize" type="text" v-model="count"></p>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-info" @click="add()">新增</button>
                    </div>
            </div>
            <div v-if="nullStatus" class="row pt-2">
                    <div class="col-4"></div>
                    <div class="col-4">
                       <p style="color:red;">不能輸入空值</p>
                    </div>
                    <div class="col-4"></div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col-12">
                <h3>購物清單:</h3>
            </div>
        </div>
        <div  id="list">
            <div v-for="(item, index) in list" :key="index" class="container">
                <div class="row pt-2 ">
                    <div class="col-3">
                        <p>{{item[0]}}</p>
                    </div>
                    <div class="col-3">
                        <p>{{item[1]}}</p>
                    </div>
                    <div class="col-3">
                        <p>{{item[2]}}</p>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-danger" @click="del(index)">刪除</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-2">
            <div class="col-12">
                <h3>總價: {{sum}}</h3>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  name: 'ce',
  data:()=>({
      name:"",
      price:"",
      count:"",
      sum:0,
      id:0,
      list:[],
      nullStatus:false,
      fullW: 0
  }),
  watch: {
    price: {
        immediate: false,
        handler() {
            this.price = this.price.replace(/[^0-9]/g,'');
            if(this.price.charAt(0) == "0"){
                this.price = "";
            }
        }
    },
    count: {
        immediate: false,
        handler() {
            this.count = this.count.replace(/[^0-9]/g,'');
            if(this.count.charAt(0) == "0"){
                this.count = "";
            }
        }
    },
    fullW: {
        immediate: false,
        handler() {
            if(this.fullW<370){
                $(".btn-info").text("增");
                $(".btn-danger").text("刪");
            }else{
                $(".btn-info").text("新增");
                $(".btn-danger").text("刪除");
            }
        }
    },
},
  mounted(){
    const vm = this;
  	vm.fullW = window.innerWidth;
    window.onresize = () => {
      vm.fullW = window.innerWidth;
    };
  },
  methods:{
      add(){
            if(this.name == ""||this.price == ""||this.count == ""){
                this.nullStatus = true;
                setTimeout(() => {this.nullStatus = false}, 3000);
            }else{
                this.nullStatus = false;
                this.list.push([this.name,this.price,this.count]);
                this.sum += parseInt(this.price,10)*parseInt(this.count,10);
                this.name = "";
                this.price= "";
                this.count= "";
                this.listH = $("#list").height();
            }
      },
      del(delNum){
          this.sum-=parseInt(this.list[delNum][1],10)*parseInt(this.list[delNum][2],10);
          this.list.splice(delNum,1);
          this.listH = $("#list").height();
      },
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.all{
    height:100vh;
    background-color:rgb(243, 232, 223);
}
#list{
    height:50vh;
    overflow-x: hidden;
    overflow-y: scroll;
}

p{
    font-size: 1.2rem;
}

.all {
    text-align: left;
}

.addInputSize{
    width: 15vw;
}

body::-webkit-scrollbar {
    display: none;
}

@media  (max-width: 1200px) {
    .addInputSize{
        width: 13vw;
    }
}

@media  (max-width: 1000px) {
    p{
        font-size: 1rem;
    }
    .addInputSize{
        width: 10vw;
    }
}

@media  (max-width: 780px) {
    p{
        font-size: 0.7rem;
    }
    .addInputSize{
        width: 8vw;
    }
}

@media  (max-width: 360px) {
    p{
        font-size: 0.2rem;
    }
    .addInputSize{
        width: 7vw;
    }
}

@media  (max-width: 340px) {
    p{
        font-size: 0.2rem;
    }
    .addInputSize{
        width: 10vw;
    }
}
</style>

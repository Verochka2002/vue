<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model.number="operand1"/>
     <input type="text" v-model.number="operand2"/>
     ={{ result }}
     <hr/>
     <button @click="result = operand1 + operand2">+</button>
     <button @click="result = operand1 - operand2">-</button>
     <button  @click="divide" :disabled="operand2===0">/</button>
     <button @click="multiply(operand1,operand2)">*</button>
     <button @click="exponentiation">^</button>
     <button @click="integerdivision" :disabled="operand2===0">//</button>
     <hr/>
     <input type="checkbox" v-model="showkeybord" id="control" value="checkbox" @click="hidden != hidden"/>
     <label for="control">отобразить экранную клавиатуру</label>
     <hr/>
    
     <div v-show="showkeybord">
         <button type="button" v-for="(item,index) in keybord" :key="index" @click="inputkeybord(item)">
        {{ item }}
     </button>
     <button type="button" @click="deleteEl">	&#8592;</button>
     <hr/>
      <input type="radio" id="operand1" value="operand1" name="fieldSelection" v-model="selectedOperand" />
      <label for="operand1">Операнд 1</label>
      <input type="radio" id="operand2" value="operand2" name="fieldSelection" v-model="selectedOperand"/>
      <label for="operand2">Операнд 2</label>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      disabled:true,
      operand1:0,
      operand2:0,
      result:0,
      keybord:[0,1,2,3,4,5,6,7,8,9],
      showkeybord:false,
      selectedOperand:'operand1'
    }
  },
  methods:{
    multiply(op1,op2){
      this.result=op1*op2
    },
    divide(){
      this.result=this.operand1/this.operand2
    },
    exponentiation(){
      this.result=Math.pow(this.operand1,this.operand2)
    },
    integerdivision(){
      this.result=parseInt(this.operand1/this.operand2)
    },
    inputkeybord(item){
      const operand = this.selectedOperand
      const value = String(this[operand])
      this[operand]=Number(value + item)
    },
    deleteEl(){
      const operand = this.selectedOperand
      this[operand]=parseInt(this[operand]/10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

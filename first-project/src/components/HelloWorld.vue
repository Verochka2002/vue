<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model.number="operand1"/>
     <input type="text" v-model.number="operand2"/>
     ={{ result }}
     <hr/>
     <button @click="result = operand1 + operand2">+</button>
     <button @click="result = operand1 - operand2">-</button>
     <button @click="divide" v-if="operand2===0" :disabled="true">/</button>
     <button @click="divide" v-if="operand2!==0" :disabled="false">/</button>
     <button @click="multiply(operand1,operand2)">*</button>
     <button @click="exponentiation">^</button>
     <button @click="integerdivision" v-if="operand2===0" :disabled="true">//</button>
     <button @click="integerdivision" v-if="operand2!==0" :disabled="false">//</button>
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

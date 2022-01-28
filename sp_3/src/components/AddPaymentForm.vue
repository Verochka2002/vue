<template>
  <div class="wrapper">
    <button @click="showElement">Add new cost +</button>
  <div v-if="isVisiable">
    <input placeholder="Value" v-model="value" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Date" v-model="date" />
    <button @click="onSaveClick">Save</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: 0,
      category: "",
      date: "",
      isVisiable:false,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
  },
  methods: {
    onSaveClick() {
      const data = {
        id: Date.now(),
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit('addPayment', data)
    },
    showElement(){
      this.isVisiable=!this.isVisiable
    }
  },
};
</script>

<style lang="scss" scoped>
input{
  display: block;
  margin-left: 430px;
  margin-bottom: 20px;
}
button{
  margin-bottom: 20px;
}
</style>
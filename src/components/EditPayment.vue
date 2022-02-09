<template>
  <div class="wrapperEdit">
    <div class="selectEdit">
      <select v-model="category">
        <option v-for="(option,index) in options" :key="index">{{ option }}</option>
      </select>
    <input placeholder="Value" v-model.number="value" />
    <input placeholder="Date" v-model="date" />
    <button @click="editPayment">Save</button>
  </div>
  </div>
</template>

<script>

export default {
  name: "EditPayment",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      value: 0,
      category: "",
      date: "",
    };
  },
  computed: {
    options(){
      return this.$store.getters.getcategoryList
    }
  },
  methods: {
       
      editPayment() {
      const updatePayment = {
        date: this.date,
        category: this.category,
        value: this.value,
      };
      this.$emit("close-edit", updatePayment);
    },
  },
  async created() {
    if(!this.options.length) {
      await this.$store.dispatch('loadCategories')
    }
    this.category = this.options[0]
  },
mounted(){
    this.date = this.item.date;
    this.category = this.item.options;
    this.value = this.item.value;
    this.fetchData();
}
};
</script>

<style lang="scss" scoped>
</style>
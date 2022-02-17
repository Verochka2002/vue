<template>
<v-card class="pa-8">
  <v-text-field label="Date" placeholder="Date" v-model="date" />
    <v-text-field label="Value" placeholder="Value" v-model.number="value" />
    <v-select :items="options" v-model="category" label="Standard"></v-select>

      <v-btn @click="editPayment">Save</v-btn>
</v-card>
</template>

<script>

import {  mapMutations, mapActions } from "vuex";

export default {
  name: "EditPayment",
  props: {
    item: {
      type: Object,
      default: () =>({}),
    },
  },
  data() {
    return {
      date: "",
      category: "",
      value: ""
    };
  },
  computed: {
    options(){
      return this.$store.getters.getcategoryList
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["updatePayment"] ),
    editPayment() {
      this.updatePayment({
        id: this.item.id,
        date: this.item.date,
        category: this.category,
        value: this.value,
      });
      this.$emit("close-edit");
    },
  },
mounted(){
  this.$store.dispatch('loadCategories')
            this.date = this.item.date,
            this.category = this.item.category,
            this.value = this.item.value,
    
    this.fetchData();
}
};
</script>

<style lang="scss" scoped>
</style>
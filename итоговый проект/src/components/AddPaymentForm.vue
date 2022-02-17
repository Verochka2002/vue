<template>
<v-card class="pa-8">
  <v-text-field label="Date" placeholder="Date" v-model="date" />
    <v-text-field label="Value" placeholder="Value" v-model.number="value" />
    <v-select :items="options" v-model="category" label="Standard"></v-select>

      <v-btn @click="onSaveClick">Save</v-btn>
</v-card>

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
    options(){
      return this.$store.getters.getcategoryList
    }
  },
  methods: {
    onSaveClick() {
      const data = {
        id: this.id,
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$store.commit('addDataToPaymentsList',data)
      this.$emit('onAdd')
    },
    showElement(){
      this.isVisiable=!this.isVisiable
    },
    addFromLink() {
      this.category = this.$route.params.category;
      this.value = this.$route.query.value;
      if (this.category && this.value) {
         this.date = Date.now()
        this.onSaveClick();
      }
    },
  },
  mounted() {
    
    this.addFromLink()
    
    this.$store.dispatch('loadCategories')

    if(this.$route.params.category) {
      this.category = this.$route.params.category
    }
    if(this.$route.query.value) {
      this.value = this.$route.query.value
    }
    
    if(this.value && this.category) {
      this.date = Date.now()
      this.onSaveClick()
    }
    
  },
};
</script>

<style lang="scss" scoped>
</style>
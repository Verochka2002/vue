<template>
<v-container >
  <v-row class="elevation-1">
    <v-col :cols="1" class="font-weight-bold">#</v-col>
    <v-col :cols="5" class="font-weight-bold">Date</v-col>
    <v-col :cols="4" class="font-weight-bold">Category</v-col>
    <v-col :cols="2" class="font-weight-bold">Value</v-col>
  </v-row>
  <v-row v-for="item in items" :key="item.id" class="elevation-1">
    <v-col :cols="1">{{ item.id }}</v-col>
    <v-col :cols="5">{{ item.date }}</v-col>
    <v-col :cols="4">{{ item.category }}</v-col>
    <v-col :cols="2">{{ item.value }}</v-col>
  </v-row>
</v-container>
</template>

<script>
import EditPayment from '../components/EditPayment.vue'
export default {
name: "PaymentsDisplay",
components: EditPayment,
  props: {
      items: {
          type: Array,
          default: ()=>[],
      }
  },
  data(){
      return{
        date: "",
      category: "",
      value: "",
      }
  },
  methods: {
    editItem(item){
        this.$modal.show('EditPayment', {
            header: "Edit Payment",
            item: item,
            content:'EditPayment'
        })
    },
    onShowContextMenu(event, item){
      const items = [
        {
          text: "Edit",
          action: ()=>{
            this.editItem(item)
          }
        },
        {
          text: "Delete",
          action: ()=>{
               // this.deletePayment(id)
          }
        }
      ]
      this.$context.show({ event,items })
    }
  },

}
</script>

<style lang="scss" scoped>
</style>

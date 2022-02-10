<template>
  <div class="wrapper">
      <div class="item" v-for="item in items" :key="item.id">
        <span>{{item.id}}</span> - <span>{{item.date}}</span> - <span>{{ item.category }}</span> - <span>{{ item.value }}</span> - <span @click="onShowContextMenu($event,item)">...</span>
      </div>
   </div>
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
    onShowContextMenu(event, item,id){
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
                this.deletePayment(id)
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

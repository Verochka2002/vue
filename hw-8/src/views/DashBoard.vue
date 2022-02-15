<template>
<v-container>
  <v-row>
    <v-col>
      <div class="text-h5 text-sm-h3 mb-5">My personal costs</div>

        <v-dialog v-model="dialog" width="500">
          <template #activator="{ on }">
            <v-btn color="teal" class="mb-5" dark v-on="on">Add new cost <v-icon>mdi-plus</v-icon> </v-btn> 
          </template>

           <v-card>
          <add-payment-form @onAdd="dialog=false"/>
        </v-card>

        </v-dialog> 


      <payments-display :items="paymentsList"/>
    </v-col>
    <v-col>
       <diagram class="diagram"/>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
//import AddPaymentForm from '../components/AddPaymentForm.vue';
// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from 'vuex'
//import AddPaymentForm from '../../../hw_4/src/components/AddPaymentForm.vue';
import {Doughnut} from 'vue-chartjs'
import Diagram from '../components/Diagram.vue';


export default {
  name: "Home",
  extends: Doughnut,
  props:{
    items: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    PaymentsDisplay:()=> import('../components/PaymentsDisplay.vue'),
    AddPaymentForm:()=> import ('../components/AddPaymentForm.vue'),
    Diagram,
    //AddPaymentForm,
  },
  data() {
    return {
      curPage: 1,
      n:10,
      show: false,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue', 'getPaymentList','getcategoryList' 
    ]),
    paymentsList(){
      return this.$store.getters.getPaymentList
    },
    currentElement(){
      //return this. paymentsList.slice(3 * (this.curPage - 1), 3 * (this.curPage - 1)+ 3)
      return this. paymentsList.slice(this.n * (this.curPage - 1), this.n * (this.curPage - 1)+ this.n)
    },

  },
  methods: {
    ...mapMutations({
      myMuttaion: 'setPamentsListData'
    }),
    ...mapActions([
      'fetchData'
    ]),
     onShowModal(){
      this.$modal.show('AddPaymentForm', { 
        header: "Add payment form",
        content: "AddPaymentForm"
      })
    },
    onChangePage(page){
      this.curPage=page
    },
    add(data){
      this.$store.commit('addDataToPaymentsList', data)
    },
    // fetchData() {
    //   return [
    //     {
    //       id: "1",
    //       date: "28.03.2020",
    //       category: "Food",
    //       value: 169,
    //     },
    //     {
    //       id: "2",
    //       date: "24.03.2020",
    //       category: "Transport",
    //       value: 360,
    //     },
    //     {
    //       id: "3",
    //       date: "24.03.2020",
    //       category: "Food",
    //       value: 532,
    //     },
    //   ];
    // },  
  },
  
  created() {
    const {page} = this.$route.params
    if (page){
      this.curPage=Number(page)
    }
    //this.fetchData()
  }
  
};
</script>

<style lang="scss" scoped>
.diagram{
  width: 350px;
  margin: 0 auto;
}
</style>
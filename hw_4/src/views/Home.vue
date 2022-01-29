<template>
  <div class="home">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      TOTAL: {{getFullPaymentValue}}
      <hr/>
      <add-payment-form @addPayment="add"/>
      <payments-display :items="currentElement" />
      <pagination :length="12" :cur="curPage" :n="3" @paginate="onChangePage"/>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from '../components/Pagination.vue';
// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data() {
    return {
      curPage: 1,
      n:10,
      show: false,
    };
  },
  computed: {
    ...mapGetters([
      'getFullPaymentValue'
    ]),
    paymentsList(){
      return this.$store.getters.getPaymentList
    },
    currentElement(){
      return this. paymentsList.slice(3 * (this.curPage - 1), 3 * (this.curPage - 1)+ 3)
    }
  },
  methods: {
    ...mapMutations({
      myMuttaion: 'setPamentsListData'
    }),
    ...mapActions([
      'fetchData'
    ]),
    onChangePage(page){
      this.curPage=page
      this.fetchData(page)
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
    this.fetchData(this.curPage)
  },
};
</script>

<style lang="scss" scoped>
</style>
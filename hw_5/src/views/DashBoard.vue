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
      <pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
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
      //return this. paymentsList.slice(3 * (this.curPage - 1), 3 * (this.curPage - 1)+ 3)
      return this. paymentsList.slice(this.n * (this.curPage - 1), this.n * (this.curPage - 1)+ this.n)
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
    const {page,categorySelected} = this.$route.params
    if (page && categorySelected){
      this.curPage=Number(page)
      this.category=categorySelected
    }
    this.fetchData(this.curPage, this.categorySelected)
  }
};
</script>

<style lang="scss" scoped>
</style>
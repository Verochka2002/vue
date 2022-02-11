<template>
  <div class="home">
    <header>
      <div class="title">My personal costs</div>
    </header>
    <main>
      TOTAL: {{getFullPaymentValue}}
      <button @click="onShowModal">ShowModal</button>
      <hr/>
      <payments-display :items="currentElement" />
      <pagination :length="paymentsList.length" :cur="curPage" :n="n" @paginate="onChangePage"/>
    </main>
  </div>
</template>

<script>
//import AddPaymentForm from '../components/AddPaymentForm.vue';
// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    PaymentsDisplay:()=> import('../components/PaymentsDisplay.vue'),
    //AddPaymentForm,
    Pagination:()=> import('../components/Pagination.vue'),
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
</style>
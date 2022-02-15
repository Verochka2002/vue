<template>
  <v-container class="d-flex justify-center">
      <v-btn
          color="primary"
          class="rounded-xl"
          v-for="page in getCountPages"
          :key="page"
          :to="'/dashboard/'+page"
      >
        {{ page }}
      </v-btn>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "Paginate",
  props: {
    pageLength: Number
  },
  computed: {
    ...mapGetters(['getPaymentList']),
    getCountPages() {
      return Math.ceil(this.getPaymentList.length / this.pageLength)
    }
  }
}
</script>
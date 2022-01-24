<template>
  <div clss="home">
<header> 
      <div :class="title">My personal costs</div>
</header>
<main>><PaymentsDisplay/></main>
  </div>
</template>

<script>
import PaymentsDisplay from '../components/PaymentsDisplay.vue'
export default {
    name: 'Home',
    components: { PaymentsDisplay },
    data(){
        return {
            show:false
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
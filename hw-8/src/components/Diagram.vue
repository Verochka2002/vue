<script>
import {mapGetters} from "vuex";
import {Doughnut} from 'vue-chartjs'
export default {
  name: "Diagram",
  extends: Doughnut,
  data(){
    return{
      cat:[]
    }
  },
  computed: {
    ...mapGetters(['getPaymentList','getcategoryList'])
  },
  watch: {
    "$store.getters.getPaymentList"() {
      this.setChart()
    },
    "$store.getters.getcategoryList"() {
      this.setChart()
    },
  },
  methods: {
    setChart() {
      let category =[];
      let data=Array(5).fill(0);
      this.getcategoryList.forEach(item=>{
        category.push(item)
      })
      this.getPaymentList.forEach(item=>{
        switch (item.category){
          case 'Food':
            data[0]+=1
            break;
          case 'Transport':
            data[1]+=1
            break;
          case 'Education':
            data[2]+=1
            break;
          case 'Entertainment':
            data[3]+=1
            break;
          case 'Sport':
            data[4]+=1
            break;
        }
      })
      this.renderChart({
        labels: ['Food', 'Transport', 'Education', 'Entertainment', 'Sport'],
        datasets: [{
          label: '# of Votes',
          data: data,
         
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        }],
        options:{
            legend: {
                position: 'bottom'
            },
        }
      })
    }
  }
}
</script>
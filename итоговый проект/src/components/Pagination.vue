<template>
<v-row class="wrp mt-6" justify="center" >
<v-btn class="mt-1" color="teal" @click="onClick(cur - 1)" dark small fab depressed><v-icon>mdi-arrow-left</v-icon></v-btn>
<span v-for="i in amount" :key="i" :class="{ 'active': cur === i }" @click="onClick(i)">{{ i }}</span>
<v-btn class="mt-1" color="teal" @click="onClick(cur + 1)" dark small fab depressed><v-icon>mdi-arrow-right</v-icon></v-btn>
</v-row>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        length: Number,
        cur: Number,
        n: Number
    },
    computed: {
        amount() {
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
        onClick(page) {
            if (page < 1 || page > this.amount || page === this.cur) {
                return
            }
            this.$emit('paginate', page)
        }
    },
}
</script>

<style scoped lang="scss">
.wrp {
    display: flex;
    & > span {
        padding: 10px;
        &.active {
            background: #ccc;
        }
    }
}
</style>
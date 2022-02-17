import AddPaymentForm from '../src/components/AddPaymentForm.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import regeneratorRuntime from "regenerator-runtime";
import {  shallowMount, createLocalVue } from '@vue/test-utils'
import category from '../src/components/AddPaymentForm.vue'



const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();
const store = new Vuex.Store({
    modules: {
        category,
    },
});

describe('Add Payment', () =>{
    let mutations
    beforeEach(()=>{
        mutations={
            addDataToPaymentsList: jest.fn()
        }
    })
    it('Test Value',()=>{
        const wrapper = shallowMount(AddPaymentForm, {
            localVue,
            router,
            store
        })

        const valueInput = wrapper.find('input[name=value1]');
        valueInput.setValue('10');
        expect(wrapper.vm.value).toBe(10);
    }),
    it('Test Data',()=>{
        const wrapper = shallowMount(AddPaymentForm, {
            localVue,
            router,
            store
        })

        const dateInput = wrapper.find('input[name=date]');
        dateInput.setValue('01.01.2001');
        expect(wrapper.vm.date).toBe('01.01.2001');
    }),
    it('Test Category',()=>{
        const wrapper = shallowMount(AddPaymentForm, {
            localVue,
            router,
            store
        })
        const сategoryBtn = wrapper.find('#addPayment')
        сategoryBtn.trigger('click')
        expect(wrapper.emitted('addPayment')).toBeTruthy();
    }),
    it('Auto Date', () => {
        const wrapper = shallowMount(AddPaymentForm, {
            localVue,
            router,
            store
        })

        const addPaymentButton = wrapper.find('#addPayment');

        addPaymentButton.trigger('click');

        expect(wrapper.emitted('addPayment')[0][0].date).not.toBe('');
    })
    it('Test Visiable', ()=>{
        const wrapper = shallowMount(AddPaymentForm, {
            localVue,
            router,
            store
        })

        const Vbtn = wrapper.find('#visiable')
        Vbtn.trigger('click')
        expect(wrapper.vm.showElement).toBeTruthy()
    })
})
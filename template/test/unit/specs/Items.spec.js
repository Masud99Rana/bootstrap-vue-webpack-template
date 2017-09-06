import BootstrapVue from 'bootstrap-vue'
import Items from '@/components/Items'
import Vue from 'vue'
import store from '@/store'
import { mount } from 'avoriaz'

Vue.use(BootstrapVue)

describe('Items.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Items, { store })
    expect(wrapper.is('div')).to.be.true
    expect(wrapper.hasClass('items')).to.be.true
  })
})

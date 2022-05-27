import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.$el.querySelector('.hello h1').textContent).toEqual('Hello world')
  })
})

import "ts-jest";
import { shallowMount } from "@vue/test-utils";
import unionCreate from "../components/unionCreateComponent.vue"

describe('Create union', ()=>{
    test('to be mounted', () => {
        const wrapper = shallowMount(unionCreate);
        expect(wrapper).toBeDefined();
    });
})


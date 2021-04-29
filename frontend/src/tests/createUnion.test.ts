import tsJest from  "ts-jest";
import testUtils from "@vue/test-utils";
import unionCreate from "../components/unionCreateComponent.vue";

describe('Create union', ()=>{
    test('to be mounted', () => {
        const wrapper = testUtils.mount(unionCreate,{});
        expect(wrapper).toBeDefined();
    });
})


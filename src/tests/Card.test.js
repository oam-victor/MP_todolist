import { Card } from "../components/cardFolder/Card";
import { shallow } from "enzyme";

describe('List initial State', ()=>{

    let wrapper;
    beforeAll(()=>{
        wrapper = shallow(<Card/>);
    });

    it('should have a title', ()=>{
        expect(wrapper.exists('.card-title')).toBeTruthy();
    })

})
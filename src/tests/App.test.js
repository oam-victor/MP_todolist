import App from "../App";
import { shallow } from "enzyme";

describe("My first test", () => {

  let wrapper;
  beforeAll(()=>{
    wrapper = shallow(<App/>);
  });

  it("renders the title of the page", () => {
    expect(wrapper.find("h1").text()).toContain("ToDo List");
  });

  it("renders a button with text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  it('renders the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  })

  it('renders the click event of increment button and increment counter value',()=>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toEqual('1');
  })

});

import { Header } from "../components/headerFolder/Header";
import { shallow } from "enzyme";

describe("Header initial state", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Header />);
  });

  it("renders the title of the page", () => {
    expect(wrapper.find("header").text()).toBe("ToDo's");
  });
});

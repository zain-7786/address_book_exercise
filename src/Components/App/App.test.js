import {shallow} from "enzyme";

it("renders without crashing", () => {
    shallow(<App />);
  });
  
  it("renders Account header", () => {
    const wrapper = shallow(<App />);
    const welcome = <span>Address Book</span>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
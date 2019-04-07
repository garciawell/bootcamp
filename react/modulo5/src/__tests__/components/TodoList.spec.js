import React from "react";
import { mount } from "enzyme";
import TodoList from "../../TodoList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const middlewares = []; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const INITIAL_STATE = {
  todos: { data: ["Fazer café", "estudar react"] }
};

const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  // console.log(wrapper.html());

  expect(wrapper.find("li").length).toBe(2);
});

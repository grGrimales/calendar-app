import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/stores";

export const CalendarApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

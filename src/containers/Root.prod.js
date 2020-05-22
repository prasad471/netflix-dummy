import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persiststore } from "../store";
import StyledContainer from "../styled/StyledContainer";
import { ThemeProvider } from "styled-components";
import theme from "../constants/theme";
import App from "../components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persiststore} loading={null}>
        <ThemeProvider theme={theme}>
          <StyledContainer>
            <Router>
              <App />
            </Router>

            <ToastContainer />
          </StyledContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;

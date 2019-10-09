import React, { Suspense, lazy } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppWrapper from "./utils/AppWrapper";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/layouts/Loading";
import Overlay from "./components/layouts/Overlay";

function App() {
  const Home = lazy(() => import("./components/layouts/Home"));
  const Login = lazy(() => import("./components/layouts/Login"));
  const Register = lazy(() => import("./components/layouts/Register"));
  const BookPage = lazy(() => import("./components/layouts/BookPage"));

  return (
    <AppWrapper>
      <div className="App">
        <Header />
        <Overlay />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path={"/book/:id"} component={BookPage} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default App;

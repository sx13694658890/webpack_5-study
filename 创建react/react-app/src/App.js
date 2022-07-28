import React, {
  useReducer,
  useState,
  useEffect,
  Fragment,
  useCallback,
} from "react";
import { BrowserRouter
   as Router, Route,Link ,NavLink, Switch} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import DerivedFromProps from "./pages/DerivedFromProps";
import Sticky from "./components/Sticky";

// import Card from "./components/Card";
// import context from "./context/initContext";
import Table from "./components/Table";
import  "./App.css"
//  useMemo useState use
function App() {
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(true); // 加载
  const [error, setError] = useState(null); // 报错

  const reduce = (state, { type }) => {
    switch (type) {
      case "a":
        return "a";
    }
  };
  const [state, dispatchState] = useReducer(reduce, 1);

  const handlerClick = () => {
    setCount(count + 1);
    dispatchState({ type: "a" });
  };

  return (
    <div>
      <Router >
      <div className="nav">
      <ul className="navlink" >
        <li><Link to="/home/2" >home</Link></li>
        <li><Link to={{name:"table"}}>table</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/sticky">sticky</Link></li>
      </ul>
      </div>
        <Switch>
          <Route path="/home/:id " component={Home}></Route>
          <Route name="table" path="/table" component={Table}></Route>
          <Route path="/sticky" component={Sticky}></Route>
          <Route path="/about" children={About}></Route>
          <Route
            path="/news"
            render={(routerprops) => {
              <div>
                <button onClick={() => setCount(count + 1)}>setCount</button>
                <DerivedFromProps {...routerprops}
                  num={count}
                  filename={Math.random() * 10000}
                ></DerivedFromProps>
              </div>;
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default React.memo(App);

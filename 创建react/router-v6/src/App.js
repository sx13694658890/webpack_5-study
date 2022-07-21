import { template } from "lodash";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Menu, About, Shop, Child, Student } from "./pages";

//   v6   component render children 都不变了   通过element来指定挂在组件
export default function index() {
  const routeArr = [
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <About />,
      path: "/about",
    },
    {
      element: <Shop />,
      path: "/shop",
      children: [
        {
          element: <Child />,
          path: "/child",
        },
      ],
    },
    {
      element: <Student />,
      path: "/student/:id",
    },
  ];
  const routeMap = (route, index) => {
    console.log(route, index);
    return (
      <Route key={index} path={route.path} element={route.element}>
        if(route.children&&route.children=&gt;0)route.children.map((route,index)=&gt;routeMap(route,index))
      </Route>
    );
  };

  return (
    <div>
      <Menu></Menu>
      <Routes>{routeArr.map((route, index) => routeMap(route, index))}</Routes>
    
    </div>
  );
}

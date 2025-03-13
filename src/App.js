import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
      <div className="app">
        <Header />
        <Body />
      </div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: < AppLayout />
  },
  {
    path: "/about",
    element: <About /> ,
  },
  {
    path: "/contact",
    element: <Contact /> ,
  },
])

let root =  ReactDOM.createRoot(document.getElementById('root')); 

root.render(<RouterProvider router={appRouter} />)

// root.render(<AppLayout />);


// const heading = React.createElement(
//    'h1',
//    { id:"heading" },
//    [
//     React.createElement(
//         "div",
//         { id: "child"},
//         [
//             React.createElement('h1', {}, "Hello Sac"),
//             React.createElement('h2', {}, "Hello Theja"),
//         ]
//        ),
//        React.createElement(
//         "div",
//         { id: "child1"},
//         [
//             React.createElement('h1', {}, "Hello "),
//             React.createElement('h2', {}, "Hello Ditwi"),
//         ]
//        )
//    ]
// );

// const jsx = <h1 id="heading"> test xyz </h1>;

//element
// const  title = ( 
//     <h1 id="heading"> test element </h1>
// )

//component
// const  Title = () => ( 
//     <h2 id="heading"> test component </h2>
// )

//component composition
// const HeadingComponent2 = () => (
//   <div id="container">
//      <Title /> 
//      {title}
//      <h3 id="heading2"> component 2</h3>
//    </div>
// );



// const styleCard = {
//   backgroundColor: "#f0f0f0"
// }

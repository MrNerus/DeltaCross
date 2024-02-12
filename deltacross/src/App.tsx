// import ListGroup from "./components/ListGrpup";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Browse from "./components/pages/Browse";
import Cart from "./components/pages/Cart";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Settings from "./components/pages/Settings";
import Signout from "./components/pages/Signout";
import Signup from "./components/pages/Signup";
import Test from "./components/pages/Test";
import Track from "./components/pages/Track";

function App() {
  // let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // let colors = ["Purple", "Yellow", "Green", "Blue", "Red"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // return (
  //   <div>
  //     <ListGroup
  //       items={cities}
  //       heading="Cities"
  //       onSelectItem={handleSelectItem}
  //     />
  //     <ListGroup
  //       items={colors}
  //       heading="Colors"
  //       onSelectItem={handleSelectItem}
  //     />
  //   </div>
  // );

  // const [warningAlertVisible, setWarningAlertVisibility] = useState(false);
  // const [dangerAlertVisible, setDangerAlertVisibility] = useState(false);
  // return (
  //   <>
  //     <div>
  //       {warningAlertVisible && (
  //         <Alert
  //           mode="warning"
  //           onClose={() => setWarningAlertVisibility(false)}
  //         >
  //           <strong>Warning:</strong> Something does not seem right.
  //         </Alert>
  //       )}

  //       {dangerAlertVisible && (
  //         <Alert mode="danger" onClose={() => setDangerAlertVisibility(false)}>
  //           <strong>Error:</strong> Something wrong has happened.
  //         </Alert>
  //       )}
  //     </div>
  //     <br />
  //     <div>
  //       <Button mode="warning" onClick={() => setWarningAlertVisibility(true)}>
  //         Warning
  //       </Button>
  //       <Button mode="danger" onClick={() => setDangerAlertVisibility(true)}>
  //         Danger
  //       </Button>
  //     </div>
  //   </>
  // );
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;

    case "/home":
      component = <Home />;
      break;
    case "/browse":
      component = <Browse />;
      break;
    case "/cart":
      component = <Cart />;
      break;
    case "/track":
      component = <Track />;
      break;
    case "/settings":
      component = <Settings />;
      break;
    case "/login":
      component = <Login />;
      break;
    case "/signup":
      component = <Signup />;
      break;
    case "/logout":
      component = <Signout />;
      break;
    case "/test":
      component = <Test />;
      break;

    default:
      component = <Home />;
      break;
  }
  return (
    <div className="wrapper">
      <Navbar />
      <div className="playground">{component}</div>
    </div>
  );
}

export default App;

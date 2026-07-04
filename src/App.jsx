import { useEffect } from "react";
import AOS from "aos";
import Home from "./pages/Home";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return <Home />;
}

export default App;
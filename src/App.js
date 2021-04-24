import { useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function App() {
  let history = useHistory();

  useEffect(() => {
    window.location.replace("https://www.flipkart.com");
  }, []);
  return <div className="App"></div>;
}

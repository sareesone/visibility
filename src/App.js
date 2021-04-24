import { useEffect } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function App() {
  let history = useHistory();

  useEffect(() => {
    window.location.replace(
      "https://www.flipkart.com/glossy-care-aloe-vera-hair-fall-shampoo-growth-control-200ml/p/itmfa7b63fd2f73d?pid=SMPGFF6FRYAFF6CY&lid=LSTSMPGFF6FRYAFF6CYKC3NTB&marketplace=FLIPKART&q=glossy+care+shampoo&store=g9b%2Flcf%2Fqqm%2Ft36&srno=s_1_8&otracker=search&otracker1=search&fm=SEARCH&iid=ba2951f4-91f6-4edb-b0a3-720ef3657590.SMPGFF6FRYAFF6CY.SEARCH&ppt=sp&ppn=sp&ssid=4aifvbjekw0000001619253794097&qH=7240178ab868a961"
    );
  }, []);
  return <div className="App"></div>;
}

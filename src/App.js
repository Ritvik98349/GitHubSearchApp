import { useEffect, useState } from "react";
import Header from "./Header";
import ResultCard from "./ResultCard";
import styles from "./styles.module.css";
import getData from "./hooks/getData";

function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState({});

  const { apiCall = () => {} } = getData();

  useEffect(() => {
    if (val) {
      apiCall(val, setData);
    }
  }, [apiCall, val, setData]);

  return (
    <div className={styles.container}>
      <Header val={val} setVal={setVal} />

      <ResultCard data={data} />
    </div>
  );
}

export default App;

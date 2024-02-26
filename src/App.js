import { useCallback, useEffect, useState } from "react";
import Header from "./Header";
import ResultCard from "./ResultCard";
import styles from "./styles.module.css";
import getData from "./hooks/getData";
import _debounce from "lodash/debounce";

function App() {
  const [val, setVal] = useState("a");
  const [data, setData] = useState({});

  const { apiCall = () => {} } = getData(setData);
  const debounceFn = useCallback(_debounce(apiCall, 500), []);

  useEffect(() => {
    if (val) debounceFn(val);
  }, [val]);

  return (
    <div className={styles.container}>
      <Header val={val} setVal={setVal} />

      <ResultCard data={data} />
    </div>
  );
}

export default App;

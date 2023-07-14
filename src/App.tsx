import { useEffect } from "react";
import { BeerStore } from "./store";
import { Routers } from "./routes";
import { shallow } from "zustand/shallow";
import { URL } from "./components/assets/constants";

import "./App.css";

function App(): JSX.Element {
  const { loadData, count, data } = BeerStore((state) => state, shallow);

  useEffect(() => {
    loadData(`${URL}${count}`);
  }, [loadData]);

  useEffect(() => {
    if (data.length < 15 && count > 1) {
      loadData(`${URL}${count}`);
    }
  }, [data]);

  return (
    <div className='App'>
      <Routers />
    </div>
  );
}

export default App;

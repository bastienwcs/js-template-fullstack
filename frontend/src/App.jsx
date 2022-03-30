import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {datas.map((data) => (
          <li>{JSON.stringify(data)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

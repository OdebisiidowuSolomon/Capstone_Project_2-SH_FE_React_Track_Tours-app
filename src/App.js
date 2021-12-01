import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => setTours(res.data));
  }, []);
  return (
    <main>
      <div>{tours.length > 0 ? <Tours tours={tours} /> : <Loading />}</div>
    </main>
  );
}

export default App;

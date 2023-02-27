import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [alldata, setAllData] = useState([]);
  const apiURL = "http://localhost:5000/api/goals";

  const fetchallData = async () => {
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      setAllData(response.data);
    } catch (error) {
      console.error(error);
      setAllData([]);
    }
  };
  useEffect(() => {
    fetchallData();
  }, []);

  return (
    <div className="App">
      {alldata.length > 0? (
        
        alldata.map((info) => (
          <div key={info._id}>
            <h1>{info.title}</h1>
            <p >{info.description}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;

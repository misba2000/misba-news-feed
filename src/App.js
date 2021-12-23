import axios from 'axios';
import {useEffect,useState} from "react";
import Promise from "./Promise";
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("inside useEffect");
    getAllCharacters();

  }, [])

  const getAllCharacters = () => {
    axios.get("https://www.breakingbadapi.com/api/characters")
    .then((res) => setCharacters(res.data))
    .catch((err) => console.log(err));

 };

 console.log("characters", characters);
  return (
    <div className="App" >
    {characters.map((item) => (
      <div>

        <Promise img={item.img} name={item.name} birthday={item.birthday} occupation={item.occupation}  />
    </div>
    ))}
  </div>
);
}

  
      
    
  

export default App;

import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';
import UserList from './components/UserList';
import Loading from './components/Loading';
import axios from "axios";
function App() {
  const [ListOfUser,setListOfUser]=useState(null)
  useEffect ( ()=> {
    axios.get("https://jsonplaceholder.typicode.com/users").then((users)=>setListOfUser(users.data)).catch((err)=>console.log("error:",err))
  } , [] )
   

  return (
    <div className="App">
    {
      ListOfUser ? < UserList ListOfUser={ListOfUser} ></UserList> : <Loading/>
    }
    </div>
  );
  }

export default App;

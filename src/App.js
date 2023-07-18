import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import {db } from "./config/firebase";
import {getDocs,collection, addDoc} from "firebase/firestore";

function App() {
const [userList,setUserList]=useState([]);

//Register New User
const [newUsername,setNewUsername] = useState("");
const [newPassword,setNewPassword] = useState("");

console.log(newUsername + newPassword)

//ends here

const userCollectionRef = collection(db,"users");

useEffect(()=>{
  const getUserList = async() => {
    try{
      const data = await getDocs(userCollectionRef);

        const filteredUsers = data.docs.map ((doc)=>({...doc.data()}));

      setUserList(filteredUsers);
    }catch(err){
        console.error(err);
      }
  }

  getUserList();
}, []);

const onAddNewUser= async () => {
  await addDoc(userCollectionRef, {
            username: newUsername,
            password: newPassword,
            administrator: false
          })
}

  return (
    <div className="App">
      <Auth />
      <div>
        <input  placeholder='Username...'
                onChange={(e)=> setNewUsername(e.target.value)}/>
        <input placeholder='Password...'
                onChange={(e)=> setNewPassword(e.target.value)}/>
        <button onClick={onAddNewUser}>register</button>
      </div>
      <div>
        {userList.map((user) =>(
            <div>
              <h1 style={{color: user.administrator ? "green" : "red"}}>Username: {user.username}</h1>
              <p>Password :{user.password}</p>
         
            </div>

        ))}
      </div>

    </div>
  );
}

export default App;

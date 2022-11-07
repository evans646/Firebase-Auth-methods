import {useState,useEffect} from 'react';
import { getAuth,onAuthStateChanged} from 'firebase/auth'; //onAuthStateChanged helps us to listen to the changes in the app

const useUser =()=> {
    const [user,setUser] = useState(null);
    
    
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(getAuth(),user =>{//the user can be a firebase user or null 
        setUser(user);
        console.log(user)
       });
       return unsubscribe;
    },[]);//to make sure we only sub to changes when the useEffect hok is called

    return {user};
};

export default useUser;
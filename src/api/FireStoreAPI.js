
import {firestore} from '../firebaseConfig' ;
import {addDoc ,collection ,onSnapshot} from 'firebase/firestore' ;
import { toast } from 'react-toastify';
let dbRef = collection(firestore , "posts")
const postStatus = (data) =>{
   
   addDoc(dbRef ,data)
   .then((res) => {
    toast.success("Post has been updated!");
   })
   .catch((err) =>{
    console.log(err);
   })
}
const getPosts = (setgetStatus) =>{
   onSnapshot(dbRef ,(res) =>{
      setgetStatus(res.docs.map((docs) => {
         return {...docs.data() ,id : docs.id}
      }));
   })
}
export{postStatus ,getPosts}

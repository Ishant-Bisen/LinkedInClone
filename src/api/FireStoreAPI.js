
import {firestore} from '../firebaseConfig' ;
import {addDoc ,collection} from 'firebase/firestore' ;
let dbRef = collection(firestore , "posts")
const postStatus = (data) =>{
   let object = {
    status : data 
   }
   addDoc(dbRef ,object)
   .then((res) => {
    console.log("Document has updated!");
   })
   .catch((err) =>{
    console.log(err);
   })
}
export{postStatus}

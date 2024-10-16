import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "./init";
import { error } from "console";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(
  data: { fullname: string; email: string; password: string, role?: string },

) {
  const q = query(
    collection(firestore, 'users'),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id:doc.id,
    ...doc.data(),
  }));

  if (users.length > 0){
    return({status:false, statusCode:400 , message:"email sudap ada"})
  }else{
    data.role = 'admin';
    data.password = await bcrypt.hash(data.password, 10);
    try {
        await addDoc(collection(firestore, "users"), data)
       return {status: true,statusCode:200, message:"register succuss"}
    } catch (error) {
        return {status: false, statusCode:400 ,message: "register faild"};
    }
  }
}


export async function login(data:{email: string}) {
    const q = query(collection(firestore, 'users'), where('email', '==', data.email)

);
    const snapshot = await getDocs(q);
    const user = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    if(user){
        return user[0];
    }else{
        return null;
    }
};







// export async function signUp(userData: {
//     email:string;
//     fullname:string;
//     password:string;
//     role?:string;
// }, callback: Function) {
//     const q = query(
//         collection (firestore, 'user'),
//         where('email', "==", userData.email),
//     );

//     const snapshot = await getDocs(q);
//     const data = snapshot.docs.map((doc) => ({
//         id:doc.id,
//         ...doc.data(),
//     }));

//     if (data.length > 0){
//         callback(false);
//     } else {
//         if(!userData.role){
//             userData.role = 'member';
//         }
//         userData.password = await bcrypt.hash(userData.password, 10)
//         await addDoc(collection(firestore, "user"), userData)
//         .then(() => {
//             callback(true);
//         }).catch((error) => {
//             callback(false);
//             console.log(error);
//         })
//     }
// }

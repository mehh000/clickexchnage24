'use server'


import { db } from "@/DB/firebase_config";
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";


// adding exchnage data in the firebase
export const addExchnage = async (exchangeData) =>{
try {

    const exchangeCollectionRef = collection(db, "exchanges");

    const addRef = await addDoc(exchangeCollectionRef, exchangeData);
    console.log('exchnage added ', addRef.id);
    
} catch (error) {
    console.log('faild to add',error)
}
};

// getting exchnage all data from firebase 

export const getExchnageAll = async () =>{
    try {

        const exchnageCollectionRef = collection(db, "exchanges")
        const querySnapshot = await getDocs(exchnageCollectionRef);
        const exchnageData = querySnapshot.docs.map((doc) =>({
            id: doc.id,
            ...doc.data(),
        }));
        return exchnageData;
        
    } catch (error) {
        console.log(error)
    }
};


// updatee a spacific exchange data

export const updateExchnage = async (id, exchangeData) =>{
    try {

        const exchangeRef = doc(db, "exchanges", id);
        await updateDoc(exchangeRef, exchangeData);
        console.log('exchange updated',id)
        
    } catch (error) {
        console.log(error)
    }
}

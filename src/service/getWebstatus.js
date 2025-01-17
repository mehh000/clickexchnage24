'use server'

import { db } from "@/DB/firebase_config"
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";


// get the data 
export const getWebStatus = async () => {
    try {
        const collectionRef = collection(db, "webstatus");
        const statusQuerySnapshot = await getDocs(collectionRef);
        const statusData = statusQuerySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return statusData;
    } catch (error) {
        console.error("Error fetching web status:", error);
        return [];
    }
};
//update status with id
export const updateWebStatus = async (status, id) => {
    try {
        const statusDocRef = doc(db, "webstatus", id); // Reference to the specific document
        await updateDoc(statusDocRef, { status }); // Update the "status" field in Firestore
        console.log("Web status updated successfully");
    } catch (error) {
        console.error("Error updating web status:", error);
    }
};

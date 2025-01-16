"use server";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/DB/firebase_config";

export const getMessage = async () => {
  try {
    // Reference to the 'message' collection
    const messageCollectionRef = collection(db, "message");

    // Fetch all documents in the collection
    const querySnapshot = await getDocs(messageCollectionRef);
    const messageList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Return the list of messages
    return messageList;
  } catch (error) {
    console.error("Failed to get messages because:", error); // Use console.error for errors
    return []; // Return an empty array in case of an error
  }
};

'use server'

import { collection, getDocs } from "firebase/firestore"; 
import { db } from "@/DB/firebase_config";

// Function to get all users from the 'users' collection
export const getAllUsers = async () => {
  try {
    // Reference to the 'users' collection
    const usersCollectionRef = collection(db, "users");
    
    // Get all documents in the collection
    const querySnapshot = await getDocs(usersCollectionRef);
    
    // Create an array to store the user data
    const usersList = [];
    
    // Loop through all the documents and push the data into the array
    querySnapshot.forEach((doc) => {
      usersList.push({ id: doc.id, ...doc.data() });
    });

    // Return the list of users
    return usersList;
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
};
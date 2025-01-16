"use server";

import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/DB/firebase_config";

export const getAllCurrencyData = async () => {
  try {
    // Reference to the 'ourcurrency' collection
    const currencyCollectionRef = collection(db, "ourcurrency");

    // Fetch all documents in the collection
    const querySnapshot = await getDocs(currencyCollectionRef);
    const currencyData = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Add the document ID for reference
      ...doc.data(), // Include the document data
    }));

    // Return the list of currency data
    return currencyData;
  } catch (error) {
    console.error("Failed to fetch currency data because:", error);
    return []; // Return an empty array if an error occurs
  }
};

export const addCurrencyData = async (currency) => {
  try {
    // Reference to the 'ourcurrency' collection
    const currencyCollectionRef = collection(db, "ourcurrency");

    // Add a new document with the currency data
    const docRef = await addDoc(currencyCollectionRef, currency);
    console.log("Currency added with ID:", docRef.id);
  } catch (error) {
    console.error("Failed to add currency data because:", error);
  }
};

export const updateCurrencyData = async (id, updatedCurrency) => {
  try {
    // Reference to the specific document in the 'ourcurrency' collection
    const currencyDocRef = doc(db, "ourcurrency", id);

    // Update the document with the new currency data
    await updateDoc(currencyDocRef, updatedCurrency);
    console.log("Currency updated with ID:", id);
  } catch (error) {
    console.error("Failed to update currency data because:", error);
  }
};

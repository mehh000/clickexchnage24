"use server";

import { db } from "@/DB/firebase_config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export const sendMessage = async (userId, senderId, message) => {
  try {
    // Reference to the user's Firestore document
    const userRef = doc(db, "users", userId);

    // Get the user document
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      throw new Error(`User with ID ${userId} does not exist`);
    }

    // Get the user's current message map or initialize an empty object
    const userData = userSnapshot.data();
    const messages = userData.messages || {};

    // Ensure there's a subfield for the sender
    if (!messages[senderId]) {
      messages[senderId] = [];
    }

    // Add the new message to the sender's subfield
    messages[senderId].push({
      sender: senderId,
      message: message,
      timestamp: new Date().toISOString(),
    });

    // Update the user document with the new message
    await updateDoc(userRef, { messages });

    console.log("Message sent successfully");
  } catch (error) {
    console.log("Failed to send message because:", error);
  }
};


// get the users messages maps map names
export const getMessages = async (userId) => {
  try {
    // Reference to the user's Firestore document
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);
    if (!userSnapshot.exists()) {
      throw new Error(`User with ID ${userId} does not exist`);
    }
    const userData = userSnapshot.data();
    const messages = userData.messages || {};
    return messages;

  } catch (error) {

  }
}
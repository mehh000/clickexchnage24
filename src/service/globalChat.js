'use server'


import { setDoc, collection, addDoc, query, where, getDocs, getDoc, doc, serverTimestamp } from "firebase/firestore";

import { db } from "@/DB/firebase_config";


export const addChatWithMessage = async (userId, adminId, senderId, text, time) => {
  try {
    // Create a reference to the chats collection and generate a unique document ID
    const chatDocRef = doc(db, "chats", `${userId}_${adminId}`);

    // Create or update the main chat document
    await setDoc(
      chatDocRef,
      {
        users: [userId, adminId], // Add the users array
      },
      { merge: true } // Merge to prevent overwriting existing data
    );

    // Reference the specific message in the messages subcollection with a custom ID
    const messageDocRef = doc(chatDocRef, "messages", time.toString());

    // Add a message to the subcollection with the custom ID
    await setDoc(messageDocRef, {
      senderId,
      text,
      timestamp: time,
    });

    console.log("Chat and message added successfully with custom ID:", time);
  } catch (error) {
    console.error("Error adding chat and message:", error.message);
    throw error; // Rethrow error to handle it where this function is called
  }
};

export const getChatsWithMessages = async (userId) => {
  try {
    const chatsCollectionRef = collection(db, "chats");

    // Query to find all chats where the userId exists in the 'users' array
    const q = query(chatsCollectionRef, where("users", "array-contains", userId));
    const querySnapshot = await getDocs(q);

    const chatData = [];

    for (const docSnapshot of querySnapshot.docs) {
      const chatDoc = docSnapshot.data();

      // Fetch messages subcollection
      const messagesCollectionRef = collection(docSnapshot.ref, "messages");
      const messagesSnapshot = await getDocs(messagesCollectionRef);

      const messages = messagesSnapshot.docs.map((msgDoc) => ({
        id: msgDoc.id,
        ...msgDoc.data(),
      }));

      chatData.push({
        id: docSnapshot.id,
        ...chatDoc,
        messages,
      });
    }

    console.log("Fetched chat data:", chatData);
    return chatData;
  } catch (error) {
    console.error("Error fetching chats with messages:", error);
    return [];
  }
};



// for admin to add text

export const adminChatAdd = async (id, senderId, text, time) => {
  try {
    // Reference the specific document in the subcollection with a custom ID
    const messageDocRef = doc(db, "chats", id, "messages", time.toString());

    // Create the new message object
    const newMessage = {
      senderId,
      text,
      timestamp: time,
    };

    // Set the document with the custom ID
    await setDoc(messageDocRef, newMessage);

    console.log("Message added with custom ID:", time);
    return time; // Return the custom ID if needed
  } catch (error) {
    console.error("Error adding message:", error.message);
    throw error; // Rethrow error to handle it where this function is called
  }
};


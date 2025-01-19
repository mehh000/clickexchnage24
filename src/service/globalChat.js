'use server'


import {  setDoc, collection, addDoc } from "firebase/firestore";
import {  query, where, getDocs, getDoc, doc } from "firebase/firestore";
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
  
      // Reference the messages subcollection
      const messagesCollectionRef = collection(chatDocRef, "messages");
  
      // Add a message to the subcollection
      await addDoc(messagesCollectionRef, {
        senderId,
        text,
        time,
      });
  
      console.log("Chat and message added successfully.");
    } catch (error) {
      console.error("Error adding chat and message:", error);
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


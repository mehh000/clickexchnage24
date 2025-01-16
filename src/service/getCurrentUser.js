'use server';

import { db } from '@/DB/firebase_config'; // Firestore client-side configuration
import { doc, getDoc } from 'firebase/firestore';

export const getCurrentUser = async (uid) => {
  try {
    if (!uid) throw new Error('UID is required to fetch user data.');

    // Reference to the user document in Firestore
    const userRef = doc(db, 'users', uid);

    // Fetch the document
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      // Return user data
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      console.error('No user found with the provided UID.');
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    return null;
  }
};

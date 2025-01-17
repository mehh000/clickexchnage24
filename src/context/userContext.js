'use client'


// first import all the module 
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '@/DB/firebase_config';
import { onAuthStateChanged } from 'firebase/auth';
import { getCurrentUser } from '@/service/getCurrentUser';
import { getWebStatus, updateWebStatus } from '@/service/getWebstatus';

//now create a new context with createContext 

export const userContext = createContext();

//  make a provider

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [exchangeData, setExchnage] = useState({});
    const [isOnline, setIsOnline] = useState();
    const [statusId, setStatusID] = useState();


    // get the user with uid
    useEffect(() => {
        // Subscribe to auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                // Log and fetch user data if logged in
                //  console.log('Current user:', currentUser);
                try {
                    const userData = await getCurrentUser(currentUser.uid);
                    setUser(userData);
                    //    console.log('Fetched user data:', userData);
                } catch (error) {
                    //   console.error('Error fetching user data:', error);
                }
            } else {
                // console.log('No user is logged in.');
                setUser(null);
            }
        });

        // Cleanup on unmount
        return () => unsubscribe();
    }, []);

    const fetchStatus = async () => {
        try {
            const data = await getWebStatus();
            // console.log("Web status:", data[0]?.id);
            setIsOnline(data[0]?.status || false);
            setStatusID(data[0]?.id || null);
        } catch (error) {
            console.error("Failed to fetch web status:", error);
        }
    };


    useEffect(() => {


        fetchStatus();
    }, []);

    const handleWebsiteOn = async () => {


        try {
            const updatedStatus = !isOnline;
            await updateWebStatus(updatedStatus, statusId);
            fetchStatus();

        } catch (error) {
            console.error("Error updating web status:", error);
        }
    };




    //   now return the fucntion and state to the children
    return (
        <userContext.Provider value={{
            user,
            setUser,
            exchangeData,
            handleWebsiteOn,
            isOnline,
            setExchnage
        }}>
            {children}
        </userContext.Provider>
    )

}
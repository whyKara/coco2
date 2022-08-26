import React, { useState, createContext, useEffect } from "react";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['email'],
            webClientId: '522896815441-s2bvu8ng4kc4qvpulrcu7au1bia33d2e.apps.googleusercontent.com',
            offlineAccess: true
        });
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber;
    }, [])

    function onAuthStateChanged(user) {
        setUser(user)
        if (user) setLoggedIn(true)
    }

    _signIn = async () => {
        setIsLoading(true);
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setLoggedIn(true)
            const credential = auth.GoogleAuthProvider.credential(idToken, accessToken)
            await auth().signInWithCredential(credential)
            setIsLoading(false);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('Cancel')
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress')
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('Play service not available')
            } else {

            }
            setIsLoading(false);
        }
    }

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            auth().signOut().then(() => alert('You are singned out'))
            setLoggedIn(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthenticationContext.Provider
            value={{
                loggedIn,
                user,
                _signIn,
                signOut,
                onAuthStateChanged,
                isLoading
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}
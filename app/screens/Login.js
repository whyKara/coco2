import React, { useState, useEffect } from 'react'
import { View, Text, Button, SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

// async function onGoogleButtonPress() {
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();
//     console.log(idToken)
//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
// }
// function GoogleSignIn() {
//     return (
//         <Button
//             title="Google Sign-In"
//             onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//         />
//     );
// }
function LoginScreen({ navigation }) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState([]);
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
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            setLoggedIn(true)
            const credential = auth.GoogleAuthProvider.credential(idToken, accessToken)
            await auth().signInWithCredential(credential)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('Cancel')
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress')
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('Play service not available')
            } else {

            }
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
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 500 }}>
                {!user ? (
                    <>
                        <View>
                            <Text>
                                Please sign in to view chatbot
                            </Text>
                            <GoogleSigninButton style={{ width: 225, height: 48 }} size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={_signIn}
                            />
                        </View>
                    </>
                ) : (
                    <View style={{ justifyContent: 'space-between', flex: 0.5, alignItems: 'center' }}>
                        <Text style={{
                            color: "black", fontSize: 30, fontWeight: 'bold'
                        }}> Welcome {user.displayName}</Text>
                        <Button
                            title="Go to chatbot"
                            onPress={() => navigation.navigate('ChatbotScreen', {
                                name: user.displayName,
                                id: user.uid
                            })}
                        />
                        <Button onPress={signOut} title={'Logout'} color="red" />
                    </View>
                )}
            </View>
        </>
    );

}

export default LoginScreen

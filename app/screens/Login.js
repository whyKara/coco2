import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { AuthenticationContext } from "../context/authentication.context"
import { ActivityIndicator, Colors } from "react-native-paper";
function LoginScreen({ navigation }) {
    const { isLoading, _signIn } = useContext(AuthenticationContext);

    return (
        <>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 500 }}>
                <>
                    <View>
                        <Text>
                            Please sign in to view chatbot
                        </Text>
                        <GoogleSigninButton style={{ width: 225, height: 48 }} size={GoogleSigninButton.Size.Wide}
                            color={GoogleSigninButton.Color.Dark}
                            onPress={() => _signIn()}
                        //.then(() => navigation.navigate("Dashboard"))
                        />
                        {isLoading && <ActivityIndicator>
                            {" "}
                            animating={true} color={Colors.blue300}
                        </ActivityIndicator>}

                    </View>
                </>

            </View>
        </>
    );

}

export default LoginScreen

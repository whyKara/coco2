import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { AuthenticationContext } from "../context/authentication.context"
import { ActivityIndicator, Colors } from "react-native-paper";
import { colors } from '../config/colors';
function LoginScreen({ navigation }) {
    const { isLoading, _signIn } = useContext(AuthenticationContext);

    return (
        <>
            {/* <View style={{ justifyContent: 'center', alignItems: 'center', height: 500 }}>
                <>
                    <View>
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

            </View> */}
            <View style={styles.container}>
                <Image
                    style={styles.bg}
                    source={require('../../assets/images/bg1.png')}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.top}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/logo.png')}
                        />
                        <Image
                            style={styles.welcomeImage}
                            source={require('../../assets/images/enjoy.png')}
                        />
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.btnWrapper}>
                            <GoogleSigninButton style={{ width: 225, height: 48, margin: 'auto' }} size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={() => _signIn()}
                            //.then(() => navigation.navigate("Dashboard"))
                            />
                            {isLoading && <ActivityIndicator>
                                {" "}
                                animating={true} color={Colors.blue300}
                            </ActivityIndicator>}

                        </View>
                        <Text style={styles.heading}>We are what we do</Text>
                        <Text style={styles.subHeading}>
                            Thousand of people are usign silent moon for smalls meditation{' '}
                        </Text>


                    </View>
                </View>
            </View>
        </>
    );

};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    bg: {
        position: 'absolute',
    },
    contentContainer: {
        padding: 20,
        marginTop: 30,
        flex: 1,
    },
    logo: {
        alignSelf: 'center',
    },
    welcomeImage: {
        marginTop: 50,
    },
    top: {
        flex: 1,
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    heading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 40,
        textAlign: 'center',
        color: colors.heading,
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 16,
        fontWeight: '300',
        lineHeight: 26,
        textAlign: 'center',
        color: colors.gray,
    },
    btnWrapper: {
        margin: 'auto',
        marginBottom: 20,
        alignItems: 'center'
    },
    loginLinkWrapper: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 90,
    },
    notificationContent: {
        color: colors.gray,
        fontSize: 14,
        fontFamily: 'HelveticaNeue',
    },
    link: {
        color: colors.primary,
        fontSize: 14,
        fontFamily: 'HelveticaNeue',
    },
});


export default LoginScreen

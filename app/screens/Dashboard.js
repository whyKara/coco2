import { View, Text, Button, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthenticationContext } from "../context/authentication.context"
import { ActivityIndicator, Colors } from "react-native-paper";
import Journal from './Journal';
import ChatbotScreen from './Chatbot';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../config/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from "@react-native-firebase/firestore"
const Tab = createBottomTabNavigator();

const Dashboard = ({ route, navigation }) => {
    const { user, signOut } = useContext(AuthenticationContext);

    return (
        <>
            {user ?

                <ScrollView>
                    {/* <Button
                        title="Go to chatbot"
                        onPress={() => navigation.navigate('ChatbotScreen', {
                            name: user.displayName,
                            id: user.uid
                        })}
                    /> */}


                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={require('../../assets/images/logo.png')}
                        />
                        <View style={styles.header}>
                            <Text style={styles.heading}>Hello,  {user.displayName}</Text>
                            <Text style={styles.subHeading}>We hope you have a good day</Text>
                        </View>
                        <View style={styles.sectionWrapper1}>
                            <View style={styles.item1}>
                                <Image
                                    style={styles.basicImg}
                                    source={require('../../assets/images/basicImg.png')}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={[styles.cardTitle, { color: colors.whiteShade }]}>
                                        Test 1
                                    </Text>
                                    <Text style={[styles.cardSubTitle, { color: colors.whiteShade }]}>
                                        Assesment
                                    </Text>
                                </View>
                                <View style={styles.cardFooterWrapper}>
                                    <View>
                                        <Text style={[styles.footerTitle, { color: colors.whiteShadeBg }]}>
                                            3-10 MIN
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={[
                                                styles.cardBtn,
                                                { backgroundColor: colors.whiteShadeBg },
                                            ]}
                                            onPress={() => navigation.navigate('Questions')}
                                        // disabled={true}
                                        >
                                            <Text style={styles.btnLabel}>START</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item2}>
                                <Image source={require('../../assets/images/relaxationimg.png')} />
                                <View style={styles.cardContent}>
                                    <Text style={[styles.cardTitle, { color: colors.heading }]}>
                                        Test 2
                                    </Text>
                                    <Text style={[styles.cardSubTitle, { color: colors.heading }]}>
                                        Assesment
                                    </Text>
                                </View>
                                <View style={styles.cardFooterWrapper}>
                                    <View>
                                        <Text style={[styles.footerTitle, { color: colors.heading }]}>
                                            3-10 MIN
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={[styles.cardBtn, { backgroundColor: colors.heading }]}
                                            onPress={() => navigation.navigate('Questions2')}
                                        >

                                            <Text style={[styles.btnLabel, { color: colors.whiteShadeBg }]}>
                                                START
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.sectionWrapper1}>
                            <View style={styles.item3}>
                                <Image
                                    style={styles.basicImg}
                                    source={require('../../assets/images/bgShape1.png')}
                                />
                                <View style={styles.cardContent}>
                                    <Text style={[styles.cardTitle, { color: colors.whiteShade }]}>
                                        Test 3
                                    </Text>
                                    <Text style={[styles.cardSubTitle, { color: colors.whiteShade }]}>
                                        Assesment
                                    </Text>
                                </View>
                                <View style={styles.cardFooterWrapper}>
                                    <View>
                                        <Text style={[styles.footerTitle, { color: colors.whiteShadeBg }]}>
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={[
                                                styles.cardBtn,
                                                { backgroundColor: colors.whiteShadeBg },
                                            ]}
                                            onPress={() => navigation.navigate('Questions3')}
                                        >
                                            <Text style={styles.btnLabel}>START</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.item4}>
                                <Image source={require('../../assets/images/cloud.png')} />
                                <View style={styles.cardContent}>
                                    <Text style={[styles.cardTitle, { color: colors.heading }]}>
                                        Test 4
                                    </Text>
                                    <Text style={[styles.cardSubTitle, { color: colors.heading }]}>
                                        Assesment
                                    </Text>
                                </View>
                                <View style={styles.cardFooterWrapper}>
                                    <View>
                                        <Text style={[styles.footerTitle, { color: colors.heading }]}>
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity
                                            style={[styles.cardBtn, { backgroundColor: colors.heading }]}
                                            onPress={() => navigation.navigate('Questions4')}
                                        >

                                            <Text style={[styles.btnLabel, { color: colors.whiteShadeBg }]}>
                                                START
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.dailyThoughtsWrapper}>
                            <Image
                                style={styles.bgShape1}
                                source={require('../../assets/images/bgShape1.png')}
                            />
                            <Image
                                style={styles.bgShape2}
                                source={require('../../assets/images/bgShape2.png')}
                            />
                            <Image
                                style={styles.bgShape3}
                                source={require('../../assets/images/bgShape3.png')}
                            />
                            <View>
                                <Text style={styles.dailyTitle}>Focus Attention</Text>
                                <Text style={styles.dailySubTitle}>MEDITATION - 3-10 MIN</Text>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate('Music')}>
                                    <Ionicons name={'play'} size={36} color={'black'} style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 5,
                                        borderRadius: 100,
                                        backgroundColor: 'white',
                                    }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.recommendWrapper}>
                            <Text style={styles.recommendTitle}>Recomended for you</Text>
                            <ScrollView horizontal={true}>

                                <View style={[styles.recommedCard]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Music3')}>

                                        <View
                                            style={[
                                                styles.recommednImgWrapper,
                                                { backgroundColor: '#afdbc5' },
                                            ]}>
                                            <Image
                                                source={require('../../assets/images/recommend1.png')}
                                            />
                                        </View>
                                        <View style={styles.recommendCardContentWrapper}>
                                            <Text style={styles.recommentContentTitle}>Happiness</Text>
                                            <Text style={styles.recommentContentSubTitle}>
                                                MEDITATION - 3-10 MIN
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.recommedCard]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Music2')}>
                                        <View
                                            style={[
                                                styles.recommednImgWrapper,
                                                { backgroundColor: '#fcdea5' },
                                            ]}>
                                            <Image
                                                source={require('../../assets/images/recommend2.png')}
                                            />
                                        </View>

                                        <View style={styles.recommendCardContentWrapper}>
                                            <Text style={styles.recommentContentTitle}>Focus</Text>
                                            <Text style={styles.recommentContentSubTitle}>
                                                MEDITATION - 3-10 MIN
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.recommedCard]}>

                                    <View
                                        style={[
                                            styles.recommednImgWrapper,
                                            { backgroundColor: '#afdbc5' },
                                        ]}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Music3')}>
                                            <Image
                                                source={require('../../assets/images/recommend1.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.recommendCardContentWrapper}>
                                        <Text style={styles.recommentContentTitle}>Happiness</Text>
                                        <Text style={styles.recommentContentSubTitle}>
                                            MEDITATION - 3-10 MIN
                                        </Text>
                                    </View>

                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>

                : <ActivityIndicator>
                    {" "}
                    animating={true} color={Colors.blue300}
                </ActivityIndicator>}
        </>
    )
}
export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
    },
    logo: {
        alignSelf: 'center',
    },
    header: {
    },
    heading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 40,
        color: colors.heading,
    },
    subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 20,
        fontWeight: '300',
        marginTop: 10,
        color: colors.heading,
    },
    sectionWrapper1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    item1: {
        backgroundColor: '#8E97FD',
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    item2: {
        backgroundColor: '#FFC97E',
        flex: 1,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    item3: {
        backgroundColor: '#Fdaa7E',
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    item4: {
        backgroundColor: '#8EC97E',
        flex: 1,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    basicImg: {
        alignSelf: 'flex-end',
    },
    cardContent: {
        position: 'absolute',
        top: '35%',
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue',
    },
    cardSubTitle: {
        marginTop: 10,
        fontSize: 11,
    },
    cardFooterWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: '0%',
        alignItems: 'center',
    },
    footerTitle: {
        fontSize: 11,
        fontFamily: 'HelveticaNeue',
    },
    cardBtn: {
        borderRadius: 50,
    },
    btnLabel: {
        fontFamily: 'HelveticaNeue',
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        color: colors.heading,
    },
    dailyThoughtsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.darkBg,
        alignItems: 'center',
        height: 95,
        borderRadius: 10,
        marginTop: 10,
    },
    bgShape1: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    bgShape2: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    bgShape3: {
        position: 'absolute',
        right: '40%',
        bottom: 0,
    },
    dailyTitle: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        color: colors.white,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dailySubTitle: {
        color: colors.white,
        fontSize: 11,
        fontFamily: 'HelveticaNeue',
    },
    recommendWrapper: {
        marginTop: 40,
    },
    recommendTitle: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue',
        color: colors.heading,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    recommedCard: {
        borderRadius: 10,
        width: 160,
        marginRight: 20,
    },
    recommednImgWrapper: {},
    recommentContentTitle: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        color: colors.heading,
        paddingTop: 10,
        paddingBottom: 5,
    },
    recommentContentSubTitle: {
        fontSize: 11,
        fontFamily: 'HelveticaNeue',

        color: colors.gray,
    },
});

export default Dashboard
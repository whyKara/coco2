// components/signup.js
import { color } from '@react-native-elements/base';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Modal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import firestore from "@react-native-firebase/firestore"
import { AuthenticationContext } from "../context/authentication.context"

const Questions = ({ route, navigation }) => {
    const { user, signOut } = useContext(AuthenticationContext);
    const [isLoading, setIsLoading] = useState(false);
    const [ADHDquestions, setADHDQuestions] = useState({})
    const [Anxietyquestions, setAnxietyQuestions] = useState({})
    const [Depressionquestions, setDepressionQuestions] = useState({})
    const [Selfquestions, setSelfQuestions] = useState({})
    const [Suicidequestions, setSuicideQuestions] = useState({})
    const [questions, setQuestion] = useState({})
    const [answers, setAnswers] = useState(new Array(20).fill(0))
    console.log(answers)
    const [id, setId] = useState(user.uid ? user.uid : "1")
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        const ADHDQuestionNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 24))
        const AnxietyQuestionNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 7))
        const DepressionQuestionNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 9))
        const SelfQuestionNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 12))
        const SuicideQuestionNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 16))
        // firestore().collection('CHATBOT_HISTORY').doc().get().then((snapshot) => { console.log(snapshot._ref._documentPath) })
        // firestore().collection('CHATBOT_HISTORY').doc().get().then((snapshot) => { console.log(snapshot._ref._documentPath) })
        // firestore().collection('CHATBOT_HISTORY').doc().get().then((snapshot) => { console.log(snapshot._ref._documentPath) })
        // firestore().collection('CHATBOT_HISTORY').doc().get().then((snapshot) => { console.log(snapshot._ref._documentPath) })
        // firestore().collection('CHATBOT_HISTORY').doc().get().then((snapshot) => { console.log(snapshot._ref._documentPath) })
        // firestore().collection('CHATBOT_HISTORY').get().then((snapshot) => { console.log(snapshot) })

        firestore().collection('Questions')
            .doc('qset1')
            .get()
            .then((snapshot) => {

                if (snapshot.exists) {
                    setQuestion(snapshot.data())
                } else {
                    console.log("No such document!");
                }
            }).catch((e) => {
                console.log(e)
            })
        // firestore().collection('Questions')
        //     .doc('Anxiety')
        //     .get()
        //     .then((snapshot1) => {

        //         if (snapshot1.exists) {
        //             setAnxietyQuestions(snapshot1.data())
        //             console.log(Anxietyquestions)
        //             setQuestion((prevState) => ({
        //                 ...prevState,
        //                 Anxietyquestions
        //             }))
        //         } else {
        //             console.log("No such document!");
        //         }

        //     }).catch((e) => {
        //         console.log(e)
        //     })

        // firestore().collection('Questions')
        //     .doc('Depression')
        //     .get()
        //     .then((snapshot) => {

        //         if (snapshot.exists) {
        //             setDepressionQuestions(snapshot.data())
        //             setQuestion({ ...ADHDquestions }, { ...Anxietyquestions }, Depressionquestions, { ...Selfquestions }, { ...Suicidequestions })
        //         } else {
        //             console.log("No such document!");
        //         }

        //     }).catch((e) => {
        //         console.log(e)
        //     })

        // firestore().collection('Questions')
        //     .doc('Self')
        //     .get()
        //     .then((snapshot) => {

        //         if (snapshot.exists) {
        //             setSelfQuestions(snapshot.data())
        //             setQuestion({ ...ADHDquestions }, { ...Anxietyquestions }, { ...Depressionquestions }, Selfquestions, { ...Suicidequestions })
        //         } else {
        //             console.log("No such document!");
        //         }

        //     }).catch((e) => {
        //         console.log(e)
        //     })

        // firestore().collection('Questions')
        //     .doc('Suicide')
        //     .get()
        //     .then((snapshot) => {

        //         if (snapshot.exists) {
        //             setSuicideQuestions(snapshot.data())
        //             setQuestion({ ...ADHDquestions }, { ...Anxietyquestions }, { ...Depressionquestions }, { ...Selfquestions }, Suicidequestions)
        //         } else {
        //             console.log("No such document!");
        //         }

        //     }).catch((e) => {
        //         console.log(e)
        //     })


    }, [])
    // firestore().collection('TestAnswers')
    // .doc("testAnswers")
    // .collection(id)
    // .add({
    //     qset: "qset1",
    //     userId: id,
    //     answers,
    //     createdAt: new Date().getTime(),
    useEffect(() => {
        console.log(answers)
    }, [answers])
    const submitAnswers = () =>
        firestore().collection('Answers')
            .doc(id)
            .collection('TestAnswers')
            .add({
                qtest1: "qtest1",
                userId: id,
                answers,
                createdAt: new Date().getTime(),
            }).then((answersid) => {
                // https://new-api-coco.herokuapp.com/
                console.log(answersid.collection('TestAnswers').doc()._documentPath._parts[3])
                fetch('https://new-api-coco.herokuapp.com/', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        u_id: id,
                        ans_id: answersid.collection('TestAnswers').doc()._documentPath._parts[3]
                    })
                });
                setModalVisible(true)
            })


    return isLoading ? (
        <View style={styles.preloader}>
            <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
    ) : (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.title}>Assesment</Text>
                {
                    Object.keys(questions).map((key, index) => {
                        return (
                            <View style={styles.question}>
                                <Text style={styles.text}>Q{index + 1}) {questions[key]}</Text>
                                <View>
                                    <RadioButton.Group onValueChange={answer => {
                                        setAnswers([answers.splice(index, 1)])
                                        setAnswers([...answers.slice(0, index), answer, ...answers.slice(index)])
                                    }
                                    } value={answers[index]} >
                                        <View style={{
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}>
                                            <RadioButton value="1" color='black' />
                                            <Text style={{ color: "black" }}>Extremly</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}>
                                            <RadioButton value="2" color='black' />
                                            <Text style={{ color: "black" }}>A Lot</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}>
                                            <RadioButton value="3" color='black' />
                                            <Text style={{ color: "black" }}> Moderately</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}>
                                            <RadioButton value="4" color='black' />
                                            <Text style={{ color: "black" }}>A Little</Text>
                                        </View>
                                        <View style={{
                                            flexDirection: "row",
                                            flexWrap: "wrap",
                                        }}>
                                            <RadioButton value="5" color='black' />
                                            <Text style={{ color: "black" }}>Not at all</Text>
                                        </View>
                                    </RadioButton.Group>
                                </View>
                            </View>
                        )
                    }
                    )}

                <Button
                    color="#3740FE"
                    title="Submit"
                    onPress={() => submitAnswers()}
                />
            </View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Success has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.textStyle}>Go back to home</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>)
}

export default Questions

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 35,
        backgroundColor: '#fff',
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1,
        color: '#3740FE',
    },
    text: {
        color: '#3740FE',
        marginTop: 25,
        marginBottom: 20,
        fontSize: 20,
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    question: {
        marginBottom: 20,
    }
});
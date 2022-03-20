import React, { useState, useCallback, useEffect } from 'react'
import { ScrollView, Text, View } from "react-native"
import { Card, Button } from 'react-native-elements'
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { Dialogflow_V2 } from 'react-native-dialogflow'
import { dialogflowConfig } from '../env'
import firestore from "@react-native-firebase/firestore"

const botAvatar = require('../assets/images/mascot.png')

const BOT = {
    _id: 2,
    name: 'Mr.Bot',
    avatar: botAvatar
}

const ChatbotScreen = ({ route, navigation }) => {
    const [messages, setMessages] = useState([]);
    const [name, setName] = useState(route.params.name)
    const [id, setId] = useState(route.params.id)

    useEffect(() => {
        // setMessages(
        //     [
        //         {
        //             _id: 2,
        //             text: 'My name is Coco',
        //             createdAt: new Date().getTime(),
        //             user: BOT
        //         },
        //         {
        //             _id: 1,
        //             text: 'Hello',
        //             createdAt: new Date().getTime(),
        //             user: BOT,
        //         }
        //     ]
        // )
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
        )

        firestore().collection('CHATBOT_HISTORY')
            .doc(id)
            .collection('MESSAGES')
            .orderBy('createdAt', 'desc')
            .limit(15)
            .get()
            .then((snapshot) => {
                let messages = snapshot.docs.map((doc) => {
                    const firebaseData = doc.data()
                    const data = {
                        _id: doc.id,
                        text: doc.text,
                        createdAt: new Date().getTime(),
                        ...firebaseData
                    }
                    if (!firebaseData.system) {
                        data.user = {
                            ...firebaseData.user,
                            name: firebaseData.user.name
                        }
                    }
                    return data
                })
                if (messages.length > 0) {
                    setName(name)
                    setId(id)
                    setMessages(messages)
                } else {
                    setName(name)
                    setId(id)
                    setMessages([{
                        _id: 2,
                        text: `hi`,
                        createdAt: new Date().getTime(),
                        user: BOT
                    }, {
                        _id: 1,
                        text: `Hello, ${route.params.name}. My name is Mr. Bot`,
                        createdAt: new Date().getTime(),
                        user: BOT
                    }]
                    )
                }
            }).catch((e) => {
                console.log(e)
            })
    }, [])

    const onSend = (messages = []) => {
        setMessages(oldArray => [messages[0], ...oldArray])
        let text = messages[0].text
        const { id, name } = route.params
        firestore().collection('CHATBOT_HISTORY')
            .doc(id)
            .collection('MESSAGES')
            .add({
                text,
                createdAt: new Date().getTime(),
                user: {
                    _id: 1,
                    name: name,
                }
            })
        Dialogflow_V2.requestQuery(
            text,
            (result) => handleGoogleResponse(result),
            (error) => console.log(error)
        )
    }

    const handleGoogleResponse = (result) => {
        let text = result.queryResult.fulfillmentMessages[0]
        text = text.text.text[0]
        sendBotResponse(text)
    }

    const sendBotResponse = (text) => {
        let msg;
        if (text === 'therapy') {
            msg = {
                text: "I am there for you\n Its okay",
                //        image: 'https://cdn.britannica.com/69/155469-131-14083F59/airplane-flight.jpg',
                createdAt: new Date().getTime(),
                user: BOT
            }
        } else if (text == 'show options') {
            msg = {
                text: "Chose an option",
                createdAt: new Date().getTime(),
                user: BOT,
                quickReplies: {
                    type: 'radio',
                    keepIt: true,
                    values: [
                        {
                            title: 'music',
                            value: 'music',
                            bColor: "#A0522D",
                            bgColor: "#A0522D"
                        },
                        {
                            title: 'chocolate',
                            value: 'chocolate',
                            bColor: "#7B68EE",
                            bgColor: "#7B68EE"
                        },
                        { title: 'run', value: 'run', bColor: "#008BBB", bgColor: "#008BBB" },
                    ]
                }
            }
        } else if (text === "show cards") {
            msg = {
                text: "Chose an option card",
                createdAt: new Date().getTime(),
                user: BOT,
                isOptions: true,
                data: [{
                    title: 'music',
                    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
                    optionData: {
                        _id: 2,
                        text: '',
                        createdAt: '',
                        user: ''
                    }

                }, {
                    title: 'run',
                    image: 'https://media.istockphoto.com/photos/female-athlete-running-outdoors-picture-id862246682?s=612x612'
                }, {
                    title: 'chocolate',
                    image: 'https://media.istockphoto.com/photos/chocolate-collection-on-a-silk-ackground-picture-id183255573?s=612x612'
                }]
            }
        } else {
            msg = {
                text,
                createdAt: new Date().getTime(),
                user: BOT
            }
        }

        firestore().collection('CHATBOT_HISTORY')
            .doc(id)
            .collection('MESSAGES')
            .add(msg)
        msg._id = messages.length + 1
        setMessages(oldArray => [msg, ...oldArray])
    }

    const onQuickReply = (quickReply) => {
        setMessages((previousState) => ({
            messages: GiftedChat.append(previousState.messages, quickReply)
        }))

        let message = quickReply[0].value

        Dialogflow_V2.requestQuery(message, (result) => {
            message,
                (result) => handleGoogleResponse(result),
                (error) => console.log(error)
        })
    }
    const renderBubble = (props) => {
        if (props.currentMessage.isOptions) {
            return (
                <ScrollView style={{ backgroundColor: 'white' }} horizontal={true}>
                    {props.currentMessage.data.map((item) => (
                        <Card containerStyle={{ padding: 0, borderRadius: 15, paddingBottom: 7, overflow: 'hidden' }} key={item.title} >
                            <Card.Image source={{ uri: item.image }} style={{ width: 220, height: 110 }} resizeMode="cover" ></Card.Image>
                            <Card.Divider />
                            <Card.Title>{item.title}</Card.Title>

                            <Button
                                title="Choose"
                                style={{ height: 35 }}
                                onPress={() => sendBotResponse(item.title)}
                            />
                        </Card>
                    )
                    )}
                </ScrollView>
            )
        }
        return (
            <Bubble {...props} textStyle={{ right: { color: 'white' } }} wrapperStyle={{ left: { backgroundColor: "yellow" }, right: { backgroundColor: 'pink' } }} />
        )
    }
    return (
        <GiftedChat
            messages={messages}
            onSend={message => onSend(message)}
            onQuickReply={(quickReply) => onQuickReply(quickReply)}
            user={{ _id: 1, "avatar": 1, "name": "Carson" }}
            renderBubble={renderBubble}
        />

    )
}

export default ChatbotScreen;
import React, { useEffect, useContext, useState } from 'react'
import { Button } from 'react-native'
import { TextInput } from 'react-native-paper';
import { AuthenticationContext } from "../context/authentication.context"
import firestore from "@react-native-firebase/firestore"
const UpdateDetails = () => {
    const { user, signOut } = useContext(AuthenticationContext);
    const [name, setName] = useState("");
    const [school, setSchool] = useState("");
    const [classStandard, setClassStandard] = useState("");
    const [rollno, setRollNo] = useState("");
    const [id, setId] = useState(user.uid ? user.uid : "1")
    const onSubmit = () => {
        firestore().collection('CHATBOT_HISTORY')
            .doc(id)
            .collection('UserDetails')
            .add({
                id,
                name,
                school,
                classStandard,
                classStandard,
                rollno,
                createdAt: new Date().getTime(),
            }).then((e) => { console.log(e) }).catch((e) => {
                console.log(e)
            })
    }
    useEffect(() => {

    }, [])

    return (
        <>
            <TextInput
                label="name"
                value={name}
                onChangeText={name => setName(name)}
            />
            <TextInput
                label="school"
                value={school}
                onChangeText={school => setSchool(school)}
            />
            <TextInput label="class" value={classStandard} onChangeText={classStandard => setClassStandard(classStandard)} />
            <TextInput label="rollno" value={rollno} onChangeText={rollno => setRollNo(rollno)} />
            <Button
                color="#3740FE"
                title="Submit"
                onPress={() => onSubmit()}
            />
        </>
    );

}

export default UpdateDetails
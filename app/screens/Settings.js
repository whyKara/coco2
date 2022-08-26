import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';

const Settings = ({ navigation }) => {
    //"AnonymousVoiceTherapy", "Blog", "Community", "Journal", "MeditationMusic", "MoodTracker", "AvailableTherapist",
    const names = ["GettingStarted", "ChooseTopic", "CourseDetails", "Meditate"]
    return (
        //() => navigation.navigate("Dashboard")
        <ScrollView>
            <View>
                {
                    names.map((name) =>
                        <List.Item
                            title={name}
                            description={name}
                            left={props => <List.Icon {...props} icon="folder" />}
                            onPress={() => navigation.navigate(name)}
                        />
                    )}
            </View>
            <Button onPress={() => signOut()} title={'Logout'} color="#8E97FD" />
        </ScrollView>
    )
}

export default Settings
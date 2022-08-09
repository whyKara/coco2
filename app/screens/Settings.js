import { View, Text, Button } from 'react-native'
import React from 'react'
import { List } from 'react-native-paper';

const Settings = ({ navigation }) => {
    const names = ["AnonymousVoiceTherapy", "Blog", "Community", "Journal", "MeditationMusic", "MoodTracker", "AvailableTherapist"]
    return (
        //() => navigation.navigate("Dashboard")
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

    )
}

export default Settings
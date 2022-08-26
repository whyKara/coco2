import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var Sound = require('react-native-sound');


Sound.setCategory('Playback');


var ding = new Sound('ding.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // if loaded successfully
    console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());

});
const MusicDemo = () => {
    useEffect(() => {
        ding.setVolume(1);
        return () => {
            ding.release();
        };
    }, []);
    const playPause = () => {
        console.log("pla")
        ding.play(success => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        })
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.playBtn} onPress={playPause}>
                <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    playBtn: {
        padding: 20,
    },
});
export default MusicDemo;
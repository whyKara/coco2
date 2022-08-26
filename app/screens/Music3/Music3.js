import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { colors } from '../../config/colors';
import { styles } from './styles';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Navigation from '../../navigation';
var Sound = require('react-native-sound');


Sound.setCategory('Playback');


var ding = new Sound('music3.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
  console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());
});
export const Music3 = ({ navigation }) => {
  const [startplay, setStartPlay] = useState(true)
  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);
  const playPause = () => {
    setStartPlay(!startplay)
    startplay ? ding.play(success => {
      if (success) {
        setStartPlay(false)
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    }) : ding.pause()
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/bgShape7.png')}
        style={styles.bgImage1}
      />
      <Image
        source={require('../../../assets/images/bgShape8.png')}
        style={styles.bgImage2}
      />
      <Image
        source={require('../../../assets/images/bgShape9.png')}
        style={styles.bgImage3}
      />
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={'arrow-back'} size={36} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerRightBtnsWrapper}>
          <Image
            style={{ marginRight: 15 }}
            source={require('../../../assets/images/heartGray.png')}
          />

        </View>
      </View>

      <View style={styles.songContent}>
        <Text style={styles.title}>Happiness</Text>
        <Text style={styles.subTitle}>7 DAYS OF CALM</Text>
      </View>
      <View style={styles.playerControlWrapper}>
        <View style={styles.playerControl}>
          <Image source={require('../../../assets/images/fastBackward.png')} />
          <View>
            <TouchableOpacity onPress={playPause}>
              <Ionicons name={!startplay ? 'ios-pause-outline' : 'ios-play-outline'} size={36} color={'red'} />
            </TouchableOpacity>
          </View>
          <Image source={require('../../../assets/images/fastForward.png')} />
        </View>
        <View style={styles.progressBar}>
          <View style={styles.bar}>
            <Image
              style={styles.progressDot}
              source={require('../../../assets/images/dot.png')}
            />
            <View style={styles.progressCompleted} />
          </View>
          <View style={styles.timerWrapper}>
            <Text>1:30</Text>
            <Text>45:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

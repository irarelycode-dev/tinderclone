import React from 'react';
import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg',
          }}
          style={styles.profileImage}>
          <View style={styles.cardInfo}>
            <Text style={styles.name}>Zuckerberg</Text>
            <Text style={styles.bio}>
              No need to send me your nudes, I already saw them
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  cardInfo:{
    padding:10
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  name: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#fff',
    lineHeight:24
  },
});

export default App;

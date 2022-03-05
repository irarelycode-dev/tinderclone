import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Card = ({user}) => {
  const {name, image, bio} = user;
  return (
    <View style={styles.pageContainer}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: image,
          }}
          style={styles.profileImage}>
          <View style={styles.cardInfo}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.bio}>{bio}</Text>
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
  cardInfo: {
    padding: 10,
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
    lineHeight: 24,
  },
});

export default Card;

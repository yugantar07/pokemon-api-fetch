import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Swiper from 'react-native-swiper';

const ImageScreen = ({route}) => {
  const {sprites} = route.params;

  const images = [
    sprites.back_default,
    sprites.back_shiny,
    sprites.front_default,
    sprites.front_shiny,
    sprites.other.home.front_default,
    sprites.other.home.front_shiny,
  ];

  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      autoplay
      autoplayTimeout={3}
      loop>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{uri: image}} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  wrapper: {
    height: '100%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
});

export default ImageScreen;

// Images screen (Images.js)
import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

const Images = ({route}) => {
  const {sprites} = route.params;
  const allImg = [
    sprites.back_default,
    sprites.back_shiny,
    sprites.back_default,
    sprites.front_default,
    sprites.front_shiny,
    sprites.back_female,
  ];
  console.log(allImg);
  return (
    <ScrollView style={styles.container}>
      <SliderBox />
      {allImg.map((sprite, index) => (
        <Image key={index} source={{uri: sprite}} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default Images;

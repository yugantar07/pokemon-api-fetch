import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Bar} from 'react-native-progress';

const Details = ({navigation, route}) => {
  const {pokemon} = route.params;
  const stat = pokemon.stats.map(item => item.stat);
  const base_stat = pokemon.stats.map(item => item.base_stat);
  // console.log(base_stat);
  const icons = [
    'cards-heart-outline',
    'sword',
    'shield-half-full',
    'sword-cross',
    'shield-sword',
    'run-fast',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgConatiner}>
        <Image source={{uri: pokemon.image}} style={styles.image} />
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.types}>{pokemon.types}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Images', {sprites: pokemon.sprites})
          }>
          <Text style={styles.buttonText}>View images</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Stats:</Text>
        {stat.map((statItem, index) => (
          <View key={statItem.name} style={{padding: 10}}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <View>
                <Icon name={icons[index]} size={42} color="#495057" />
              </View>
              <View style={styles.statsView}>
                <Text style={styles.stat}>
                  {statItem.name} : {base_stat[index]}
                </Text>
                <Bar
                  progress={base_stat[index] / 100}
                  width={130}
                  height={20}
                  color={'#2a9d8f'}
                  unfilledColor={'#e0e0e0'}
                  borderWidth={0}
                  borderRadius={5}
                />
              </View>
            </View>
          </View>
        ))}
      </View>
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imgConatiner: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
    paddingBottom: 15,
  },
  statsContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  statsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  stat: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: '500',
  },
  statsView: {
    gap: 10,
  },
  types: {
    color: '#888',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2a9d8f',
    height: 40,
    justifyContent: 'center',
    width: '35%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
  },
});

export default Details;

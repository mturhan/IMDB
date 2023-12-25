import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AdsCarousel from '../components/AdsCarousel';
import TopTen from '../components/TopTen';
import Featured from '../components/Featured';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <AdsCarousel />
        <TouchableOpacity
          style={styles.trailers}
          onPress={() => navigation.navigate('Trailer')}>
          <Text style={styles.trailerText}>Browse trailers and videos</Text>
          <Text style={styles.trailerArr}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.headerText}>Featured today</Text>
        <Featured />
      </View>
      <View style={styles.section}>
        <Text style={styles.headerText}>Top 10 on IMDb this week</Text>
        <TopTen />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
  },
  headerText: {
    paddingBottom: 15,
    color: 'orange',
    fontSize: 24,
  },
  trailers: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'gray',
    borderColor: 'red',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  trailerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: 'white',
  },
  trailerArr: {
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 5,
  },
});

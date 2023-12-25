import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {dummy} from '../data';
import MovieModal from '../screens/MovieModal';
import MovieCard from './MovieCard';

const TopTen = () => {
  const item = dummy;
  const onShowModal = () => {
    <MovieModal />;
  };

  return (
    <FlatList
      data={item}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.imdbID}
      scrollToOverflowEnabled
      renderItem={({item, index}) => (
        <TouchableOpacity onPress={onShowModal}>
          <MovieCard item={item} index={index} />
        </TouchableOpacity>
      )}
    />
  );
};

export default TopTen;

const styles = StyleSheet.create({});

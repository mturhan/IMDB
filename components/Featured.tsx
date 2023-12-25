import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

import {dummy} from '../data';

const Featured = () => {
  const {width} = Dimensions.get('window');
  const item = dummy;
  return (
    <View>
      <FlatList
        data={item}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.imdbID}
        pagingEnabled
        scrollEnabled
        scrollToOverflowEnabled
        renderItem={({item}) => (
          <View>
            <Image source={{uri: item.Poster}} height={220} width={width / 3} />
          </View>
        )}
      />
    </View>
  );
};

export default Featured;

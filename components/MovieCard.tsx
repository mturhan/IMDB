import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MovieCard = ({item, index}: {item: Movies; index: number}) => {
  const {width} = Dimensions.get('window');
  return (
    <View
      className={`mx-3 flex flex-col bg-slate-800 rounded-lg pb-3 relative `}>
      <View className="absolute top-0 z-10">
        <TouchableOpacity>
          <Ionicons name={'bookmark'} size={40} color={'gray'} />
        </TouchableOpacity>
      </View>
      <Image source={{uri: item.Poster}} height={180} width={width / 3} />
      <View className="w-28  pl-2 space-y-1">
        <Text className="text-gray-400 font-bold text-xl">{index + 1}</Text>
        <Text className="text-slate-500">
          <Ionicons name={'star'} size={10} color={'yellow'} /> 6.5
        </Text>
        <Text numberOfLines={1} className="text-white">
          {item.Title}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;

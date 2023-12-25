import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Youtube from 'react-native-youtube-iframe';
import {logMovies} from '../api/omdb';
import {dummy} from './../data';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getVideo} from '../api/youtube';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AdsCarousel = () => {
  const width = Dimensions.get('window').width;

  const [movieData, setMovieData] = useState<Movies[] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = (await logMovies()) as Movies[];
      const vidArr = await Promise.all(
        data.map(async movie => {
          const video = await getVideo(movie.Title);
          return video;
        }),
      );
      setMovieData(data);
      const movArr: string[] = [];
      vidArr.forEach(vid => {
        movArr.push(vid[0].id.videoId);
      });

      setSelectedVideo(movArr);
    }

    // fetchData();
  }, []);

  const onStateChange = (state: any) => {
    if (state === 'playing') setAutoPlay(false);
    if (state === 'ended') setIsPlaying(false);
  };

  return (
    <View>
      {movieData ? (
        <Carousel
          loop={true}
          width={width}
          height={width / 1.5}
          autoPlay={autoPlay}
          autoPlayInterval={5000}
          data={movieData}
          scrollAnimationDuration={1000}
          // onSnapToItem={index => console.log('current index:', index)}
          renderItem={({item, index}) => (
            <View className="flex-1 border-white  border-2 relative">
              {/* <Youtube
                width={width}
                height={width / 1.5}
                play={isPlaying}
                videoId={selectedVideo[index]}
                onChangeState={onStateChange}
              /> */}

              <View className="flex items-end flex-row absolute bottom-0 left-0">
                <View className="absolute top-0 left-0 z-10">
                  <TouchableOpacity>
                    <Ionicons name="bookmark" size={30} color={'gray'} />
                  </TouchableOpacity>
                </View>
                <Image source={{uri: item.Poster}} height={130} width={100} />
                <Text className="text-white pb-3 pl-3">{item.Title}</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text className="text-white font-semibold text-lg">Loading...</Text>
      )}
    </View>
  );
};

export default AdsCarousel;

const styles = StyleSheet.create({});

//AIzaSyCzru5ZddLvs5kB3FcLCk5F1mZ6JE2lqVs

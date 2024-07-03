/* eslint-disable curly */
/* eslint-disable prettier/prettier */
// import { useRoute } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text} from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams,'Details'>{}

export const DetailsScreen = ({route}:Props) => {
  // const {movieId} = useRoute().params;
      const {movieId} = route.params;

      const {movie, isLoading, cast} = useMovie(movieId);

      if(isLoading) return <Text>Loading...</Text>;
  return (
    <ScrollView>
       {/* Header */}
      <MovieHeader
        originalTitle= {movie!.originalTitle}
        poster={movie!.poster}
      />

       {/* Details */}
      <MovieDetails
        movie={movie!}
        cast={cast!}
      />
    </ScrollView>
  );
};

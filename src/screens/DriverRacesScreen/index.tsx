import React, {useCallback, useRef, useState} from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';

import {useRoute} from '@react-navigation/native';

import SingleRace from './SingleRace';
import {AppLoader, AppError, PageControls, AppText} from '@components';

import {Race} from '@store/features/api/types';
import {getErrorMessage} from '@utils/getErrorMessage';
import {MainStackRouteGenericProp} from '@navigation/types';
import {useGetRacesByDriverIdQuery} from '@store/features/api/apiSlice';

import styles from './styles';

const fetchLimit = 20;

const DriverRacesScreen: React.FC = () => {
  const {
    params: {driverId},
  } = useRoute<MainStackRouteGenericProp<'DriverRaces'>>();

  const [racesOffset, setRacesOffset] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const {
    data: raceData,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetRacesByDriverIdQuery({
    limit: fetchLimit,
    offset: racesOffset,
    driverId,
  });

  const onPrevPress = () => setRacesOffset(prev => prev - fetchLimit);
  const onNextPress = () => {
    setRacesOffset(prev => prev + fetchLimit);

    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  const renderRaces = useCallback(({item}: ListRenderItemInfo<Race>) => {
    return <SingleRace race={item} />;
  }, []);

  if (isLoading) return <AppLoader fullScreen />;
  if (error || !raceData)
    return <AppError retry={refetch} errorText={getErrorMessage(error)} />;

  return (
    <View style={styles.container}>
      {!isFetching ? (
        <FlatList
          ref={flatListRef}
          data={raceData.MRData.RaceTable.Races}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.url}
          renderItem={renderRaces}
          ListEmptyComponent={() => (
            <AppText fontSize="ExtraLarge">No Data Found</AppText>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      ) : (
        <AppLoader fullScreen />
      )}

      <PageControls
        showPrev={!!racesOffset}
        showNext={racesOffset <= +raceData.MRData.total - fetchLimit}
        {...{onPrevPress, onNextPress}}
      />
    </View>
  );
};

export default DriverRacesScreen;

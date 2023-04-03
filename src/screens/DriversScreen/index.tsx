import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  View,
} from 'react-native';

import SingleDriver from './SingleDriver';
import {AppLoader, AppError, AppText} from '@components';

import {ColorEnum} from '@theme/colors';
import {Driver} from '@store/features/api/types';
import {getErrorMessage} from '@utils/getErrorMessage';
import {useAppDispatch} from '@utils/reduxHelper';
import {useGetDriversQuery} from '@store/features/api/apiSlice';
import {addDrivers} from '@store/features/drivers/driversSlice';

import styles from './styles';

const fetchLimit = 20;

const DriversScreen: React.FC = () => {
  const [driversOffset, setDriversOffset] = useState(0);

  const dispatch = useAppDispatch();

  const {
    data: fetchedDriversData,
    isLoading,
    refetch,
    error,
  } = useGetDriversQuery({
    limit: fetchLimit,
    offset: driversOffset,
  });

  const maxOffset = useRef(0);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Dispatch only when new drivers are fetched
    if (fetchedDriversData && driversOffset >= maxOffset.current) {
      dispatch(addDrivers(fetchedDriversData.MRData.DriverTable.Drivers));
    }
  }, [fetchedDriversData, dispatch]);

  const onPrevPress = () => setDriversOffset(prev => prev - fetchLimit);
  const onNextPress = () => {
    if (driversOffset + 20 > maxOffset.current) {
      maxOffset.current += fetchLimit;
    }

    setDriversOffset(prev => prev + fetchLimit);

    flatListRef.current?.scrollToOffset({animated: true, offset: 0});
  };

  const renderDrivers = useCallback(
    ({item}: ListRenderItemInfo<Driver>) => <SingleDriver driver={item} />,
    [],
  );

  if (isLoading) return <AppLoader fullScreen />;
  if (error || !fetchedDriversData)
    return <AppError retry={refetch} errorText={getErrorMessage(error)} />;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={fetchedDriversData.MRData.DriverTable.Drivers}
        showsVerticalScrollIndicator={false}
        renderItem={renderDrivers}
        keyExtractor={item => item.driverId}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <View style={styles.buttonContainer}>
        {driversOffset ? (
          <TouchableOpacity onPress={onPrevPress}>
            <AppText fontSize="LargePlus" color={ColorEnum.Gray}>
              {`< Prev`}
            </AppText>
          </TouchableOpacity>
        ) : null}

        {driversOffset <= +fetchedDriversData.MRData.total - fetchLimit ? (
          <TouchableOpacity onPress={onNextPress}>
            <AppText fontSize="LargePlus" color={ColorEnum.Gray}>
              {`Next >`}
            </AppText>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default DriversScreen;

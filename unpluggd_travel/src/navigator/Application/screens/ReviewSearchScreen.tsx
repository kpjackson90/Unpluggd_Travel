import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Input } from '@rneui/themed';
import { Header, Separator, ReviewSearchModal } from '../../../components';
import { FilterIcon, SearchIcon } from '../../../icons';

export const ReviewSearchScreen = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <SafeAreaView>
      <Header title='Search Reviews' />
      <View>
        <Input
          placeholder='Search reviews'
          style={{ fontSize: 16, fontWeight: '800', lineHeight: 20.8 }}
          placeholderTextColor={'#B6B6B6'}
          rightIcon={
            <TouchableOpacity onPress={() => setShowFilterModal(true)}>
              <FilterIcon />
            </TouchableOpacity>
          }
          leftIcon={<SearchIcon color={'#B6B6B6'} />}
        />

        <Separator height={100} />

        <Image
          source={require('../../../../assets/RadarAnimation.png')}
          style={{ height: 362, width: 362 }}
        />
      </View>
      {showFilterModal && (
        <ReviewSearchModal
          modalVisible={showFilterModal}
          setModalVisible={setShowFilterModal}
        />
      )}
    </SafeAreaView>
  );
};

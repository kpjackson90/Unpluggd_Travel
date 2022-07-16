import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { StarIcon } from '../../icons';
import { Separator } from './Separator';

export const SmallImageCard = () => {
  return (
    <View style={{ margin: 20 }}>
      <Text>Enjoy best cuisines</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Recommended places to eat</Text>
        <Text>See all</Text>
      </View>

      <Separator height={20} />

      <View>
        <Image
          source={require('../../../assets/asia.jpg')}
          style={{ width: 294, height: 220, borderRadius: 12 }}
        />
        <Text>Sesimbra e Arr</Text>
        <Text>Sesimbra, Lisbon</Text>

        <View style={{ flexDirection: 'row' }}>
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <Text>4.7 (59,000 review)</Text>
          <TouchableOpacity
            style={{
              height: 29,
              width: 66,
              borderRadius: 24,
              backgroundColor: '#CBE1FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Open</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

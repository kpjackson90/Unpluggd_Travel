import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { StarIcon } from '../../icons';
import { Separator } from './Separator';
import { Screens, useAppNavigation } from '../../navigator/screen';

export const SmallImageCard = () => {
  const navigation = useAppNavigation();
  return (
    <View>
      <Text
        style={{
          fontWeight: '800',
          fontSize: 24,
          lineHeight: 26.11,
          color: '#212529',
          marginBottom: 8,
        }}
      >
        Enjoy best cuisines
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 27.2 }}>
          Recommended places to eat
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.DestinationRestaurant)}
        >
          <Text>See all</Text>
        </TouchableOpacity>
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

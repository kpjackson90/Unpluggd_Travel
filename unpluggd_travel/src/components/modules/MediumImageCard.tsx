import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { StarIcon } from '../../icons';
import { Separator } from './Separator';
import { Screens, useAppNavigation } from '../../navigator/screen';

export const MediumImageCard = () => {
  const navigation = useAppNavigation();
  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontWeight: '800', fontSize: 24, lineHeight: 26.11 }}>
        Top Activities
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Activities for every type of traveler</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Screens.DestinationActivity)}
        >
          <Text>See all</Text>
        </TouchableOpacity>
      </View>

      <Separator height={20} />
      <View>
        <Image
          source={require('../../../assets/asia.jpg')}
          style={{ width: 366, height: 183.57, borderRadius: 12 }}
        />
        <Text>Full-Day Ranch Adventure</Text>
        <View style={{ flexDirection: 'row' }}>
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <StarIcon color={'#444444'} />
          <Text>4.7 (59,000 review)</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ alignSelf: 'center' }}>$120 per person</Text>
          <TouchableOpacity
            style={{
              height: 36,
              width: 121,
              borderRadius: 8,
              backgroundColor: '#3081ED',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#FFFFFF' }}>Attend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { StarIcon } from '../../icons';
import { Separator } from './Separator';

export const LongImageCard = () => {
  return (
    <ImageBackground
      source={require('../../../assets/asia.jpg')}
      imageStyle={{ borderRadius: 24, marginLeft: 20 }}
      style={{ width: 295, height: 438 }}
    >
      <View
        style={{
          height: 29,
          width: 86,
          backgroundColor: '#3081ED',
          borderRadius: 24,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-end',
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 13,
            color: '#FFFFFF',
          }}
        >
          Top rated
        </Text>
      </View>
      <Separator height={'70%'} />
      <View style={{ marginLeft: 35 }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 20,
            lineHeight: 21.76,
            color: '#FFFFFF',
          }}
        >
          Sesimbra Arrabida
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            lineHeight: 23.8,
            color: '#FFFFFF',
          }}
        >
          Portugal there so much more to discover.
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 23.8,
              marginLeft: 10,
            }}
          >
            4.7 (59,000 reviews)
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

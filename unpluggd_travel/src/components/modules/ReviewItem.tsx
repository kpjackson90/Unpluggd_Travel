import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DotIcon } from '../../icons';

export const ReviewItem = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <View
          style={{
            height: 48,
            width: 48,
            borderRadius: 100,
            backgroundColor: 'blue',
          }}
        />

        <View style={{ justifyContent: 'center', marginLeft: 10 }}>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 23.8,
              color: '#444444',
            }}
          >
            Keith
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 12,
              lineHeight: 13.06,
              color: '#B6B6B6',
            }}
          >
            7 months ago
          </Text>
        </View>

        <View style={{ marginLeft: '50%' }}>
          <TouchableOpacity>
            <DotIcon />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 23.8,
            color: '#444444',
            width: 345,
          }}
        >
          Lorem ipsum dolor sit amet, consec adipiscin elit, ipsum dolor sit
          amet, consec adipiscing.Lorem ipsum dolor sit amet, consec adipiscin
          elit
        </Text>
      </View>
    </View>
  );
};

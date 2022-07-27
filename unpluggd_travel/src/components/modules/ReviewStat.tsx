import React from 'react';
import { View, Text } from 'react-native';
import { Separator } from './Separator';

interface ReviewProps {
  title: string;
}

export const ReviewStat: React.FC<ReviewProps> = ({ title }) => {
  return (
    <View style={{ flexDirection: 'row', marginLeft: 20, marginBottom: 20 }}>
      <View>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 18,
            lineHeight: 22.59,
            color: '#444444',
          }}
        >
          {title}
        </Text>
      </View>

      <Separator width={60} />

      <View
        style={{
          height: 4,
          width: 139,
          borderRadius: 100,
          backgroundColor: '#444444',
          alignSelf: 'center',
        }}
      />
      <View>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 16,
            lineHeight: 20.8,
            color: '#444444',
            marginLeft: 15,
          }}
        >
          20
        </Text>
      </View>
    </View>
  );
};

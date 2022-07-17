import React from 'react';
import { View, Text } from 'react-native';
import { Separator } from './Separator';

export const DiscoverTemplate3 = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFEEE1',
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <View style={{ margin: 20 }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 24,
            lineHeight: 26.11,
            color: '#212529',
          }}
        >
          Discover and Mint
        </Text>
        <Text>Mint more than 5,000 souvenirs in San Miguel</Text>
        <Separator height={30} />
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'black',
              height: 367,
              width: 216,
              borderTopRightRadius: 24,
            }}
          >
            <View
              style={{
                borderWidth: 1.66,
                borderColor: '#FFFFFF',
                height: 331,
                width: 190,
                borderTopRightRadius: 24,
                alignSelf: 'center',
                marginTop: 15,
              }}
            />
          </View>
          <View>
            <View
              style={{
                borderWidth: 1.66,
                borderColor: 'black',
                height: 246.22,
                width: 130,
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 24,
                marginLeft: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: 'black',
                  height: 232,
                  width: 115,
                  borderTopLeftRadius: 24,
                  borderBottomRightRadius: 24,
                  alignSelf: 'center',
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: 'black',
                height: 100,
                width: 100,
                borderRadius: 50,
                alignSelf: 'center',
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

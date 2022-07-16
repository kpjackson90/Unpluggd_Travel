import React from 'react';
import { View, Text } from 'react-native';
import { Separator } from './Separator';
import { EthereumIcon } from '../../icons';

export const DiscoverTemplate = () => {
  return (
    <View style={{ backgroundColor: '#FFF8F0' }}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          paddingTop: 30,
          paddingBottom: 50,
        }}
      >
        <Text
          style={{
            fontWeight: '800',
            fontSize: 24,
            lineHeight: 26.11,
          }}
        >
          Discover and Mint
        </Text>
        <Text>Mint more than 5,000 souvenirs in San Miguel</Text>
        <Separator height={20} />

        <View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: 'blue',
                height: 240,
                width: 200,
                borderTopRightRadius: 24,
              }}
            >
              <View
                style={{
                  borderWidth: 1.66,
                  height: 220,
                  width: 175,
                  borderColor: '#FFFFFF',
                  borderTopRightRadius: 20,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>
            <Separator width={15} />
            <View
              style={{
                borderWidth: 1.66,
                height: 240,
                width: 136.42,
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 24,
                borderColor: '#93C5FD',
              }}
            >
              <View
                style={{
                  backgroundColor: '#2598EB',
                  height: 226,
                  width: 123,
                  borderBottomRightRadius: 24,
                  borderTopLeftRadius: 24,
                  marginLeft: 5,
                  marginTop: 5,
                }}
              />
            </View>
          </View>
          <Separator height={15} />
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: '#2563EB',
                height: 107.47,
                width: 200,
                borderBottomRightRadius: 83.1818,
              }}
            />
            <Separator width={30} />
            <View
              style={{
                backgroundColor: 'blue',
                height: 100,
                width: 100,
                borderRadius: 100,
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              height: 86,
              width: 286,
              backgroundColor: 'black',
              borderTopRightRadius: 1663,
              borderBottomRightRadius: 1663,
              justifyContent: 'center',
              paddingLeft: 20,
              marginTop: 30,
              marginLeft: 30,
              //opacity: 0.2,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginRight: 15,
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                    lineHeight: 20,
                    color: '#F8F8F8',
                    marginTop: 10,
                  }}
                >
                  Souvenirs worth
                </Text>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 18,
                    lineHeight: 22.59,
                    color: '#FFFFFF',
                  }}
                >
                  12.01663 ETH
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'blue',
                  height: 65,
                  width: 65,
                  borderRadius: 65,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <EthereumIcon />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

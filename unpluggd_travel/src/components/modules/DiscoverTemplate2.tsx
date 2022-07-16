import React from 'react';
import { Text, View } from 'react-native';
import { Separator } from './Separator';
import { EthereumIcon } from '../../icons';

export const DiscoverTemplate2 = () => {
    return (
        <View style={{ backgroundColor: '#F1FFF6', paddingTop: 50, paddingBottom: 50}}>
        <View style={{ margin: 20}}>
        <Text>Eat and Mint</Text>
        <Text>Mint more than 1,200 souvenirs in San Miguel Restaurants</Text>

        <Separator height={50}/>
       
        <View style={{ borderWidth: 2, borderColor: '#AEBCB4', height: 370, width: 310, borderBottomRightRadius: 120, borderBottomLeftRadius: 24, marginLeft: 10}}/>
        <View style={{ backgroundColor: '#D9D9D9', height: 384.7, width: 300, borderBottomRightRadius: 120, borderBottomLeftRadius: 24, position: 'absolute', marginTop: 50}}>
        <View style={{ borderWidth: 2, borderColor:'#FFFFFF', height: 352, width: 260, borderBottomRightRadius: 120, borderBottomLeftRadius: 24, alignSelf: 'center', marginTop: 15  }}/>
        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: 'blue', marginLeft: 240, marginTop: -40}}/>
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
      marginTop: 130,
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
    )
}
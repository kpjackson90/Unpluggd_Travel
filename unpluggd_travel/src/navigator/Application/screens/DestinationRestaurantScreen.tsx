import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Separator, CategoryItem, SmallImageCard, DiscoverTemplate2 } from '../../../components';
import { EthereumIcon } from '../../../icons';

export const DestinationRestaurantScreen = () => {
    const food = ['Mexican', 'American', 'International', 'Caribbean']
    return (
        <SafeAreaView>
            <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ margin: 20}}>
            <Text style={{ fontWeight: '800', fontSize: 24, lineHeight: 26.11, color: '#212529'}}>Cuisine</Text>

            <Separator height={15}/>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {food.map((item, i) => {
                    return(
                      <CategoryItem title={item} key={i}/>
                    )
                })}
            </ScrollView>
            <Separator height={45}/>
            <SmallImageCard />
            </View>
            <DiscoverTemplate2 />
            <Separator height={50}/>
            <View style={{ margin: 20}}>
            <SmallImageCard />
            <Separator height={50}/>
            <SmallImageCard />
            </View>
            <Separator height={50}/>
            <View style={{ backgroundColor: '#FFF8E9', paddingTop: 50, paddingBottom: 50}}>
                <View style={{ margin: 20}}>
                <Text>Sweet Mint</Text>
                <Text>Mint more than 1,200 souvenir in San Miguel Restaurants</Text>
                <Separator height={50} />
                <View style={{ borderWidth: 2, borderColor: '#C39436', height: 375, width: 274, borderBottomLeftRadius: 140, borderBottomRightRadius: 140, alignSelf: 'center', marginLeft: 60}}/>
                <View style={{ backgroundColor: '#D9D9D9', height: 384.7, width: 300, borderBottomLeftRadius: 140, borderBottomRightRadius: 140, alignSelf: 'center', position: 'absolute', marginTop: 60 }}>
                    <View style={{ borderWidth: 2, borderColor: '#FFFFFF', height: 352.1, width: 260, borderBottomLeftRadius: 140, borderBottomRightRadius: 140, alignSelf: 'center', marginTop: 20}}/>
                  </View>  
                  <View
    style={{
      position: 'absolute',
      height: 86,
      width: 280,
      backgroundColor: 'black',
      borderTopRightRadius: 1663,
      borderBottomRightRadius: 1663,
      justifyContent: 'center',
      paddingLeft: 20,
      marginTop: 185,
      marginLeft: 65,
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
        </ScrollView>
        </SafeAreaView>
    )
}
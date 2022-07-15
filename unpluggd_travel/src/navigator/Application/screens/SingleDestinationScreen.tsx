import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import { Header, LongImageCard, Separator } from '../../../components';
import { CloudIcon, LocationIcon } from '../../../icons';

export const SingleDestinationScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Image
          source={require('../../../../assets/asia.jpg')}
          style={{
            width: 366,
            height: 234,
            borderRadius: 24,
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontWeight: '800',
            fontSize: 24,
            lineHeight: 26.11,
            color: '#212529',
            marginLeft: 10,
            marginTop: 20,
          }}
        >
          San Miguel
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <LocationIcon />
            <Text>San Miguel, Italy</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <CloudIcon />
            <Text>30 C</Text>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, lineHeight: 27.2, fontWeight: '400' }}>
            Lorem ipsum dolor sit amet, consec adipiscin elit, ipsum dolor sit
            amet, consec adipiscing.Lorem ipsum dolor sit amet, consec
            adipiscin.
          </Text>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            Scroll Bar Here
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text>Recommended Hotels</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text>Top picks of places you can stay</Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 18.2,
                color: '#3081ED',
              }}
            >
              See all
            </Text>
          </View>
        </View>
        <LongImageCard />
        <Separator height={80} />
        <View style={{ backgroundColor: '#FFF8F0' }}>
          <Text
            style={{
              paddingTop: 30,
              fontWeight: '800',
              fontSize: 24,
              lineHeight: 26.11,
            }}
          >
            Discover and Mint
          </Text>
        </View>
        <Separator height={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

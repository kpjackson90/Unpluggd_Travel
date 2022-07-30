import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Separator } from '../../../components';
import { UserIcon, LocationMarkerIcon } from '../../../icons';
import { useAppNavigation, Screens } from '../../screen';
import styled from '@emotion/native';

export const HomeScreen = () => {
  const navigation = useAppNavigation();
  const categories = [
    {
      icon: 'icon',
      name: 'Hotel',
    },
    {
      icon: 'icon',
      name: 'Restaurant',
    },
    {
      icon: 'icon',
      name: 'Gym',
    },
  ];

  const places = [
    {
      image: '../../../../assets/asia.jpg',
      caption: 'Tumpak Sewu, Indonesia',
      tag: 'waterfall',
    },
    {
      image: '../../../../assets/asia.jpg',
      caption: 'Tumpak Sewu, Indonesia',
      tag: 'waterfall',
    },
  ];

  const recommended = [
    {
      image: '../../../../assets/asia.jpg',
      caption: 'Tumpak Sewu, Indonesia',
      tag: 'waterfall',
    },
    {
      image: '../../../../assets/asia.jpg',
      caption: 'Tumpak Sewu, Indonesia',
      tag: 'waterfall',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={{ marginRight: 10, marginLeft: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <LocationMarkerIcon />
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 23.8,
                  color: '#1E1E1E',
                }}
              >
                Landungsari, Malang
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#EAEEFD',
                height: 60,
                width: 60,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <UserIcon />
            </View>
          </View>
          <Separator height={40} />
          <ScrollView style={{ flexDirection: 'row' }} horizontal>
            {categories &&
              categories.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      backgroundColor: '#F3F3F3',
                      height: 48,
                      width: 100,
                      borderRadius: 30,
                      marginRight: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
          <Separator height={40} />
          <View>
            <View>
              <HeaderText>Top Destination</HeaderText>
              <Separator height={10} />
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 23.8,
                  color: '#444444',
                }}
              >
                Plan your next trip by selecting one of out top destination
              </Text>
              <Separator height={30} />
              <TouchableOpacity
                onPress={() => navigation.navigate(Screens.SingleDestination)}
              >
                <ImageBackground
                  source={require('../../../../assets/asia.jpg')}
                  imageStyle={{ borderRadius: 24 }}
                  style={{
                    width: 366,
                    height: 234,
                    justifyContent: 'flex-end',
                  }}
                >
                  <View style={{ margin: 20 }}>
                    <Text
                      style={{
                        fontWeight: '800',
                        fontSize: 20,
                        lineHeight: 21.76,
                        color: '#FFFFFF',
                      }}
                    >
                      SAN MIGUEL
                    </Text>
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 16,
                        lineHeight: 27.2,
                        color: '#FFFFFF',
                      }}
                    >
                      Fusce hic augue velit wisi ips quibusdam
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <Separator height={30} />
            <View>
              <HeaderText>Popular Places</HeaderText>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 23.8,
                  color: '#444444',
                }}
              >
                Top picks of places you can visit
              </Text>
              <Separator height={20} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {places &&
                  places.map((item, index) => {
                    return (
                      <View key={index} style={{ marginRight: 10 }}>
                        <ImageBackground
                          key={index}
                          source={require('../../../../assets/asia.jpg')}
                          imageStyle={{ borderRadius: 24 }}
                          style={{
                            height: 232,
                            width: 290,
                            justifyContent: 'flex-end',
                          }}
                        >
                          <View style={{ margin: 20 }}>
                            <Text
                              style={{
                                fontWeight: '800',
                                fontSize: 20,
                                lineHeight: 21.76,
                                color: 'white',
                              }}
                            >
                              {item?.caption}
                            </Text>
                          </View>
                        </ImageBackground>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
            <Separator height={30} />
            <View>
              <Text
                style={{ fontWeight: '800', fontSize: 20, lineHeight: 21.76 }}
              >
                Experiences Around You
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 23.8,
                  color: '#444444',
                }}
              >
                Top picks of events around you
              </Text>
              <Separator height={10} />
              <Image
                source={require('../../../../assets/asia.jpg')}
                style={{
                  width: 366,
                  height: 184,
                  justifyContent: 'flex-end',
                  borderRadius: 12,
                }}
              />
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 24,
                  lineHeight: 26.11,
                  marginTop: 25,
                }}
              >
                Trip To Greece
              </Text>
              <Separator height={5} />
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 23.8,
                  color: '#84829A',
                }}
              >
                14-29 June | by Robbin Joseph
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 23.8,
                    color: '#84829A',
                  }}
                >
                  24 people going
                </Text>
                <TouchableOpacity
                  style={{
                    height: 36,
                    width: 121,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3081ED',
                  }}
                >
                  <Text style={{ color: '#FFFFFF' }}>Attend</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Separator height={50} />
            <View>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 20,
                  lineHeight: 21.76,
                  color: '#212529',
                }}
              >
                Recommended places
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  lineHeight: 27.2,
                  color: '#444444',
                }}
              >
                Top picks of places you can visit
              </Text>
              <Separator height={15} />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {recommended &&
                  recommended.map((item, index) => {
                    return (
                      <View>
                        <ImageBackground
                          key={index}
                          source={require('../../../../assets/asia.jpg')}
                          imageStyle={{ borderRadius: 24 }}
                          style={{ height: 464, width: 300, marginRight: 15 }}
                        ></ImageBackground>
                      </View>
                    );
                  })}
              </ScrollView>
              <Separator height={25} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderText = styled.Text(() => ({
  fontWeight: '800',
  fontSize: 20,
  lineHeight: 21.76,
  fontFamily: 'Archivo',
  fontStyle: 'normal',
}));

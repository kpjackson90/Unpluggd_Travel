import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Header, Separator } from '../../../components';
import { StarIcon } from '../../../icons';

export const SingleEventScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Image
            source={require('../../../../assets/asia.jpg')}
            style={{
              width: '100%',
              height: 234,
              borderRadius: 24,
              alignSelf: 'center',
            }}
          />
          <Text>Sesimbra e Arrabida Restaurant</Text>
          <Text>Visit Website | Address of Place</Text>
          <View style={{ flexDirection: 'row' }}>
            <StarIcon color={'#444444'} />
            <StarIcon color={'#444444'} />
            <StarIcon color={'#444444'} />
            <StarIcon color={'#444444'} />
            <StarIcon color={'#444444'} />
            <Text>4.7 (50,000 review)</Text>
            <TouchableOpacity>
              <Text>Open</Text>
            </TouchableOpacity>
          </View>
          <Separator height={20} />
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consec adipiscin elit, ipsum dolor sit
              amet, consec adipiscing.Lorem ipsum dolor sit amet, consec
              adipiscin.
            </Text>
          </View>
          <Separator height={20} />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                height: 60,
                width: 96,
                backgroundColor: '#444444',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: 'white' }}>Call</Text>
            </TouchableOpacity>
            <Separator width={10} />
            <TouchableOpacity
              style={{
                height: 60,
                width: 'auto',
                paddingRight: 20,
                paddingLeft: 20,
                borderRadius: 12,
                backgroundColor: '#3081ED',
                justifyContent: 'center',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white' }}>$230 per night</Text>
                <Separator width={30} />
                <Text style={{ color: 'white' }}>Book Now</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Separator height={30} />
          <View>
            <Text>What this place offers</Text>
            <Separator height={20} />
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: '#F8F8F8',
                }}
              />
              <Separator width={12} />
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: '#F8F8F8',
                }}
              />
              <Separator width={12} />
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: '#F8F8F8',
                }}
              />
              <Separator width={12} />
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: '#F8F8F8',
                }}
              />
              <Separator width={12} />
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 10,
                  backgroundColor: '#F8F8F8',
                }}
              />
            </View>

            <Separator height={40} />

            <View>
              <Text>Contribute</Text>
              <Separator height={20} />
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 'auto',
                    paddingRight: 20,
                    paddingLeft: 20,
                    borderWidth: 1,
                    borderColor: '#3081ED',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      color: '#3081ED',
                      fontWeight: '500',
                      fontSize: 18,
                      lineHeight: 19,
                    }}
                  >
                    Upload Picture
                  </Text>
                </TouchableOpacity>

                <Separator width={10} />
                <TouchableOpacity
                  style={{
                    height: 60,
                    width: 'auto',
                    paddingRight: 30,
                    paddingLeft: 30,
                    borderWidth: 1,
                    borderColor: '#3081ED',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                  }}
                >
                  <Text
                    style={{
                      color: '#3081ED',
                      fontWeight: '500',
                      fontSize: 18,
                      lineHeight: 19,
                    }}
                  >
                    Write Review
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Separator height={40} />

            <View style={{ flexDirection: 'row' }}>
              <StarIcon color={'#FFCE31'} />
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  lineHeight: 20.8,
                  color: '#444444',
                }}
              >
                4.59 68 reviews
              </Text>
            </View>

            <Separator height={40} />

            <View>
              <Text>Textbox here</Text>
            </View>
          </View>
        </View>
        <Separator height={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

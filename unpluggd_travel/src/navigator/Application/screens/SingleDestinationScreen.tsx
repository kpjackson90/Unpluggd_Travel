import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {
  Header,
  LongImageCard,
  Separator,
  DiscoverTemplate,
  SmallImageCard,
  MediumImageCard,
} from '../../../components';
import { CloudIcon, LocationIcon } from '../../../icons';
import { Screens, useAppNavigation } from '../../screen';

export const SingleDestinationScreen = () => {
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20}}>
        <Image
          source={require('../../../../assets/asia.jpg')}
          style={{
            width: '100%',
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
            marginTop: 20,
          }}
        >
          San Miguel
        </Text>

        <Separator height={10} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <LocationIcon />
            <Text style={{ marginLeft: 5, justifyContent: 'center'}}>San Miguel, Italy</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <CloudIcon />
            <Text>30 C</Text>
          </View>
        </View>

        <Separator height={10} />

        <View>
          <Text style={{ fontSize: 16, lineHeight: 27.2, fontWeight: '400' }}>
            Lorem ipsum dolor sit amet, consec adipiscin elit, ipsum dolor sit
            amet, consec adipiscing.Lorem ipsum dolor sit amet, consec
            adipiscin.
          </Text>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            Scroll Bar Here
          </Text>
        </View>
        </View>


        <LongImageCard />

        <Separator height={80} />
        <DiscoverTemplate />

        <Separator height={30} />

        <SmallImageCard />

        <MediumImageCard />

        <Separator height={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

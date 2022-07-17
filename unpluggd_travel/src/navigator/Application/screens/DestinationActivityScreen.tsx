import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import {
  Header,
  Separator,
  CategoryItem,
  LongImageCard,
  MediumImageCard,
  SmallImageCard,
  DiscoverTemplate3,
} from '../../../components';

export const DestinationActivityScreen = () => {
  const activities = ['Games', 'Tours', 'Day Trip', 'Private Tours'];
  return (
    <SafeAreaView>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 20 }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: 24,
              lineHeight: 26.11,
              color: '#212529',
            }}
          >
            Activities
          </Text>

          <Separator height={15} />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {activities.map((item, i) => {
              return <CategoryItem title={item} key={i} />;
            })}
          </ScrollView>
          <Separator height={45} />
        </View>
        <LongImageCard />
        <Separator height={45} />
        <MediumImageCard />
        <DiscoverTemplate3 />
        <Separator height={45} />
        <MediumImageCard />
        <Separator height={45} />
        <DiscoverTemplate3 />
        <Separator height={100} />
      </ScrollView>
    </SafeAreaView>
  );
};

import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import {
  Header,
  Separator,
  ReviewStat,
  ReviewItem,
  ReviewModal,
  ReviewSearchModal,
} from '../../../components';
import { Screens, useAppNavigation } from '../../screen';
import { StarIcon } from '../../../icons';

export const ReviewScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const navigation = useAppNavigation();
  return (
    <SafeAreaView>
      <Header
        title='Reviews'
        search={true}
        add={true}
        onPressRight={() => setShowModal(true)}
        onPressLeft={() => navigation.navigate(Screens.ReviewSearch)}
      />
      <ScrollView
        style={{ backgroundColor: '#F8F8F8', height: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: 'white',
            height: 331,
            width: 366,
            borderRadius: 12,
            alignSelf: 'center',
            marginTop: 40,
          }}
        >
          <View style={{ flexDirection: 'row', margin: 20 }}>
            <View style={{ justifyContent: 'center' }}>
              <StarIcon color='#444444' />
            </View>

            <Separator width={10} />

            <View>
              <Text
                style={{
                  fontWeight: '800',
                  fontSize: 24,
                  lineHeight: 26.11,
                  color: '#444444',
                }}
              >
                4.59{' '}
              </Text>
            </View>

            <Separator width={8} />

            <View style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  lineHeight: 27.2,
                  color: '#444444',
                }}
              >
                68 reviews
              </Text>
            </View>
          </View>

          <Separator height={10} />

          <ReviewStat title='Excellent' />
          <ReviewStat title='Very good' />
          <ReviewStat title='Average' />
          <ReviewStat title='Poor' />
          <ReviewStat title='Terrible' />
        </View>

        <Separator height={30} />

        <ReviewItem />

        <Separator height={30} />

        <ReviewItem />

        <Separator height={30} />
        <ReviewItem />
        <Separator height={100} />
      </ScrollView>
      <ReviewModal modalVisible={showModal} setModalVisible={setShowModal} />
      <ReviewSearchModal
        modalVisible={showSearchModal}
        setModalVisible={setShowSearchModal}
      />
    </SafeAreaView>
  );
};

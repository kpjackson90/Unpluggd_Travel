import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LeftIcon, HeartIcon, ShareIcon } from '../../icons';
import { useAppNavigation } from '../../navigator/screen';

export const Header = () => {
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <LeftIcon />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.41,
          color: '#444444',
          fontWeight: '600',
          marginLeft: 40,
        }}
      >
        Top Destination
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <ShareIcon />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 20, marginTop: 2 }}>
          <HeartIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  LeftIcon,
  HeartIcon,
  ShareIcon,
  SearchIcon,
  PlusIcon,
} from '../../icons';
import { useAppNavigation } from '../../navigator/screen';

interface HeaderProps {
  title?: string;
  share?: boolean;
  search?: boolean;
  add?: boolean;
  like?: boolean;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  share,
  search,
  add,
  like,
  onPressLeft,
  onPressRight,
}) => {
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
        {title || 'Top Destination'}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={onPressLeft}>
          {share ? (
            <ShareIcon />
          ) : search ? (
            <SearchIcon color={'#444444'} />
          ) : (
            <View />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 20, marginTop: 2 }}
          onPress={onPressRight}
        >
          {like ? <HeartIcon /> : add ? <PlusIcon /> : <View />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

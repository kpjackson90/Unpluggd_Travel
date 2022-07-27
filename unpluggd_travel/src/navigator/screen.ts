import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

export enum Screens {
  Landing = 'Landing',
  Login = 'Login',
  Home = 'Home',
  Marketplace = 'Marketplace',
  Mint = 'Mint',
  Search = 'Search',
  Profile = 'Profile',
  Notification = 'Notification',
  SingleDestination = 'SingleDestination',
  DestinationRestaurant = 'DestinationRestaurant',
  DestinationActivity = 'DestinationActivity',
  SingleEvent = 'SingleEvent',
  Review = 'Review',
  ReviewSearch = 'ReviewSearch',
}

export type AppParamList = {
  [Screens.Landing]: undefined;
  [Screens.Login]: undefined;
  [Screens.Home]: undefined;
  [Screens.Marketplace]: undefined;
  [Screens.Mint]: undefined;
  [Screens.Search]: undefined;
  [Screens.Profile]: undefined;
  [Screens.Notification]: undefined;
  [Screens.SingleDestination]: undefined;
  [Screens.DestinationRestaurant]: undefined;
  [Screens.DestinationActivity]: undefined;
  [Screens.SingleEvent]: undefined;
  [Screens.Review]: undefined;
  [Screens.ReviewSearch]: undefined;
};

export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<AppParamList>>();

export const useAppRoute = <T extends Screens>() =>
  useRoute<RouteProp<AppParamList, T>>();

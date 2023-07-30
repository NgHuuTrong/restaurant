import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { RestaurantsContext } from '~/services/restaurants/restaurants.context';
import { Loading } from '~/components/utility/loading.component';
import { HomeScreen } from '~/features/home/screens/home/home.screen';
import { UsersContext } from '~/services/users/user.context';
import { Orders } from '~/features/orders/screens/orders.screen';
import { RewardNavigator } from './rewards.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  HomeScreen: 'home',
  RewardNavigator: 'gift',
  Orders: 'newspaper',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons name={`${iconName}${focused ? '' : '-outline'}`} size={30} color={color} />
    ),
    tabBarShowLabel: false,
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'black',
    tabBarStyle: {
      flexDirection: 'row',
      height: 60,
      backgroundColor: '#D17842',
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 10,
      border: 'none',
      borderRadius: 25,
      position: 'absolute',
      bottom: 10,
      left: 10,
      right: 10,
      paddingBottom: 0,
    },
    tabBarItemStyle: {
      height: '100%',
    },
  };
};

export const HomeTabs = () => {
  const ResContext = useContext(RestaurantsContext);
  const UserContext = useContext(UsersContext);
  return (
    <>
      {ResContext.isLoading || UserContext.isLoading ? (
        <Loading />
      ) : (
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Tab.Screen name="RewardNavigator" component={RewardNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
        </Tab.Navigator>
      )}
    </>
  );
};

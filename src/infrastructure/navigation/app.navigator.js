import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { HomeTabs } from './hometabs.navigator';
import { Detail } from '~/features/home/screens/detail/detail.screen';
import { MyCart } from '~/features/home/screens/mycart/mycart.screen';
import { Profile } from '~/features/home/screens/profile/profile.screen';
import { OrderSuccess } from '~/features/home/screens/OrderSuccess/order-success.screen';

const HomeStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeTabs} navigationKey="Home" options={{ headerShown: false }} />
        <HomeStack.Screen name="Detail" component={Detail} navigationKey="Detail" options={{ headerShown: false }} />
        <HomeStack.Screen name="MyCart" component={MyCart} navigationKey="MyCart" options={{ headerShown: false }} />
        <HomeStack.Screen name="Profile" component={Profile} navigationKey="Profile" options={{ headerShown: false }} />
        <HomeStack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          navigationKey="OrderSuccess"
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

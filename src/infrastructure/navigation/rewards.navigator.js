import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Rewards } from '~/features/rewards/screens/rewards.screen';
import { Redeem } from '~/features/rewards/screens/redeem.screen';

const RewardStack = createStackNavigator();

export const RewardNavigator = () => {
  return (
    <RewardStack.Navigator>
      <RewardStack.Screen name="Rewards" component={Rewards} navigationKey="Rewards" options={{ headerShown: false }} />
      <RewardStack.Screen name="Redeem" component={Redeem} navigationKey="Redeem" options={{ headerShown: false }} />
    </RewardStack.Navigator>
  );
};

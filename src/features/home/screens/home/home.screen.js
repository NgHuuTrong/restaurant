import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';

import { SafeArea } from '~/components/utility/safe-area.component';
import { RestaurantsContext } from '~/services/restaurants/restaurants.context';
import { Spacer } from '~/components/spacer/spacer.component';
import { HomeInfoCard } from '~/features/home/components/home-info-card/home-info-card.component';
import { UsersContext } from '~/services/users/user.context';

import { Hello, Icon, IconContainer, Name, ScreenTitle, SectionHead, TypeButton, TypeDrinkName } from './home.style';
import { useIsFocused } from '@react-navigation/native';
import { LoyaltyCard } from '~/features/components/loyalty-card/loyalty-card.component';

export const HomeScreen = ({ navigation }) => {
  const { restaurant } = useContext(RestaurantsContext);
  const [type, setType] = useState('coffee');
  let { user } = useContext(UsersContext);
  const isFocused = useIsFocused();

  return (
    <SafeArea>
      <ScreenTitle>NHT's Coffee House</ScreenTitle>
      <SectionHead>
        <View>
          <Hello>Welcome!</Hello>
          <Name>{isFocused && user.name}</Name>
        </View>
        <IconContainer>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart', { user, restaurant })}>
            <Icon name="cart-outline" />
          </TouchableOpacity>

          <Spacer position="left" size="medium" />
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
            <Icon name="person-outline" />
          </TouchableOpacity>
        </IconContainer>
      </SectionHead>

      <LoyaltyCard user={user} />

      <Spacer position="bottom" size="large">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Object.keys(restaurant)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setType(item)}>
                <Spacer position="left" size="medium">
                  <TypeButton active={item === type}>
                    <TypeDrinkName active={item === type}>{item.charAt(0).toUpperCase() + item.slice(1)}</TypeDrinkName>
                  </TypeButton>
                </Spacer>
              </TouchableOpacity>
            );
          }}
        />
      </Spacer>

      <View>
        <FlatList
          horizontal
          data={restaurant[type]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Spacer position="left" size="medium">
                <HomeInfoCard item={item} navigation={navigation} />
              </Spacer>
            );
          }}
        />
      </View>
    </SafeArea>
  );
};

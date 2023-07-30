import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components/native';

import { FlatList, TouchableOpacity } from 'react-native';
import { SafeArea } from '~/components/utility/safe-area.component';
import { View } from 'react-native';
import { RestaurantsContext } from '~/services/restaurants/restaurants.context';
import { Spacer } from '~/components/spacer/spacer.component';

const ScreenTitle = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.description};
  align-self: center;
`;

const RedeemCard = styled.View`
  background-color: ${(props) => props.theme.colors.ui.background};
  height: 108px;
  border-radius: 16px;
  margin: 12px 16px 16px 16px;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const PointLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Point = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

const RedeemButton = styled(TouchableOpacity)`
  padding: 8px;
  background-color: ${(props) => props.theme.colors.ui.secondary};
  border: 2px solid ${(props) => props.theme.colors.ui.primary};
  border-radius: 24px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

const HistoryRow = styled.View`
  background-color: ${(props) => props.theme.colors.ui.secondary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 36px;
`;

const NameLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.description};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const PrimaryLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const BlurLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.disabled};
  font-size: ${(props) => props.theme.fontSizes.button};
`;

const TypeButton = styled.View`
  padding: 12px 18px;
  background-color: ${(props) => (props.active ? props.theme.colors.ui.primary : props.theme.colors.ui.background)};
  border-radius: 16px;
`;

const TypeDrinkName = styled.Text`
  color: ${(props) => (props.active ? props.theme.colors.ui.background : props.theme.colors.text.primary)};
  font-family: ${(props) => props.theme.fonts.description};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Redeem = ({ navigation, route }) => {
  const { restaurant } = useContext(RestaurantsContext);
  const { user } = route.params;
  const [type, setType] = useState('coffee');
  const [point, setPoint] = useState(user.mypoints);
  useEffect(() => {
    setPoint(user.mypoints);
  }, [user.mypoints]);

  return (
    <SafeArea>
      <ScreenTitle>{'Redeem Drink'}</ScreenTitle>
      <RedeemCard>
        <PointLabel>My Points:</PointLabel>
        <Point>{point}</Point>
      </RedeemCard>

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

      <FlatList
        keyExtractor={(item) => item.id}
        data={restaurant[type]}
        contentContainerStyle={{ paddingBottom: 90 }}
        renderItem={({ item }) => {
          return (
            <HistoryRow>
              <View>
                <NameLabel>{item.name}</NameLabel>
                <BlurLabel>Size M | x1</BlurLabel>
              </View>
              <RedeemButton
                disabled={item.requiredPoint > user.mypoints}
                onPress={() => {
                  user.mypoints -= item.requiredPoint;
                  setPoint(user.mypoints);
                  user.myorders[0].list.push({
                    drinkID: item.id,
                    id: user.myorders[0].list.length + 1,
                    address: user.address,
                    name: item.name,
                    photo: item.photo,
                    ice: 70,
                    sugar: 70,
                    size: 2,
                    type: item.type,
                    price: 0,
                    quantity: 1,
                    point: 0,
                    requiredPoint: item.requiredPoint,
                  });
                  navigation.navigate('Orders');
                }}
              >
                <PrimaryLabel>{item.requiredPoint} Pts</PrimaryLabel>
              </RedeemButton>
            </HistoryRow>
          );
        }}
      />
    </SafeArea>
  );
};

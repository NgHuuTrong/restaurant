import React, { useContext, useEffect, useState } from 'react';
import { styled } from 'styled-components/native';

import { FlatList, TouchableOpacity } from 'react-native';
import { SafeArea } from '~/components/utility/safe-area.component';
import { UsersContext } from '~/services/users/user.context';
import { useIsFocused } from '@react-navigation/native';
import { LoyaltyCard } from '~/features/components/loyalty-card/loyalty-card.component';
import { View } from 'react-native';

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
  border-radius: 12px;
`;

const RedeemLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.button};
`;

const HistoryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 36px;
`;

const HistoryTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.body};
  margin: 24px;
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

export const Rewards = ({ navigation }) => {
  const { user } = useContext(UsersContext);
  const isFocused = useIsFocused();
  const [point, setPoint] = useState(user.mypoints);
  useEffect(() => {
    setPoint(user.mypoints);
  }, [user.mypoints]);

  return (
    <SafeArea>
      <ScreenTitle>{isFocused && 'Rewards'}</ScreenTitle>
      <LoyaltyCard user={user} setPoint={setPoint} />
      <RedeemCard>
        <View>
          <PointLabel>My Points:</PointLabel>
          <Point>{point}</Point>
        </View>
        <RedeemButton
          onPress={() => {
            navigation.navigate('Redeem', { user });
          }}
        >
          <RedeemLabel>Redeem drinks</RedeemLabel>
        </RedeemButton>
      </RedeemCard>
      <HistoryTitle>History Rewards</HistoryTitle>
      <FlatList
        keyExtractor={(item) => item.id}
        data={user.myorders[1].list}
        contentContainerStyle={{ paddingBottom: 90 }}
        renderItem={({ item }) => {
          return (
            <HistoryRow>
              <View>
                <NameLabel>{item.name}</NameLabel>
                <BlurLabel>{`Size ${item.size === 1 ? 'S' : item.size === 2 ? 'M' : 'L'} | x${
                  item.quantity
                }`}</BlurLabel>
              </View>
              <PrimaryLabel>{`+ ${item.point} Pts`}</PrimaryLabel>
            </HistoryRow>
          );
        }}
      />
    </SafeArea>
  );
};

import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { FlatList } from 'react-native';
import { MyCartInfoCard } from '~/features/home/components/mycart-info-card/mycart-info-card.component';
import { SafeArea } from '~/components/utility/safe-area.component';
import { Spacer } from '~/components/spacer/spacer.component';
import {
  CheckoutButton,
  CheckoutLabel,
  Container,
  LeftSection,
  PriceLabel,
  ScreenTitle,
  SectionEnd,
  TotalLabel,
} from './mycart.style';
import { StackActions } from '@react-navigation/native';

export const MyCart = ({ route, navigation }) => {
  const { user } = route.params;
  const [mycart, setMycart] = useState([...user.mycart]);

  let totalPrice = 0,
    totalPoint = 0,
    totalDrink = 0;
  mycart.forEach((ele) => (totalPrice += ele.price));
  mycart.forEach((ele) => (totalPoint += ele.point));
  mycart.forEach((ele) => (totalDrink += ele.quantity));

  let row = [];
  let prevOpenedRow;

  return (
    <SafeArea>
      <Container>
        <ScreenTitle>My Cart</ScreenTitle>

        <FlatList
          data={mycart}
          keyExtractor={(item) => item.id}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ paddingBottom: 90 }}
          renderItem={({ item, index }) => {
            return (
              <Spacer position="bottom" size="medium">
                <MyCartInfoCard
                  item={item}
                  index={index}
                  row={row}
                  prevOpenedRow={prevOpenedRow}
                  onDelete={() => {
                    user.mycart.splice(index, 1);
                    setMycart([...user.mycart]);
                  }}
                />
              </Spacer>
            );
          }}
        />

        <SectionEnd>
          <LeftSection>
            <TotalLabel>Total Price</TotalLabel>
            <PriceLabel>
              ${totalPrice} (+ {totalPoint} pts)
            </PriceLabel>
          </LeftSection>
          <CheckoutButton
            disabled={mycart.length === 0}
            onPress={() => {
              user.loyaltycard += totalDrink;
              const { length } = user.myorders[1].list;
              user.myorders[0].list.forEach((ele, index) => {
                user.myorders[1].list.push({ ...ele, id: length + index + 1 });
                user.mypoints += ele.point;
              });
              user.myorders[0].list = [];
              mycart.forEach((ele, index) => user.myorders[0].list.push({ ...ele, id: index + 1 }));
              user.mycart = [];
              setMycart([]);
              navigation.dispatch(StackActions.replace('OrderSuccess'));
            }}
          >
            <Feather name="shopping-cart" color="white" size={22} />
            <CheckoutLabel>Checkout</CheckoutLabel>
          </CheckoutButton>
        </SectionEnd>
      </Container>
    </SafeArea>
  );
};

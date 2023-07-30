import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { SafeArea } from '~/components/utility/safe-area.component';
import { Spacer } from '~/components/spacer/spacer.component';

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SuccessTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.body};
`;

const SuccessLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.disabled};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const OrderButton = styled(TouchableOpacity)`
  border-radius: 20px;
  width: 60%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: 10px;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.offwhite};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.body};
`;
const shipper = require('~/assets/animation/shipper.json');

export const OrderSuccess = ({ navigation }) => {
  const shipperAnimation = useRef();

  useEffect(() => {
    shipperAnimation.current?.reset();
    shipperAnimation.current?.play();
  }, [navigation]);

  return (
    <SafeArea>
      <Container>
        {/* <MaterialCommunityIcons name="bike-fast" color="#D17842" size={iconSize} /> */}
        <LottieView style={{ width: '90%' }} ref={shipperAnimation} source={shipper} loop resizeMode="cover" />
        <Spacer position="top" size="large" />
        <SuccessTitle>Order Success</SuccessTitle>
        <Spacer position="top" size="medium" />
        <SuccessLabel>Your order has been placed successfully</SuccessLabel>
        <SuccessLabel>For more detail, go to my orders.</SuccessLabel>
        <Spacer position="top" size="big" />
        <Spacer position="top" size="big" />
        <OrderButton
          onPress={() => {
            shipperAnimation.current?.reset();
            navigation.navigate('Orders');
          }}
        >
          <ButtonLabel>Track My Order</ButtonLabel>
        </OrderButton>
      </Container>
    </SafeArea>
  );
};

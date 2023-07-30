import React from 'react';
import { Dimensions } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  position: relative;
`;

const LoadingBackground = styled.Image`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LoadingWheel = styled(ActivityIndicator)`
  position: absolute;
  left: ${Dimensions.get('window').width / 2 - 20}px;
  top: ${Dimensions.get('window').height / 2}px;
  z-index: 10;
`;

export const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBackground source={require('~/assets/background.jpg')} />
      <LoadingWheel size={40} animating color={MD2Colors.red800} />
    </LoadingContainer>
  );
};

import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  padding: 12px;
`;

export const ScreenTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.description};
`;

export const SectionEnd = styled.View`
  position: absolute;
  bottom: 10px;
  left: 20px;
  right: 20px;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.ui.secondary};
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  padding: 10px;
`;

export const LeftSection = styled.View`
  align-items: center;
`;

export const CheckoutButton = styled(TouchableOpacity)`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ui.primary};
  align-items: center;
  border-radius: 30px;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
`;

export const TotalLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.description};
`;

export const PriceLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.palegold};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const CheckoutLabel = styled.Text`
  color: ${(props) => props.theme.colors.text.palegold};
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-left: 6px;
`;

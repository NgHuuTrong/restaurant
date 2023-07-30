import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const Wrapper = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.background};
  height: 122px;
  border-radius: 16px;
  margin: 0 36px 16px 36px;
  padding: 0 24px;
  position: relative;
  border: 2px solid ${(props) => (!props.disabled ? props.theme.colors.ui.primary : 'transparent')};
`;

export const Header = styled.View`
  flex-direction: row;
  padding: 16px 8px 0 8px;
  justify-content: space-between;
`;

export const CupContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: ${(props) => (props.upgrade ? 'center' : 'space-around')};
  align-items: center;
  margin: 10px 0;
  border-radius: 16px;
  padding: 0 10px;
`;

export const LoyaltyTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const CupImage = styled.Image`
  width: 48px;
  height: 36px;
  tint-color: ${(props) => props.tintColor};
`;

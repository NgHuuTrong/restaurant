import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const ScreenTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.description};
  align-self: center;
`;

export const SectionHead = styled.View`
  flex-direction: row;
  height: 100px;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.View`
  flex-direction: row;
`;

export const Hello = styled.Text`
  color: ${(props) => props.theme.colors.text.lightgray};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Icon = styled(Ionicons)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const TypeButton = styled.View`
  padding: 12px 18px;
  background-color: ${(props) => (props.active ? props.theme.colors.ui.primary : props.theme.colors.ui.background)};
  border-radius: 16px;
`;

export const TypeDrinkName = styled.Text`
  color: ${(props) => (props.active ? props.theme.colors.ui.background : props.theme.colors.text.primary)};
  font-family: ${(props) => props.theme.fonts.description};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

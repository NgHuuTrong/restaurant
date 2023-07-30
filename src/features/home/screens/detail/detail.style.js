import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const Container = styled(ScrollView)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.ui.secondary};
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const ScreenTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.description};
`;

export const ImageContainer = styled.View`
  height: ${Dimensions.get('window').height * 0.33}px;
  width: 100%;
  border-radius: 40px;
  overflow: hidden;
`;

export const DrinkImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fonts.description};
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h4};
  align-self: center;
`;

export const SectionInfo = styled.View`
  background-color: ${(props) => props.theme.colors.ui.background};
  width: 100%;
  padding: 24px 16px;
  border-radius: 24px;
  margin-bottom: 24px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rounded = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.colors.text.primary};
  padding: 3px 8px;
  border-radius: 100px;
`;

export const RatingInfo = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text.palegold};
`;

export const Description = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.description};
  color: ${(props) => props.theme.colors.text.palegold};
`;

export const InfoRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const InfoTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.description};
  color: ${(props) => props.theme.colors.text.palegold};
`;

export const LeftSection = styled.View`
  flex-direction: row;
  width: 70%;
  justify-content: ${(props) => (props.type === 'size' ? 'space-around' : 'center')};
  align-items: center;
`;

export const ChoiceView = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${(props) => (props.active ? '#d17842' : '#4f4f4f')};
  margin-left: 4px;
`;

export const ChoiceLabel = styled.Text`
  background-color: ${(props) => (props.active ? props.theme.colors.ui.primary : props.theme.colors.ui.background)};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.description};
  color: ${(props) => (props.active ? props.theme.colors.text.offwhite : props.theme.colors.text.disabled)};
  padding: 0 8px;
`;

export const CupImage = styled.Image`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  tint-color: ${(props) => props.tintColor};
`;

export const SectionEnd = styled.View`
  margin: 80px 0;
  padding: 24px;
`;

export const TotalPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalLabel = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.offwhite};
  padding: 0 12px;
`;

export const CartButton = styled(TouchableOpacity)`
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: 80%;
  padding: 10px;
  border-radius: 40px;
  align-items: center;
  align-self: center;
`;

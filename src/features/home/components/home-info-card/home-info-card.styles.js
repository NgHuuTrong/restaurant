import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const RestaurantCard = styled.View`
  background-color: ${(props) => props.theme.colors.ui.background};

  position: relative;
  height: 280px;
  width: ${Dimensions.get('window').width / 2 - 24}px;

  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  text-overflow: ellipsis;

  border-radius: 15px;

  padding: 10px 12px 0 12px;
  margin-top: 10px;
`;

export const Saleoff = styled.View`
  position: absolute;
  z-index: 100;
  left: -10px;
  top: -10px;
`;

export const NumDiscount = styled.Text`
  color: darkred;
  font-family: ${(props) => props.theme.fonts.name};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const BadgeCircle = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  width: 50px;
  height: 50px;
  border-radius: 100px;

  justify-content: center;
  align-items: center;
`;

export const Badge140 = styled.View`
  background-color: transparent;
  border-bottom-width: 35px;
  border-bottom-color: ${(props) => props.theme.colors.ui.primary};
  border-left-width: 20px;
  border-left-color: transparent;
  border-right-width: 20px;
  border-right-color: transparent;
  position: absolute;
  top: 30px;
  right: 5px;
  transform: rotate(100deg);
`;

export const BadgeNeg140 = styled.View`
  background-color: transparent;
  border-bottom-width: 35px;
  border-bottom-color: ${(props) => props.theme.colors.ui.primary};
  border-left-width: 20px;
  border-left-color: transparent;
  border-right-width: 20px;
  border-right-color: transparent;
  position: absolute;
  top: 30px;
  right: 5px;
  transform: rotate(-100deg);
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
`;

export const RestaurantCardCover = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Info = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[2]};
`;

export const Name = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.name};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Rating = styled.View`
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
  font-size: ${(props) => props.theme.fontSizes.caption};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.text.offwhite};
`;

export const Price = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const OriginalPrice = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  text-decoration-line: line-through;
  color: ${(props) => props.theme.colors.text.error};
  margin-right: ${(props) => props.theme.space[2]};
`;

export const ActualPrice = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
`;

export const AddButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: 6px;
  border-radius: 12px;
`;

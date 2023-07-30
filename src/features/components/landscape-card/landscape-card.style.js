import { Dimensions } from 'react-native';
import { styled } from 'styled-components/native';

export const MyCartCard = styled.View`
  background-color: ${(props) => props.theme.colors.ui.background};

  height: 130px;
  width: ${Dimensions.get('window').width - 32}px;

  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  text-overflow: ellipsis;

  border-radius: 15px;

  padding: 10px 12px;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const RestaurantCardCover = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

export const Price = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.View`
  flex: 5;
  height: 100%;
  align-items: flex-start;
  justify-content: space-around;
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[2]};
`;

export const Name = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.name};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const Features = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FeatureInfo = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.text.palegold};
`;

import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  MyCartCard,
  ImageContainer,
  RestaurantCardCover,
  Price,
  Info,
  Name,
  Features,
  FeatureInfo,
} from './landscape-card.style';
import { mockImages } from '~/services/restaurants/mock';
import { Spacer } from '~/components/spacer/spacer.component';

export const LandscapeCard = ({ item }) => {
  let image;
  if (mockImages[item.type]) {
    // eslint-disable-next-line prefer-destructuring
    image = mockImages[item.type].find((ele) => ele.name === item.photo).image;
  }

  return (
    <MyCartCard>
      <ImageContainer>
        <RestaurantCardCover source={image || require('~/assets/empty.jpg')} />
      </ImageContainer>
      <Info>
        <Name numberOfLines={1}>{item.name}</Name>

        <Spacer position="bottom" size="tiny">
          <Features>
            <FeatureInfo numberOfLines={1}>{`Size ${item.size === 1 ? 'S' : item.size === 2 ? 'M' : 'L'}, ${
              item.ice
            }% ice, ${item.sugar}% sugar`}</FeatureInfo>
          </Features>
        </Spacer>

        <FeatureInfo numberOfLines={1}>
          x{item.quantity} | (+ {item.point} pts)
        </FeatureInfo>

        <Features>
          <Ionicons name="location" color="#D8CBA5" size={14} />
          <FeatureInfo numberOfLines={1}>{item.address}</FeatureInfo>
        </Features>
      </Info>

      <Price>
        <FeatureInfo>${item.price}</FeatureInfo>
      </Price>
    </MyCartCard>
  );
};

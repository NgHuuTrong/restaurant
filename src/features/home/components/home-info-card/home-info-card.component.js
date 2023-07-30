import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  ActualPrice,
  ImageContainer,
  Info,
  Name,
  OriginalPrice,
  Price,
  Rating,
  RatingInfo,
  RestaurantCard,
  RestaurantCardCover,
  AddButton,
  Saleoff,
  BadgeCircle,
  BadgeNeg140,
  Badge140,
  NumDiscount,
  Rounded,
} from './home-info-card.styles';
import { mockImages } from '~/services/restaurants/mock';
import { Spacer } from '~/components/spacer/spacer.component';

export const HomeInfoCard = ({ item = {}, navigation }) => {
  const {
    name = 'Drink',
    photo = '~/assets/empty.jpg',
    price = 0,
    ratingAverage = 4,
    discount = 0,
    bought = 0,
    type,
  } = item;

  let image;
  if (mockImages[type]) {
    // eslint-disable-next-line prefer-destructuring
    image = mockImages[type].find((ele) => ele.name === photo).image;
  }
  return (
    <RestaurantCard>
      {discount !== 0 && (
        <Saleoff>
          <Badge140 />
          <BadgeNeg140 />
          <BadgeCircle>
            <NumDiscount>Sale off</NumDiscount>
            <NumDiscount>{`${discount}%`}</NumDiscount>
          </BadgeCircle>
        </Saleoff>
      )}
      <ImageContainer>
        <RestaurantCardCover source={image || require('~/assets/empty.jpg')} />
      </ImageContainer>
      <Info>
        <Name numberOfLines={1}>{name}</Name>

        <Spacer position="bottom" size="tiny">
          <Rating>
            <Rounded>
              <RatingInfo>{Math.round(ratingAverage * 10) / 10}</RatingInfo>
              <Ionicons name="star" color="gold" />
            </Rounded>
            <RatingInfo> | {`${bought > 1000 ? Math.round(bought / 100) / 10 + 'K' : bought}`} bought</RatingInfo>
          </Rating>
        </Spacer>

        <Price>
          {discount !== 0 ? (
            <>
              <OriginalPrice>${price}</OriginalPrice>
              <ActualPrice>${Math.round((price - (price * discount) / 100) * 100) / 100} </ActualPrice>
            </>
          ) : (
            <ActualPrice>${Math.round(price * 100) / 100}</ActualPrice>
          )}

          <AddButton onPress={() => navigation.navigate('Detail', { item })}>
            <Ionicons name="add" size={24} color="white" />
          </AddButton>
        </Price>
      </Info>
    </RestaurantCard>
  );
};

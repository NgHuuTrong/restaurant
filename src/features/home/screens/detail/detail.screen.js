import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { mockImages } from '~/services/restaurants/mock';
import { UsersContext } from '~/services/users/user.context';
import {
  CartButton,
  ChoiceLabel,
  ChoiceView,
  Container,
  CupImage,
  Description,
  DrinkImage,
  ImageContainer,
  InfoRow,
  InfoTitle,
  LeftSection,
  Name,
  ScreenTitle,
  RatingContainer,
  RatingInfo,
  Rounded,
  SectionEnd,
  SectionInfo,
  TotalLabel,
  TotalPrice,
  HeaderContainer,
} from './detail.style';
import { SafeArea } from '~/components/utility/safe-area.component';

export const Detail = ({ route, navigation }) => {
  const { item } = route.params;
  const { user } = useContext(UsersContext);

  const [quantity, setQuantity] = useState(1);
  const [ice, setIce] = useState(100);
  const [sugar, setSugar] = useState(100);
  const [size, setSize] = useState(2);
  const [point, setPoint] = useState(item.point);
  const [price, setPrice] = useState(item.point);

  useEffect(() => {
    setPoint(Math.round(item.point * quantity * (1 + (size - 2) * 0.08)));
  }, [item.point, quantity, size]);

  useEffect(() => {
    setPrice(
      Math.round(quantity * (item.price - (item.price * item.discount) / 100) * (1 + (size - 2) * 0.08) * 100) / 100,
    );
  }, [item.discount, item.price, quantity, size]);

  const percentArray = Array.from([0, 30, 50, 70, 100]);
  const sizeArray = Array.from([1, 2, 3]);

  let image;
  if (mockImages[item.type]) {
    // eslint-disable-next-line prefer-destructuring
    image = mockImages[item.type].find((ele) => ele.name === item.photo).image;
  }

  const handleAddToCart = () => {
    user.mycart.push({
      drinkID: item.id,
      id: user.mycart.length + 1,
      address: user.address,
      name: item.name,
      photo: item.photo,
      ice,
      sugar,
      size,
      type: item.type,
      price,
      quantity,
      point,
      requiredPoint: item.requiredPoint,
    });
    navigation.dispatch(StackActions.replace('MyCart', { user }));
  };

  return (
    <SafeArea key={item.id}>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back" size={28} color="#D17842" />
        </TouchableOpacity>
        <ScreenTitle>Detail</ScreenTitle>
        <TouchableOpacity onPress={() => navigation.navigate('MyCart', { user })}>
          <Ionicons name="cart-outline" size={28} color="#D17842" />
        </TouchableOpacity>
      </HeaderContainer>

      <Container>
        <ImageContainer>
          <DrinkImage source={image || require('~/assets/empty.jpg')} />
        </ImageContainer>

        <Name>{item.name}</Name>

        <SectionInfo>
          <RatingContainer>
            <Rounded>
              <RatingInfo>{Math.round(item.ratingAverage * 10) / 10}</RatingInfo>
              <Ionicons name="star" color="gold" />
            </Rounded>
            <RatingInfo>
              {' '}
              | {`${item.bought > 1000 ? Math.round(item.bought / 100) / 10 + 'K' : item.bought}`} bought
            </RatingInfo>
          </RatingContainer>

          <Description>{item.introduction}</Description>
        </SectionInfo>

        <SectionInfo>
          <InfoRow>
            <InfoTitle>Quantity</InfoTitle>
            <LeftSection>
              <TouchableOpacity onPress={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}>
                <Ionicons name="remove-circle" color="#D17842" size={30} />
              </TouchableOpacity>
              <TotalLabel>{quantity}</TotalLabel>
              <TouchableOpacity onPress={() => setQuantity((prev) => prev + 1)}>
                <Ionicons name="add-circle" color="#D17842" size={30} />
              </TouchableOpacity>
            </LeftSection>
          </InfoRow>

          <InfoRow>
            <InfoTitle>Size</InfoTitle>
            <LeftSection type="size">
              {sizeArray.map((ele, index) => (
                <TouchableOpacity key={index} onPress={() => setSize(ele)}>
                  <CupImage
                    height={index * 48 + 48}
                    width={index * 24 + 24}
                    tintColor={ele !== size ? '#4f4f4f' : '#D17842'}
                    source={require('~/assets/cup.jpg')}
                  />
                </TouchableOpacity>
              ))}
            </LeftSection>
          </InfoRow>

          <InfoRow>
            <InfoTitle>Ice</InfoTitle>
            <LeftSection>
              {percentArray.map((percent, index) => (
                <ChoiceView key={index} active={percent === ice} onPress={() => setIce(percent)}>
                  <ChoiceLabel active={percent === ice}>{`${percent}%`}</ChoiceLabel>
                </ChoiceView>
              ))}
            </LeftSection>
          </InfoRow>

          <InfoRow>
            <InfoTitle>Sugar</InfoTitle>
            <LeftSection>
              {percentArray.map((percent, index) => (
                <ChoiceView key={index} active={percent === sugar} onPress={() => setSugar(percent)}>
                  <ChoiceLabel active={percent === sugar}>{`${percent}%`}</ChoiceLabel>
                </ChoiceView>
              ))}
            </LeftSection>
          </InfoRow>
        </SectionInfo>

        <SectionEnd>
          <TotalPrice>
            <TotalLabel>Total Amount</TotalLabel>
            <View>
              <TotalLabel>{price}$</TotalLabel>
              <TotalLabel>{point} pts</TotalLabel>
            </View>
          </TotalPrice>

          <CartButton onPress={handleAddToCart}>
            <TotalLabel>ADD TO CART</TotalLabel>
          </CartButton>
        </SectionEnd>
      </Container>
    </SafeArea>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';

import { CupImage, LoyaltyTitle, CupContainer, Header, Wrapper } from './loyalty-card.style';
import { View } from 'react-native';

const arrowup = require('~/assets/animation/arrowup.json');
const levelup = require('~/assets/animation/heart.json');

export const LoyaltyCard = ({ user, setPoint = () => {} }) => {
  const [update, setUpdate] = useState(false);
  const arrowupAnimation = useRef();
  const levelupAnimation = useRef();

  useEffect(() => {
    if (user.loyaltycard >= 8) {
      arrowupAnimation.current.play();
    } else {
      arrowupAnimation.current.reset();
    }
  }, [user.loyaltycard]);

  useEffect(() => {
    if (update) {
      levelupAnimation.current?.play(0, 90);
    }
  }, [update]);

  const ArrayCup = Array.from(new Array(8));
  return (
    <Wrapper
      disabled={user.loyaltycard < 8 || update}
      onPress={() => {
        user.mypoints += 1000;
        setPoint(user.mypoints);
        user.loyaltycard -= 8;
        setUpdate(true);
      }}
    >
      <Header>
        <LoyaltyTitle>Loyalty Card</LoyaltyTitle>
        <LoyaltyTitle>{user.loyaltycard} / 8</LoyaltyTitle>
      </Header>
      <CupContainer upgrade={update}>
        {update ? (
          <View
            style={{
              width: '90%',
              height: 60,
            }}
          >
            <LottieView
              ref={levelupAnimation}
              source={levelup}
              resizeMode="cover"
              onAnimationFinish={() => {
                setUpdate(false);
              }}
              loop={false}
            />
          </View>
        ) : (
          <>
            {ArrayCup.map((ele, index) => (
              <CupImage
                key={index}
                tintColor={index < user.loyaltycard ? 'black' : '#4f4f4f'}
                source={require('~/assets/cup.jpg')}
              />
            ))}
          </>
        )}
      </CupContainer>

      <View
        style={{
          width: 30,
          height: 50,
          zIndex: 20,
          position: 'absolute',
          right: 0,
          top: -20,
          opacity: user.loyaltycard >= 8 ? 1 : 0,
        }}
      >
        <LottieView ref={arrowupAnimation} source={arrowup} resizeMode="cover" />
      </View>
    </Wrapper>
  );
};

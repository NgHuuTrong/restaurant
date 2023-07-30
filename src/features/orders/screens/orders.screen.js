import React, { useCallback, useContext, useRef, useState } from 'react';
import { styled } from 'styled-components/native';

import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { SafeArea } from '~/components/utility/safe-area.component';
import { Spacer } from '~/components/spacer/spacer.component';
import { UsersContext } from '~/services/users/user.context';
import { LandscapeCard } from '~/features/components/landscape-card/landscape-card.component';
import { useIsFocused } from '@react-navigation/native';

const Container = styled.View`
  height: 100%;
  align-items: center;
  padding: 12px;
`;

const ScreenTitle = styled.Text`
  color: ${(props) => props.theme.colors.text.primary};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.description};
`;

const HeaderContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const HeaderItem = styled(TouchableOpacity)`
  flex: 1;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.active ? props.theme.colors.ui.background : props.theme.colors.ui.disabled)};
  border-bottom-width: 3px;
  border-bottom-color: ${(props) => (props.active ? props.theme.colors.ui.primary : props.theme.colors.ui.secondary)};
`;

const HeaderTitle = styled.Text`
  color: ${(props) => (props.active ? props.theme.colors.text.primary : props.theme.colors.text.disabled)};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const List = ({ data }) => (
  <FlatList
    data={data.list}
    keyExtractor={(item) => item.id}
    // eslint-disable-next-line react-native/no-inline-styles
    contentContainerStyle={{ paddingBottom: 90 }}
    renderItem={({ item }) => {
      return (
        <Spacer position="bottom" size="medium">
          <LandscapeCard item={item} />
        </Spacer>
      );
    }}
  />
);

export const Orders = () => {
  const { user } = useContext(UsersContext);
  const [active, setActive] = useState(0);
  const flatListRef = useRef(null);
  const isFocused = useIsFocused();

  const handleOnScroll = useCallback((event) => {
    // const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / Dimensions.get('window').width;
    setActive(Math.round(index));
  }, []);

  const handleOnPress = (e, index) => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: index,
    });
  };

  const { width } = Dimensions.get('window').width;

  return (
    <SafeArea>
      <Container>
        <ScreenTitle>{isFocused && 'My Orders'}</ScreenTitle>
        <HeaderContainer>
          {user &&
            user.myorders.map((ele, index) => (
              <HeaderItem key={index} active={active === index} onPress={(e) => handleOnPress(e, index)}>
                <HeaderTitle active={active === index}>
                  {ele.type.charAt(0).toUpperCase() + ele.type.slice(1)}
                </HeaderTitle>
              </HeaderItem>
            ))}
        </HeaderContainer>
        <FlatList
          ref={flatListRef}
          getItemLayour={(data, index) => ({ length: width, offset: width * index })}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          keyExtractor={(item) => item.type}
          data={user.myorders}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <List data={item} />}
          onScroll={handleOnScroll}
        />
      </Container>
    </SafeArea>
  );
};

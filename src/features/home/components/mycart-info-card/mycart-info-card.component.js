import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { DeleteButton, DeleteIcon } from './mycart-info-card.styles';
import { LandscapeCard } from '~/features/components/landscape-card/landscape-card.component';

export const MyCartInfoCard = ({ item = {}, navigation, index, row, prevOpenedRow, onDelete }) => {
  const renderRightView = (onDeleteHandler) => {
    return (
      <DeleteButton onPress={(e) => onDeleteHandler(e)}>
        <DeleteIcon name="delete" size={28} color="#FF3030" />
      </DeleteButton>
    );
  };
  return (
    <Swipeable renderRightActions={() => renderRightView(onDelete)} ref={(ref) => (row[index] = ref)}>
      <LandscapeCard item={item} />
    </Swipeable>
  );
};

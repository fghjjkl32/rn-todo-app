import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { icons } from '../icons';

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({ theme }) => theme.text};
`;

const IconButton = ({ icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* button이 아닌 TouchableOpacity를 사용하는 이유 https://jcon.tistory.com/147 */}
      <View>
        <Icon source={icon} />
      </View>
    </TouchableOpacity>
  );
};

IconButton.propTypes = {
  icon: PropTypes.oneOf(Object.values(icons)).isRequired,
// 무엇중 하나를 선택하는 oneOf, oneOf는 객체로 전달이 되야한다. 그러므로 object의 값들만 쏙쏙 뽑아와서 배열로 만든다.
  onPress: PropTypes.func,
};

export default IconButton;
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';
import style from './style'

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;

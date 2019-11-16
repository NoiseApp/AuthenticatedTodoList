import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ text, style, loading, ...rest }) => (
  <View style={style || styles.container}>
    <TouchableOpacity style={styles.button} {...rest}>
      {loading && <ActivityIndicator color="blue" size="small" style={{ marginRight: 10 }} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: 'Default Button'
};

export default Button;
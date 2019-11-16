import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const Input = ({
  placeholder,
  name,
  onChange,
  onTouch,
  error,
  style,
  ...rest
}) => {

  const errorCheck = () => {
    if (error) return <Text style={styles.error}>{error}</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          autoCapitalize="none"
          onChangeText={text => onChange(name, text)}
          onBlur={() => onTouch(name)}
          placeholderTextColor={styles.primaryLight.color}
          {...rest}
        />
      </View>
      {errorCheck()}
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onTouch: PropTypes.func.isRequired,
  error: PropTypes.string,
  style: PropTypes.object
};

export default Input;

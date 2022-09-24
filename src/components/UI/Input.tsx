import React, { useReducer, useEffect } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_BLUR = "INPUT_BLUR";
const INPUT_FOCUS = "INPUT_FOCUS";

const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        focused: false,
        touched: true,
      };
    case INPUT_FOCUS:
      return {
        ...state,
        focused: true,
        touched: true,
      };
    default:
      return state;
  }
};

const Input = (props: any) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : "",
    isValid: props.initiallyValid,
    touched: false,
    focused: false,
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text: any) => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: INPUT_BLUR });
  };

  const gainedFocusHandler = () => {
    dispatch({ type: INPUT_FOCUS });
  };

  const checkInputState = (
    focused: boolean,
    touched: boolean,
    valid: boolean
  ) => {
    if (touched && !focused && !valid) {
      return styles.inputInvalid;
    } else if (touched && focused) {
      return styles.inputFocused;
    } else {
      return styles.inputNotFocused;
    }
  };

  return (
    <View
      style={[
        styles.formControl,
        checkInputState(
          inputState.focused,
          inputState.touched,
          inputState.isValid
        ),
        !inputState.isValid && props.isFormValid ? styles.inputInvalid : null,
      ]}
    >
      <TextInput
        {...props}
        style={[styles.input]}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
        onFocus={gainedFocusHandler}
        placeholder={props.label}
        autoFocus={false}
        placeholderTextColor="#6F6F6F"
      />
      {inputState.touched && inputState.isValid ? (
        <View style={styles.icon}>
          <Icon name={"checkmark"} size={16} color={Colors.accent} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    padding: 5,
    backgroundColor: Colors.background,
    borderRadius: 4,
  },
  white: {
    color: "white",
  },
  formControl: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 14,
    backgroundColor: "#1F1F1F",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginVertical: 8,
  },
  input: {
    color: "white",
  },
  inputFocused: {
    borderColor: Colors.primary,
  },
  inputNotFocused: {
    borderColor: "#555555",
  },
  inputInvalid: {
    borderColor: "red",
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
  },
});

export default Input;

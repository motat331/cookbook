import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { View, StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { AppButton } from '../components/UI/AppButton';
import Input from '../components/UI/Input';
import Colors from '../constants/Colors';
import * as authActions from '../state/actions/auth';
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state: any, action: any) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value,
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid,
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues,
        };
    }
    return state;
};

const AuthScreen = (props: any) => {
    const [loadingSpinner, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>();
    const [formInvalid, setFormInValid] = useState<boolean>(false);
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: 'user@user.com',
            password: 'userpish',
            // email: '',
            // password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const authHandler = async () => {
        // if (!formState.formIsValid) {
        //     console.log('Form Not Valid');
        //     setFormInValid(true);
        //     return;
        // }
        let action: any = authActions.login(
            formState.inputValues.email,
            formState.inputValues.password
        );

        setError(null);
        setIsLoading(true);

        try {
            await dispatch(action);
        } catch (err: any) {
            console.log('CATCH ERR -> ', err);
            setError(err.message);
            setIsLoading(false);
        }
    };

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier,
            });
        },
        [dispatchFormState]
    );

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.logoContainer}>
                <Text>Logo</Text>
            </View>
            <View>
                <Input
                    id="email"
                    label="Email"
                    keyboardType="default"
                    required
                    isFormValid={formInvalid}
                    minLength={5}
                    autoCapitalize="none"
                    errorText="Please enter a valid email."
                    onInputChange={inputChangeHandler}
                    initialValue=""
                />
                <Input
                    id="password"
                    label="Password"
                    keyboardType="default"
                    isFormValid={formInvalid}
                    secureTextEntry={false}
                    required
                    minLength={5}
                    autoCapitalize="none"
                    errorText="Please enter a valid password."
                    onInputChange={inputChangeHandler}
                    initialValue=""
                    inputType="password"
                />
                <AppButton
                    text={'Login'}
                    onPress={authHandler}
                    activityIndicator={loadingSpinner}
                />
            </View>
        </ScrollView>
    );
};

export const screenOptions = (navData: any) => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    logoImage: { width: 150, resizeMode: 'center' },
    switchTo: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    switchToText: {
        color: 'grey',
    },
    screen: {
        backgroundColor: Colors.background,
        flex: 1,
        paddingHorizontal: 15,
    },
});

export default AuthScreen;

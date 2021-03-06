import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextField = (props) => {
    const { label, value, onChangeText, autoCorrect, placeholder,
        secureTextEntry, keyboardType } = props;

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                keyboardType={keyboardType || 'default'}
                autoCorrect={autoCorrect}
                placeholder={placeholder}
                style={styles.inputStyle}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { TextField };
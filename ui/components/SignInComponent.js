import React,{PropTypes} from 'react';
import {
    StyleSheet,
    Dimensions,
} from 'react-native';
import {Button, Form, Item, Input, Label,Text } from 'native-base';

const {width} = Dimensions.get('window');

const SignInComponent =  ({dispatchSignIn, navigateMenu}) => {
    let _login, _password;

    return (
        <Form style={styles.form}>
            <Item stackedLabel>
                <Label>Логин</Label>
                <Input onChangeText={input => _login = input}/>
            </Item>
            <Item stackedLabel last>
                <Label>Пароль</Label>
                <Input onChangeText={input => _password = input} secureTextEntry={true}/>
            </Item>
            <Button block info onPress={() => {
                dispatchSignIn(_login, _password).then(_ => {
                    navigateMenu()
                })
            }}>
                <Text>Войти</Text>
            </Button>
        </Form>)
};

const styles = StyleSheet.create({
    form: {
        backgroundColor:"white",
        width:width -  40,
        alignSelf: "center",
        marginTop:20}
    },
);

export default SignInComponent;


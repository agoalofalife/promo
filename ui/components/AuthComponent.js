import React from 'react'

import {
    StyleSheet,
} from 'react-native';

import {Tabs,Tab,Container,Content} from 'native-base';
import SignInComponent from './SignInComponent';
import RegisterFormComponent from './RegisterFormComponent';
import StartPageComponent from './StartPageComponent';
import {Spinner} from 'native-base';


export default ({...props}) => {
    return (
        <Container style={{backgroundColor: "#fce82f"}}>
        <Content>
            <StartPageComponent/>
            {props.load ? <Spinner color='green'/> : <Tabs initialPage={0} style={styles.tabs}>
                <Tab heading="Вход">
                    <SignInComponent {...props}/>
                </Tab>
                <Tab heading="Регистрация">
                    <RegisterFormComponent/>
                </Tab>
            </Tabs>}
        </Content>
    </Container>
    )
}
const styles = StyleSheet.create({
        tabs: {
            marginTop:40,
            borderRadius:50,
            width:350,
            alignSelf: "center"
        }
    },
);

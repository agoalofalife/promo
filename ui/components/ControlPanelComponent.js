import React from 'react';
import {
    StyleSheet,
} from 'react-native'
import {Avatar, ListItem} from 'react-native-elements'
import {Content,Spinner} from 'native-base';

const stubUserUri = './../../assets/images/stub_user.png';
const spinnerUri = './../../assets/images/spinner.gif';

const list = [
            {
                title: 'История покупок',
                icon: 'shopping-basket'
            },
            {
                title: 'История переводов',
                icon: 'credit-card'
            },
        ];

export default ({loadAvatar=false}) => (
    <Content style={styles.content}>
        {loadAvatar ? <Spinner color='red' /> : <Avatar
            containerStyle={styles.containerAvatar}
            xlarge
            roundedh
            overlayContainerStyle={{backgroundColor:'white'}}
            avatarStyle={styles.avatar}
            source={require(spinnerUri)}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}/>}
        {
            list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    leftIcon={{ name: item.icon }}
                />
            ))
        }
    </Content>
)

const styles = StyleSheet.create({
    content:{
        backgroundColor:'#FFFFFF',

    },
    containerAvatar: {
        alignSelf: "center",
        marginTop:25,
        marginBottom:20
    },
    avatar:{
        borderRadius: 73,
        borderWidth: 5,
        borderStyle: 'dotted',
        borderColor: 'red'
    }
});
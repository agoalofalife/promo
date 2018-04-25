import React from 'react';
import {
    StyleSheet
} from 'react-native'
import {Avatar, ListItem} from 'react-native-elements'
import {Content,Spinner} from 'native-base';

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

export default ({loadAvatar=false, imageSource, ...props}) => {
    return (
        <Content style={styles.content}>
            {loadAvatar ? <Spinner color='red' style={styles.spinner}/> : <Avatar
                containerStyle={styles.containerAvatar}
                xlarge
                roundedh
                overlayContainerStyle={{backgroundColor: 'white'}}
                avatarStyle={styles.avatar}
                source={imageSource}
                onPress={props.selectPhoto}
                activeOpacity={0.7}/>}
            {
                list.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.title}
                        leftIcon={{name: item.icon}}
                    />
                ))
            }
        </Content>
    )
}

const styles = StyleSheet.create({
    content:{
        backgroundColor:'#FFFFFF',
    },
    containerAvatar: {
        alignSelf: "center",
        marginTop:25,
        marginBottom:20
    },
    spinner:{
        marginBottom:50,
        marginTop:40
    },
    avatar:{
        borderRadius: 73,
        borderWidth: 5,
        borderColor: 'red'
    }
});
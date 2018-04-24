import React, { Component } from 'react';
import { Drawer, Header, Left,Button,Icon,Title, Body } from 'native-base';
import ControlPanelComponent from './../ui/components/ControlPanelComponent';

export default class DrawerContainer extends Component {
    closeDrawer() {
        this.drawer._root.close()
    }
    openDrawer() {
        this.drawer._root.open()
    }
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<ControlPanelComponent/>}
                onClose={() => this.closeDrawer()} >
                <Header style={{backgroundColor: "#fce82f"}}>
                    <Left>
                        <Button transparent onPress={() => this.openDrawer()}>
                            <Icon name="menu" style={{ color:'black'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color:'black'}}>Bananas</Title>
                    </Body>
                </Header>
            </Drawer>
        );
    }
}
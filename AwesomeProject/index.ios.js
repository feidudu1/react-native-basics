/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    Text
} from 'react-native';

class Greeting extends Component {
    render(){
        return (
            <Text>hello {this.props.name}!</Text>
        )
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true,
        };
        setInterval( () => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        },1000);
    }
    render(){
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        )
    }
}

class FlatListBasics extends Component {
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'devin'},
                        {key: 'jackson'},
                        {key: 'milton'},
                        {key: 'feifei'},
                        {key: 'lili'},
                        {key: 'lucy'},
                        {key: 'jhone'},
                        {key: 'chunk'},
                    ]}
                    renderItem={ ({item}) => <Text style={styles.item}> {item.key} </Text>}
                 />
            </View>
        )
    }
}

class SectionListBasics extends Component {
    render(){
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {key: '1', titile: 'D', data: ['Devin']},
                        {key: '2', title: 'J', data: ['Jackson', 'beijing', 'shanghai', 'shenzheng', 'hangzhou']}
                    ]}
                    keyExtractor = {item => item}
                    renderItem = { ({item}) => <Text style={styles.item}> {item} </Text>}
                    renderSectionHeader = { ({section}) => <Text style={styles.sectionHeader}>{section.title} </Text>}
                />
            </View>
        )
    }
}

class AwesomeProject extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    render(){
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        }
        console.log(this.state);
        return (
            <View style={[styles.bg, {margin:50, flex: 1, flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap'}]}>
                <Text style={styles.red}> sdf</Text>
                <Text style={styles.bigblue}>hello world</Text>
                <Text style={[styles.bigblue, styles.red]}>hello 1</Text>
                <Text style={[styles.red, styles.bigblue]}>hello 2</Text>
                <Image source={pic} style={{width:193,height:110}}></Image>
                <Greeting name="feifei"/>
                <Blink text="look at me state change" />
                <Blink text="another state change" />
                <TextInput style={{height:40}} placeholder="type here to translate" onChangeText={(text) => this.setState({text})} />
                <Text style={{padding:10, fontSize:24}}>{this.state.text.split(' ').map((word) => word && '🍰').join(' ')}</Text>
                <SectionListBasics />
                <FlatListBasics />
                <ScrollView>
                    <Text style={{fontSize:24}}>Scroll me plz</Text>
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Text style={{fontSize:24}}>If you like</Text>
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Image source={pic} style={{width:193,height:110}} />
                    <Text style={{fontSize:24}}>React Native</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red',
    },
    bg: {
        backgroundColor: '#eee'
    },
    item: {
        padding: 22,
        fontSize: 18,
        height: 24
    },
    container: {
        flex: 1,
        paddingTop: 22,
        width: 200
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

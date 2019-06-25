
import React, {Component} from 'react';

export default class Styles extends Component {
    render() {
    }
}
const styles = StyleSheet.create({
    container: {
    width:'100%',
    height:1000,
    display:'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0066ff',
    },
    welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
    instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    },
    Bubbles: {
    width:100,
    height:100,
    backgroundColor:'#FFFFFF',
    borderRadius:50,
    overflow:'hidden',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
    },
    flag: {
    width:'100%',
    height:50,
    backgroundColor:'#FFFFFF',
    position:'absolute',
    bottom:0
    },
    topH: {
    width:'100%',
    height:'auto',
    position:'absolute',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    top:0
    }
});


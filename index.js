import React from 'react'
import {
    ActivityIndicator,
    View
  } from 'react-native'

export default (props) => (
    <View style={{
        flex:1,
        backgroundColor:'#00000033', 
        zIndex: props.visible ? 999999 : -999999,
        position: 'absolute',
        left:0,
        top:0,
        width:props.visible ? '100%' : 0,
        height:props.visible ? '100%' : 0,
    }}>
    {
        !props.visible ? null :
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            }}>
            <ActivityIndicator
                size={props.size ? props.size : 'large'} 
                color={props.color ? props.size : 'white'} />
        </View>
    }        
    </View>
)
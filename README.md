# react-native-modal-activityindicator
very simple and stable modal ActivityIndicator

## Install
```
npm install --save react-native-modal-activityindicator
```

## Usage
```javascript
import ModalActivityIndicator from 'react-native-modal-activityindicator'
...

render(){
    return (
        <View ...>
            ...
            <ModalActivityIndicator visible={this.state.visible} size='large' color='white' />
        </View>
    )
}
```
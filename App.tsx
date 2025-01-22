import {open} from '@op-engineering/op-sqlite';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const App = () => {
  const onPress = () => {
    open({
      location: 'myfolder',
      name: 'mydb.db',
    });
  };

  return (
    <View style={{padding: 48}}>
      <TouchableOpacity style={{padding: 16, backgroundColor: 'blue'}}>
        <Text style={{color: 'white'}} onPress={onPress}>
          Open db (crashes on android)
        </Text>
      </TouchableOpacity>
    </View>
  );
};

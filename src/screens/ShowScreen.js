import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
  return (
    <View style={[ styles.card, styles.shadowProp ]}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return { 
    headerRight: (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })
      }
    >
      <EvilIcons name="pencil" size={30} />
    </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    marginVertical: 20,
  },
  content: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600'
  },
  shadowProp: {
    shadowColor: '#9999',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
});

export default ShowScreen;
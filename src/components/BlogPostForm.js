import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TextInput } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
      <Button 
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingVertical: 20,
    width: '90%',
  },
  input: {
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(180, 180, 180)',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 18,
    margin: 5,
    marginBottom: 15,
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
  }
});

export default BlogPostForm;
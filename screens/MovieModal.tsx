import React, {useState} from 'react';
import {Alert, Modal, Text, View} from 'react-native';

const MovieModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View>
          <View>
            <Text>Hello World!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MovieModal;

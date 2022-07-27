import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import { CloseIcon, StarIcon } from '../../icons';
import { Separator } from './Separator';

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (status: boolean) => void;
}

export const ReviewSearchModal: React.FC<ModalProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 20,
                marginRight: 20,
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 17,
                    lineHeight: 22,
                    letterSpacing: -0.41,
                    color: '#3081ED',
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 17,
                  lineHeight: 22,
                  letterSpacing: -0.41,
                  color: '#444444',
                }}
              >
                Search filters
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 17,
                    lineHeight: 22,
                    letterSpacing: -0.41,
                    color: '#3081ED',
                  }}
                >
                  Apply
                </Text>
              </TouchableOpacity>
            </View>

            <Separator height={20} />

            <View style={{ flexDirection: 'row', margin: 20 }}>
              <View
                style={{
                  width: 70,
                  height: 52,
                  borderRadius: 3,
                  backgroundColor: 'blue',
                }}
              />
              <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                <Text>San Miguel</Text>
                <Text>San Miguel, Italy</Text>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 0.2,
                borderTopColor: 'B6B6B6',
                marginLeft: 20,
                marginRight: 20,
              }}
            />

            <View style={{ margin: 20 }}>
              <Separator height={10} />
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  lineHeight: 22.59,
                  color: '#444444',
                }}
              >
                How would you rate your experience?
              </Text>

              <Separator height={10} />
              <View style={{ flexDirection: 'row' }}>
                <StarIcon color={'#444444'} />
                <StarIcon color={'#444444'} />
                <StarIcon color={'#444444'} />
                <StarIcon color={'#444444'} />
                <StarIcon color={'#444444'} />
              </View>

              <Separator height={40} />

              <View>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 22.59,
                    color: '#444444',
                  }}
                >
                  What kind of visit was this?
                </Text>
              </View>

              <Separator height={20} />

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    width: 78,
                    height: 48,
                    borderRadius: 25,
                    backgroundColor: '#F3F3F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>Family</Text>
                </TouchableOpacity>

                <Separator width={15} />

                <TouchableOpacity
                  style={{
                    width: 78,
                    height: 48,
                    borderRadius: 25,
                    backgroundColor: '#F3F3F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>Business</Text>
                </TouchableOpacity>

                <Separator width={15} />

                <TouchableOpacity
                  style={{
                    width: 78,
                    height: 48,
                    borderRadius: 25,
                    backgroundColor: '#F3F3F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>Tour</Text>
                </TouchableOpacity>
              </View>

              <Separator height={20} />

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    width: 78,
                    height: 48,
                    borderRadius: 25,
                    backgroundColor: '#F3F3F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>Vacation</Text>
                </TouchableOpacity>

                <Separator width={15} />

                <TouchableOpacity
                  style={{
                    width: 78,
                    height: 48,
                    borderRadius: 25,
                    backgroundColor: '#F3F3F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>Solo</Text>
                </TouchableOpacity>

                <Separator width={15} />

                <TouchableOpacity
                  style={{
                    width: 78,
                    height: 48,
                    borderRadius: 25,
                    backgroundColor: '#F3F3F3',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text>Couples</Text>
                </TouchableOpacity>
              </View>

              <Separator height={40} />

              <View>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 22.59,
                    color: '#444444',
                  }}
                >
                  When did you visit?
                </Text>

                <Separator height={20} />

                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={{
                      height: 52,
                      width: 153,
                      borderWidth: 2,
                      borderRadius: 3,
                      borderColor: '#DFE1E6',
                      justifyContent: 'center',
                      paddingLeft: 10,
                    }}
                  >
                    <Text>From</Text>
                  </TouchableOpacity>

                  <Separator width={20} />

                  <TouchableOpacity
                    style={{
                      height: 52,
                      width: 153,
                      borderWidth: 2,
                      borderRadius: 3,
                      borderColor: '#DFE1E6',
                      justifyContent: 'center',
                      paddingLeft: 10,
                    }}
                  >
                    <Text>To</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: '10%' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <View>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 12,
                          lineHeight: 13.06,
                          color: '#000000',
                        }}
                      >
                        1/3
                      </Text>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                      <View
                        style={{
                          width: 288,
                          height: 8,
                          borderRadius: 8,
                          backgroundColor: '#F3F3F3',
                        }}
                      />
                    </View>
                  </View>
                </View>

                <Separator height={30} />

                <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                  <TouchableOpacity
                    style={{
                      height: 48,
                      width: 120,
                      borderRadius: 6,
                      padding: 16,
                      backgroundColor: '#3081ED',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: '500',
                        fontSize: 18,
                        lineHeight: 19.58,
                        color: '#F8F8F8',
                      }}
                    >
                      Next
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 40,
    //  borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

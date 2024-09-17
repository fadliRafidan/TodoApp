import React, { useState } from "react";
import {
    Modal,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

type ShowModalProps = {
    visible: boolean;
    input: string;
    setInput: (visible: string) => void;
    setVisible: (visible: boolean) => void;
    handleSubmit: () => void;
}

const ShowModal = ({ setVisible, visible, handleSubmit, input, setInput }: ShowModalProps) => {

    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible);
            }}
        >
            <SafeAreaView style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.wrapperForm}>
                        <Text style={styles.labelText}>
                            Judul
                        </Text>
                        <TextInput
                            style={styles.input}
                            value={input}
                            onChangeText={(value) => setInput(value)}
                            placeholder="Tambah Tugas Baru"
                        />
                    </View>
                    <View style={styles.wrapperButton}>
                        <Pressable onPress={() => setVisible(!visible)} style={[styles.modalButton, { backgroundColor: '#DDDDDD' }]}>
                            <View>
                                <Text style={styles.buttonText}>Batal</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={handleSubmit} style={styles.modalButton}>
                            <View>
                                <Text style={styles.buttonText}>Tambah Tugas</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default ShowModal;

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
    },
    wrapperForm: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        rowGap: 5
    },
    wrapperButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 15,
        width: '100%',
    },
    modalButton: {
        backgroundColor: "#2655BD",
        padding: 8,
        borderRadius: 10,
        flex: 1
    },
    buttonText: {
        fontSize: 13,
        textAlign: "center",
        color: "#fff",
        fontWeight: '500'
    },
    labelText: {
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        width: "100%",
    },
});
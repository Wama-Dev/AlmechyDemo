import React, {FC, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParamList = {
  Main: undefined;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const OTPVerification: FC<ScreenProps> = props => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirm, setConfirm] =
    useState<FirebaseAuthTypes.ConfirmationResult | null>(null);
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    if (phoneNumber.length === 10) {
      try {
        const confirmation = await auth().signInWithPhoneNumber(
          `+91${phoneNumber}`,
        );
        setConfirm(confirmation);
        setMessage('OTP sent successfully');
      } catch (error) {
        setMessage('Failed to send OTP. Try again.');
        console.log('error==>', error);
        props.navigation.navigate('Main');
      }
    } else {
      setMessage('Please enter a valid 10-digit mobile number.');
    }
  };

  const confirmOtp = async () => {
    if (confirm) {
      try {
        await confirm.confirm(otp);
        setMessage('Phone number verified!');
      } catch (error) {
        setMessage('Invalid OTP. Try again.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
        maxLength={10}
        onChangeText={setPhoneNumber}
      />
      <Button title="Send OTP" onPress={sendOtp} />

      {confirm && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            keyboardType="number-pad"
            maxLength={6}
            onChangeText={setOtp}
          />
          <Button title="Confirm OTP" onPress={confirmOtp} />
        </>
      )}

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  message: {
    marginTop: 12,
    color: 'red',
  },
});

export default OTPVerification;

import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import style from './style';

const Payment = ({ navigation }) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const user = useSelector(state => state.user);

  const [isReady, setIsReady] = useState(false);
  const { confirmPayment, loading } = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      'http://localhost:4242/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          currency: 'usd',
          amount: donationItemInformation.price * 100,
        }),
      },
    );
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const { error, paymentIntent } = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert(
        'Error has occured with your payment',
        error.localizedMessage,
      );
    } else if (paymentIntent) {
      Alert.alert('Successful', 'The payment was confirmed successfully.');
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={'your-publishable-key'}>
            <CardForm
              onFormComplete={() => {
                setIsReady(true);
              }}
              style={style.cardForm}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;

import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { Routes } from '../../navigation/Routes';
import style from './style';

const SingleDonationItem = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }}
          resizeMode="cover"
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => {
            navigation.navigate(Routes.Payment);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;

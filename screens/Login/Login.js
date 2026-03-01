import { useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../api/user';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { Routes } from '../../navigation/Routes';
import { logIn } from '../../redux/reducers/User';
import style from './style';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  // dispatch(resetInitialState());

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            isDisabled={email.length <= 5 || password.length <= 8}
            title={'Login'}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}
        >
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

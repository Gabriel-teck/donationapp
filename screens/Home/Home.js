import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import globaStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';
import Tab from '../../components/Tab/Tab';
import { Routes } from '../../navigation/Routes';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';
import { resetInitialState } from '../../redux/reducers/User';
import style from './style';
import { logOut } from '../../api/user';

const Home = ({ navigation }) => {
  const user = useSelector(state => state.user);
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();

  const [donationItems, setDonationItems] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsloadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    const items = donations.items;
    const filteredItems = items.filter(value =>
      value.categoryIds.includes(categories.selectedCategoryId),
    );
    setDonationItems(filteredItems);
  }, [categories.selectedCategoryId]);

  useEffect(() => {
    setIsloadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsloadingCategories(false);
  }, []);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globaStyle.backgroundWhite, globaStyle.flex]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={style.header}>
            <View>
              <Text style={style.headerIntroText}>Hello, </Text>
              <View style={style.username}>
                <Header title={user.displayName + ' 👋'} />
              </View>
            </View>
            <View>
              <Image
                resizeMode={'contain'}
                source={{ uri: user.profileImage }}
                style={style.profileImage}
              />
              <Pressable onPress={async () => { 
                dispatch(resetInitialState())
                await logOut();
                }}>
                <Header type={3} title={'log out'} color={'#156CE7'} />
              </Pressable>
            </View>
          </View>
          <View style={style.searchBox}>
            <Search placeholder={'Search'} />
          </View>
          <Pressable style={style.highlightedImageContainer}>
            <Image
              style={style.highlightedImage}
              resizeMode={'contain'}
              source={require('../../assets/images/highlighted_image.png')}
            />
          </Pressable>
          <View style={style.categoryHeader}>
            <Header title={'Select Category'} type={2} />
          </View>
          <View style={style.categories}>
            <FlatList
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                if (isLoadingCategories) return;
                setIsloadingCategories(true);
                let newData = pagination(
                  categories.categories,
                  categoryPage,
                  categoryPageSize,
                );
                if (newData.length > 0) {
                  setCategoryList(prevState => [...prevState, ...newData]);
                  setCategoryPage(prevState => prevState + 1);
                }
                setIsloadingCategories(false);
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categoryList}
              renderItem={({ item }) => (
                <View style={style.categoryItem} key={item.categoryId}>
                  <Tab
                    tabId={item.categoryId}
                    onPress={value => dispatch(updateSelectedCategoryId(value))}
                    title={item.name}
                    isInactive={
                      item.categoryId !== categories.selectedCategoryId
                    }
                  />
                </View>
              )}
            />
          </View>

          {donationItems.length > 0 && (
            <View style={style.donationItemContainer}>
              {donationItems.map(value => {
                const categoryInformation = categories.categories.find(
                  val => val.categoryId === categories.selectedCategoryId,
                );
                return (
                  <View
                    key={value.donationItemId}
                    style={style.SingleDonationItem}
                  >
                    <SingleDonationItem
                      onPress={selectedDonationId => {
                        dispatch(updateSelectedDonationId(selectedDonationId));
                        navigation.navigate(Routes.SingleDonationItem, {
                          categoryInformation,
                        });
                      }}
                      donationItemId={value.donationItemId}
                      uri={value.image}
                      donationTitle={value.name}
                      badgeTitle={categoryInformation.name}
                      price={parseFloat(value.price)}
                    />
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

import * as React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { theme } from "../MainContainer";

const todaysProducts = [
  {
    id: 7,
    name: "Used original Apple iPhone 6/6s",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1695366325173AYGkmZTJbD.jpg?x-oss-process=style/p_list",
  },
  {
    id: 8,
    name: "New Women's striped Fashion Pocket Set",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1689583068125tRPh6FzQ8a.png?x-oss-process=style/p_list",
  },
  {
    id: 9,
    name: "Original android Phone i14Pro Max",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1662544319279CabzQY6hkx.jpg?x-oss-process=style/p_list",
  },
  {
    id: 10,
    name: "Femal Muslim Robe Plus Size Women",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1655803383153FKZpTEDhhE.jpg?x-oss-process=style/p_list",
  },
  {
    id: 11,
    name: "White Spot Disease Cream Vitiligo Ointment",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-32064352885685427.jpg?x-oss-process=style/p_list",
  },
  {
    id: 12,
    name: "Xprinter POS 58 USB & USB + Bluetooth",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-1591260769037.jpeg?x-oss-process=style/p_list",
  },
];

const thumbsUpProducts = [
  {
    id: 7,
    name: "JBL C330TWS Bluetooth Earphones",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-6893413771050096.jpg?x-oss-process=style/p_list",
  },
  {
    id: 8,
    name: "Pure Copper Bracelet Men Magnetic Arthritis Adjustable",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1676275233687WNjxDp4ncz.jpg?x-oss-process=style/p_list",
  },
  {
    id: 9,
    name: "FrankColor Cardamom Age 26 Colors Eyeshadow",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-708677667709541.jpg?x-oss-process=style/p_list",
  },
  {
    id: 10,
    name: "Green Tea Face Mask Cleaning Mask Stick",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-40095168321378115.jpg?x-oss-process=style/p_list",
  },
  {
    id: 11,
    name: "New Bride Headwear Tiara",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-21172381872492745.jpg?x-oss-process=style/p_list",
  },
  {
    id: 12,
    name: "Men's Birkenstocks",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1655772035265cTwbsZnRbA.jpg?x-oss-process=style/p_list",
  },
];

const yourCartProducts = [
  {
    id: 7,
    name: "Luxury Wall Art Modern Minimalistic",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-27135168210079071.jpg?x-oss-process=style/p_list",
  },
  {
    id: 8,
    name: "Cheetah Print Heels",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-7262571240329857.jpg?x-oss-process=style/p_list",
  },
  // {
  //   id: 9,
  //   name: "Briefcases",
  //   image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-927232.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Hair Weft & Closure",
  //   image:
  //     "https://global2019-static-cdn.kikuu.com/kikuu-v3-383381-180321.jpeg",
  // },
  // {
  //   id: 11,
  //   name: "Tops & Tees",
  //   image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-952861.jpg",
  // },
  // {
  //   id: 12,
  //   name: "Headphones & Earphones",
  //   image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-563548-180809.jpg",
  // },
];

/*

{key : Any , value : Any }

Assignment.. 

1. Make the title Lower Case 
2. Fill Today's Deal and Thumbs Up Section with Items
3. Add one more item to Tabs
*/

const TodaysDeal = () => {
  const [isCustomDarkMode, setCustomMode] = theme();
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text
        style={
          isCustomDarkMode ? styles.productNameWhite : styles.productNameDark
        }
      >
        {item.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={todaysProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Change this value to adjust the number of columns
      />
    </View>
  );
};

const ThumbsupItems = () => {
  const [isCustomDarkMode, setCustomMode] = theme();
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text
        style={
          isCustomDarkMode ? styles.productNameWhite : styles.productNameDark
        }
      >
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={thumbsUpProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Change this value to adjust the number of columns
      />
    </View>
  );
};

const YourCart = () => {
  const [isCustomDarkMode, setCustomMode] = theme();
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text
        style={
          isCustomDarkMode ? styles.productNameWhite : styles.productNameDark
        }
      >
        {item.name}
      </Text>
    </View>
  );
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={yourCartProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Change this value to adjust the number of columns
      />
    </View>
  );
};

const sceneMap = SceneMap({
  today: TodaysDeal,
  thumbs_up: ThumbsupItems,
  cart: YourCart,
});

export default function HomeScreen({ navigation }) {
  const [isCustomDarkMode, setCustomMode] = theme();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  // var index = 0
  // function setIndex(index:Int){}

  /*  const [tabBarItems] = React.useState([
        { key: 'today', title: 'Today/'s Deal' },
        { key: 'thumbs_up', title: 'Thumbs Up items' }
    ]); */

  var [routes] = useState([
    { key: "today", title: "Today's Deal" },
    { key: "thumbs_up", title: "Thumbs Up items" },
    { key: "cart", title: "Your Cart" },
  ]);

  /* 
        '' -> char
        "" -> String
    */
  return (
    <View
      style={isCustomDarkMode ? styles.darkContainer : styles.lightContainer}
    >
      <TabView
        navigationState={{ index, routes }}
        renderScene={sceneMap}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    marginRight: 8,
    width: 160,
    alignItems: "center",
    width: 160,
    alignItems: "center",
    //flexDirection : 'column',
  },

  lightContainer: {
    flex: 1,
    padding: 1,
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    flex: 1,
    padding: 1,
    backgroundColor: "#181818",
    color: "#FFFFFF",
  },

  imageContainer: {
    flex: 1,
  },
  productNameWhite: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "light",
    textAlign: "center",
    color: "#FFFFFF",
  },

  productNameDark: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "light",
    textAlign: "center",
    color: "#181818",
  },
  productImage: {
    width: 150,
    height: 150,
  },
});

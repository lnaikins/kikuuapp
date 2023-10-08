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
    name: "Briefcases",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-927232.jpg",
  },
  {
    id: 10,
    name: "Hair Weft & Closure",
    image:
      "https://global2019-static-cdn.kikuu.com/kikuu-v3-383381-180321.jpeg",
  },
  {
    id: 11,
    name: "Tops & Tees",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-952861.jpg",
  },
  {
    id: 12,
    name: "Headphones & Earphones",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-563548-180809.jpg",
  },
];

const thumbsUpProducts = [
  {
    id: 7,
    name: "Wigs",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-171831.jpg",
  },
  {
    id: 8,
    name: "Personal Care Appliances",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-122374.jpg",
  },
  {
    id: 9,
    name: "Briefcases",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-927232.jpg",
  },
  {
    id: 10,
    name: "Hair Weft & Closure",
    image:
      "https://global2019-static-cdn.kikuu.com/kikuu-v3-383381-180321.jpeg",
  },
  {
    id: 11,
    name: "Tops & Tees",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-952861.jpg",
  },
  {
    id: 12,
    name: "Headphones & Earphones",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-563548-180809.jpg",
  },
];

const yourCartProducts = [
  {
    id: 7,
    name: "Wigs",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-171831.jpg",
  },
  {
    id: 8,
    name: "Personal Care Appliances",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-122374.jpg",
  },
  {
    id: 9,
    name: "Briefcases",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-927232.jpg",
  },
  {
    id: 10,
    name: "Hair Weft & Closure",
    image:
      "https://global2019-static-cdn.kikuu.com/kikuu-v3-383381-180321.jpeg",
  },
  {
    id: 11,
    name: "Tops & Tees",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-952861.jpg",
  },
  {
    id: 12,
    name: "Headphones & Earphones",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-563548-180809.jpg",
  },
];

/*

{key : Any , value : Any }

Assignment.. 

1. Make the title Lower Case 
2. Fill Today's Deal and Thumbs Up Section with Items
3. Add one more item to Tabs
*/

const TodaysDeal = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={todaysProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // Change this value to adjust the number of columns
      />
    </View>
  );
};

const ThumbsupItems = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={thumbsUpProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // Change this value to adjust the number of columns
      />
    </View>
  );
};

const YourCart = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.imageContainer}>
      <FlatList
        data={yourCartProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // Change this value to adjust the number of columns
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
    <TabView
      navigationState={{ index, routes }}
      renderScene={sceneMap}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  productContainer: {
    marginRight: 8,
    width: 160,
    alignItems: "center",
    //flexDirection : 'column',
  },
  imageContainer: {
    flex: 1,
  },
  productName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "light",
    textAlign: "center",
  },
  productImage: {
    width: 150,
    height: 150,
    textAlign: "center",
  },
});

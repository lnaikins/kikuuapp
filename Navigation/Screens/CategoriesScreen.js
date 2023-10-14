import * as React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-ionicons";
import { useState } from "react";
import { theme } from "../MainContainer";

const categories = [
  { id: 1, name: "Recommend" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Shoes" },
  { id: 4, name: "Luggage & Bags" },
  { id: 5, name: "Watch & Jewelry" },
];

const recomendedProducts = [
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

const clothing = [
  {
    id: 1,
    name: "Dresses",
    image: "https://global2019-static-cdn.kikuu.com/kikuu-v3-2-741387.jpg",
  },
  {
    id: 2,
    name: "Tops",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-66919401818281026.jpg",
  },
  {
    id: 3,
    name: "Pants",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-1633067556213.jpeg",
  },
  {
    id: 4,
    name: "Suits",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-1633067556213.jpeg",
  },
];

const shoes = [
  {
    id: 1,
    name: "Sandals & Flipflops",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1651625002963XPFHkZ6S7N.jpg",
  },
  {
    id: 2,
    name: "Sneakers",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-16792951833793a4JhP5Q7D.jpg",
  },
  {
    id: 3,
    name: "Loafers",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-1634781792551.jpeg",
  },
  {
    id: 4,
    name: "Boots",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-1607132663661.jpeg?x-oss-process=style/p_list",
  },
];

const LuggageBags = [
  {
    id: 1,
    name: "Shoulder Bags",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1684891760335RxscPPKS8S.jpg?",
  },
  {
    id: 2,
    name: "Handle Bags",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1693141198177wADE54Cp8C.jpg",
  },
  {
    id: 3,
    name: "Wallets",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-21242246058727205.jpg",
  },
  {
    id: 4,
    name: "Backpacks",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-1641695738023.jpeg",
  },
];

const WatchJewelry = [
  {
    id: 1,
    name: "Quartz Watches",
    image:
      "https://global2019-static-cdn.kikuu.com/upload-productImg-17000002131075949.jpg",
  },
  {
    id: 2,
    name: "Necklaces",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1675867634490P5wznNf48b.jpg",
  },
  {
    id: 3,
    name: "Rings",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1684891760335RxscPPKS8S.jpg?",
  },
  {
    id: 4,
    name: "",
    image:
      "https://global2019-static-cdn.kikuu.com/k-s-oss-1684891760335RxscPPKS8S.jpg?",
  },
];

export default function CategoriesScreen({ navigation }) {
  var [products, setProducts] = useState(recomendedProducts);
  const [isCustomDarkMode, setCustomMode] = theme();

  const [CategoryTitle, setCategoryTitle] = useState("Recommend");

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryContainer}>
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => {
          if (item.id == 1) {
            setProducts(recomendedProducts);
          } else if (item.id == 2) {
            setProducts(clothing);
          } else if (item.id == 3) {
            setProducts(shoes);
          } else if (item.id == 4) {
            setProducts(LuggageBags);
          } else if (item.id == 5) {
            setProducts(WatchJewelry);
          }
          setCategoryTitle(item.name);
        }}
      >
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  return (
    <View
      style={isCustomDarkMode ? styles.darkContainer : styles.lightContainer}
    >
      <View style={styles.contentContainer}>
        <View style={styles.categoryContainer}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>{CategoryTitle}</Text>
          {/**  Title for the product container */}
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Change this value to adjust the number of columns
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: "#FFFFFF",
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
  },

  whiteText: {
    color: "#FFFFFF",
    marginRight: 10,
  },
  darkText: {
    color: "#181818",
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 16,
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderColor: "#F5F5F5",
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  contentContainer: {
    flexDirection: "row",
    marginLeft: 0,
  },
  categoryContainer: {
    marginBottom: 2,
    marginRight: 8,
    backgroundColor: "#F5F5F5",
    //height: 50,
    width: 98,
  },
  lightCategoryContainer: {
    marginBottom: 2,
    marginRight: 8,
    backgroundColor: "#F5F5F5",
    //height: 50,
    width: 98,
  },
  darkCategoryContainer: {
    marginBottom: 2,
    marginRight: 8,
    backgroundColor: "#181818",
    //height: 50,
    width: 98,
  },
  imageContainer: {
    flex: 1,
  },
  categoryItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF",
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "light",
    color: "#7E7E7E",
    textAlign: "left",
    paddingHorizontal: 10,
  },
  productContainer: {
    marginRight: 8,
    width: 120,
    //flexDirection : 'column',
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },

  productName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "light",
    textAlign: "center",
  },
});

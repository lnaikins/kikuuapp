import * as React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

/*

{key : Any , value : Any }

Assignment.. 

1. Make the title Lower Case 
2. Fill Today's Deal and Thumbs Up Section with Items
3. Add one more item to Tabs
*/

const TodaysDeal = () => {
  return (
    <View>
      <Text>Todays Deal</Text>
    </View>
  );
};

const ThumbsupItems = () => {
  return (
    <View>
      <Text>Thumbsup Items</Text>
    </View>
  );
};

const YourCart = () => {
  return (
    <View>
      <Text>Your Cart</Text>
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

import * as React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


/* 

{key : Any , value : Any }

*/



const TodaysDeal = () => {
    return(
        <View>
            <Text>Todays Deal</Text>
        </View>
    )
}


const ThumbsupItems = () =>
{
    return(
        <View>
            <Text>Thumbsup Items</Text>
        </View>
    )
}




const sceneMap = SceneMap({
    today: TodaysDeal,
    thumbs_up: ThumbsupItems
})

export default function HomeScreen({ navigation }) {

    const layout = useWindowDimensions();


    const [index, setIndex] = useState(0)

   /*  const [tabBarItems] = React.useState([
        { key: 'today', title: 'Today Deal' },
        { key: 'thumbs_up', title: 'Thumbs Up items' }
    ]); */

    
    var [routes] = React.useState([
        { key: 'today', title: 'Today Deal' },
        { key: 'thumbs_up', title: 'Thumbs Up items' }
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
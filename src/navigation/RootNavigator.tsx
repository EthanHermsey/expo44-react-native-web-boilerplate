import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Button, Text, StyleSheet } from "react-native";
import { UseStyle } from 'hooks';

/*
Example:: Normally these pages would be put in pages/home, pages/about and pages/contact

Bottom tabs
    |-> drawer(home)
    |    |-> Stack
    |    |    |-> home
    |    |    |-> about
    |    |-> contact
    |-> chat
    |-> settings    

*/


//screens
const Home = ({ navigation }) => {
    const { styles, deviceSize } = UseStyle();
    return (
        <View style={styles('center')}>
            <Text>This is the home screen</Text>
            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
            />
        </View>
    );
};

const About = ({ navigation }) => {
    const { styles, deviceSize } = UseStyle();
    return (
        <View style={styles('center')}>
            <Text>This is the about screen</Text>
            <Button
                title="Go back to Home Screen"
                onPress={() => navigation.goBack()} // We added an onPress event which would navigate to the About screen
            />
        </View>
    );
};

//this screen is seperate in drawer menu
const Contact = () => {
    const { styles, deviceSize } = UseStyle();
    return (
        <View style={styles('center')}>
            <Text>This is the contact screen</Text>
        </View>
    );
};


//these screens are accessible via bottom tabs
const Chat = () => {
    const { styles, deviceSize } = UseStyle();
    return (
        <View style={styles('center')}>
            <Text>This is the chat screen</Text>
        </View>
    );
};
const Settings = () => {
    const { styles, deviceSize } = UseStyle();
    return (
        <View style={styles('center')}>
            <Text>This is the settings screen</Text>
        </View>
    );
};



//stack navigators
const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}
const ContactStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
}

//drawer navigator
const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={MainStackNavigator} />
            <Drawer.Screen name="Contact" component={ContactStackNavigator} />
        </Drawer.Navigator>
    );
};

//tab navigation
const Tab = createBottomTabNavigator();
function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={DrawerNavigator} />
            <Tab.Screen name="Chat" component={Chat} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}





//root navigator
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}


export default RootNavigator;
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favorite from 'screens/Favorite';
import MyDreams from 'screens/MyDreams';
import UserData from 'screens/UserData';
import { colors } from 'utils/colors';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.warning,
                tabBarInactiveTintColor: colors.default,
                tabBarAndroidRipple: { borderless: true, color: colors.warning, },
                // tabBarIndicatorContainerStyle: { backgroundColor: colors.superDarkBlue },
                tabBarIndicatorStyle: { backgroundColor: colors.warning },
                tabBarStyle: { backgroundColor: colors.superDarkBlue },

            }}
        >
            <Tab.Screen name="MyData"
                options={{
                    tabBarLabel: "Mi perfil"
                }}
                component={UserData} />
            <Tab.Screen name="Favorite"
                options={{
                    tabBarLabel: "Mis favoritos"
                }}
                component={Favorite} />
            <Tab.Screen name="MyDreams"
                options={{
                    tabBarLabel: "Mis sueños"
                }}
                component={MyDreams} />
        </Tab.Navigator>)
}

export default TabNavigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import Profile from "screens/Profile";
import Terminos from "screens/Terminos";
import CustomDrawer from "components/CustomDrawer";
import { colors } from "utils/colors";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Person3Icon from "./Person3Icon ";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.superDarkBlue,
                    shadowColor: colors.primary,
                },
                headerTitle: "Soñe que...",
                headerTitleStyle: { color: "#fff" },
                drawerInactiveTintColor: colors.default,
                drawerActiveTintColor: colors.warning,
                headerTintColor: "#fff",
            }}
        >
            <Drawer.Screen
                name="Home"
                component={StackNavigation}
                options={{
                    drawerIcon: ({ focused }) => (
                        <MaterialIcons name="home" size={24} color={focused ? colors.warning : colors.default} />),
                }}
            />
            <Drawer.Screen name="Perfil" component={Profile}
                options={{
                    drawerIcon: ({ focused }) => (
                        <Person3Icon color={focused ? colors.warning : colors.default} />),
                }}
            />
            <Drawer.Screen name="Terminos" component={Terminos}
                options={{
                    drawerIcon: ({ focused }) => (
                        <FontAwesome name="legal" size={24} color={focused ? colors.warning : colors.default} />),
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

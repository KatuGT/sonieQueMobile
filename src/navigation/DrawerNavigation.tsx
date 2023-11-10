import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import Profile from 'screens/Profile';
import Terminos from 'screens/Terminos';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigation} />
            <Drawer.Screen name="Perfil" component={Profile} />
            <Drawer.Screen name="Terminos" component={Terminos} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation
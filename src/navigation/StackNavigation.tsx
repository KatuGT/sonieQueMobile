import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home';
import Profile from 'screens/Profile';
import SuenioDetail from 'screens/SuenioDetail';
import SuenioFormulario from 'screens/SuenioFormulario';



const Stack = createStackNavigator();


const StackNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Suenio" component={Home} />
            <Stack.Screen name="SuenioDetalle" component={SuenioDetail} />
            <Stack.Screen name="SuenioFormulario" component={SuenioFormulario} />
        </Stack.Navigator>)
}

export default StackNavigation
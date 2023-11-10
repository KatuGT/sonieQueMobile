import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native'


const SuenioFormulario = () => {

  const navigation = useNavigation()
  
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text className='text-white'>SuenioFormulario</Text>
    </TouchableOpacity>
  )
}

export default SuenioFormulario
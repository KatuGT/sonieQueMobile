import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native'


const SuenioDetail = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text className='text-white'>SuenioDetail</Text>
    </TouchableOpacity>
  )
}

export default SuenioDetail
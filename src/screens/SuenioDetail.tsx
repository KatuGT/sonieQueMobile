import { useNavigation } from '@react-navigation/native';
import { Button } from 'components/Button';
import UserMini from 'components/UserMini';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { Entypo, MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { Chip } from 'components/Chip';
import { useMemo, useRef } from 'react';
import { ImageWrapper, ImageViewer } from 'react-native-reanimated-viewer';
import ComentCard from 'components/ComentCard';

const SuenioDetail = () => {
  const navigation = useNavigation()

  const imageRef = useRef(null);
  const mockData = useMemo(
    () => [
      {
        smallUrl:
          'https://img2.baidu.com/it/u=1835117106,152654887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=556',
        url: 'https://img2.baidu.com/it/u=1835117106,152654887&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=556',
      },
      {
        smallUrl:
          'https://img1.baidu.com/it/u=139191814,3489949748&fm=253&fmt=auto&app=138&f=JPEG?w=491&h=491',
        url: 'https://img1.baidu.com/it/u=139191814,3489949748&fm=253&fmt=auto&app=138&f=JPEG?w=491&h=491',
      },
      {
        smallUrl:
          'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
        url: 'https://img0.baidu.com/it/u=2926715223,1445444764&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
      }
    ],
    [],
  );

  return (
    <LinearGradient
      colors={["#03001A", "#01002E"]}
      className='flex-1 p-3'
    >
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className='text-white'>SuenioDetail</Text>
        </TouchableOpacity>
        <View className='flex flex-row' style={{ columnGap: 8 }}>
          <View className='flex-[5]'>
            <UserMini />
            <Text className='text-white mt-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fuga ex placeat perferendis. Omnis, at repellendus labore ipsa doloremque repudiandae commodi itaque tempore quam, assumenda, in maiores quae qui nesciunt.
            </Text>
            <View className='flex-row mt-6' style={{ columnGap: 8 }}>
              <Chip color='default' text='Caia' variant='bordereded' />
              <Chip color='primary' text='volaba' variant='bordereded' />
              <Chip color='secondary' text='algo' variant='bordereded' />
            </View>
          </View>
          <View className='' style={{ rowGap: 5 }}>
            <Button
              color="secondary"
              variant="bordereded"
              onlyIcon={true}
              startIcon={<MaterialIcons name="loyalty" size={24} />}
            />
            <Button
              color="success"
              variant="bordereded"
              onlyIcon={true}
              startIcon={<Entypo name="arrow-bold-up" size={24} />}
            />
            <Button
              color="warning"
              variant="bordereded"
              onlyIcon={true}
              startIcon={<Entypo name="arrow-bold-down" size={24} />}
            />
            <Button
              color="danger"
              variant="bordereded"
              onlyIcon={true}
              startIcon={<Ionicons name="alert-sharp" size={24} />}
            />
          </View>
        </View>

        <ImageViewer
          ref={imageRef}
          data={mockData.map((el) => ({ key: `key-${el.url}`, source: { uri: el.url } }))}
        />
        <View style={{ flexDirection: 'row' }} className='justify-between mt-8'>
          {mockData.map((el, index) => (
            <ImageWrapper
              key={el.smallUrl}
              viewerRef={imageRef}
              index={index}
              source={{
                uri: el.smallUrl,
              }}
            >
              <Image
                source={{
                  uri: el.smallUrl,
                }}
                style={{ width: 100, height: 100 }}
                className='rounded-xl'
              />
            </ImageWrapper>
          ))}
        </View>
        <View style={{ rowGap: 10 }} className='mt-9'>
          <ComentCard />
          <ComentCard />
          <ComentCard />
          <ComentCard />
          <ComentCard />
          <ComentCard />
        </View>
      </ScrollView>
      <View className=' pt-2 flex-row items-center' style={{ columnGap: 5 }} >
        <TextInput className='border border-secondary border-solid rounded-lg px-1 flex-1 text-white' placeholder='Comentá algo...' placeholderTextColor={'#c1c1c1'} />
        <Feather name="send" size={20} color="white" />
      </View>
    </LinearGradient>
  )
}

export default SuenioDetail
import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {Avatar} from 'react-native-paper';
import {style} from './style';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
const Home = ({navigation}) => {
  console.log(style);
  return (
    <>
      <ScrollView>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{
              uri:
                'https://visitasimprescindibles.com/wp-content/uploads/2020/04/Portada-1.jpg',
            }}
          />
          <Text style={style.title}>Castillo de San Felipe</Text>
        </View>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{
              uri:
                'https://media-cdn.tripadvisor.com/media/photo-s/1c/5c/22/42/rooftop-con-vista-a-la.jpg',
            }}
          />

          <Text style={style.title}>Torre del Reloj</Text>
        </View>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{
              uri:
                'https://www.boats4u.co/images/noticias/razones-visitar-islas-del-rosario-colombia.jpg',
            }}
          />

          <Text style={style.title}>Islas del Rosario</Text>
        </View>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{
              uri:
                'https://2.bp.blogspot.com/-aiJgb5QYndg/VuMPiVPix-I/AAAAAAAAA_M/_WYp9PFoCjwUgComoB1YhbFvEPggOb_ug/s1600/cartagena-colombia.jpg',
            }}
          />

          <Text style={style.title}>Ciudad Amurallada</Text>
        </View>
        <View style={style.container}>
          <Image
            style={style.image}
            source={{
              uri:
                'https://lh3.googleusercontent.com/proxy/YHI-41kyyFzXj72tYP-KpTGTMMkZvJPSdoNA__xWU77LAczzPJ3iraHTUZe5gaoQS_Scmdbq4Zk1ygjmLpYpe-SO-oMpe2aKns_hOa_1bVqxLROnThL_fdAaPlb_od0Zy64awlbY',
            }}
          />

          <Text style={style.title}>Teatro Adolfo Heredia</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

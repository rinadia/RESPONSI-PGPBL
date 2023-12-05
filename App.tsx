import React, {useState, useEffect} from "react";
import { View, Text, FlatList, TouchableOpacity, StatusBar, Image } from "react-native";

const App = () => {

  const[kategori, setKategori] = useState([
      {
        nama: 'Nasi Goreng'
      },
      {
        nama: 'Rendang'
      },
      {
        nama: 'Sate Ayam'
      },
      {
        nama: 'Soto Ayam'
      },
      {
        nama: 'Bakso'
      },
      {
        nama: 'Mie Goreng'
      },
      {
        nama: 'Ayam Goreng'
      },
      {
        nama: 'Gudeg'
      },
      {
        nama: 'Pempek'
      },
      {
        nama: 'Opor Ayam'
      },
    ]);

    const [kategoriSeleksi, setKategoriSeleksi] = useState({
      nama: 'Nasi Goreng',
    });

    const [dataTrending, setDataTrending] = useState([
      {namaResep: 'Nasi Goreng', 
      author: 'Losi Pratama', 
      image: 
      'https://images.unsplash.com/photo-1647093953000-9065ed6f85ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Rendang', 
      author: 'Farid', 
      image: 
      'https://images.unsplash.com/photo-1606143704849-eb181ba1543a?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Sate Ayam', 
      author: 'Felicia', 
      image: 
      'https://images.unsplash.com/photo-1561626423-a51b45aef0a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Soto Ayam', 
      author: 'Indra', 
      image: 
      'https://images.unsplash.com/photo-1677029969063-23ecbb98d0af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Bakso', 
      author: 'Arifin', 
      image: 
      'https://images.unsplash.com/photo-1687426163461-1eeb49c83584?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Mie Goreng', 
      author: 'Eris', 
      image: 
      'https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Ayam Goreng', 
      author: 'Mahmur', 
      image: 
      'https://cdn1-production-images-kly.akamaized.net/1MzOAT1cIcnWDFAeydR4w5mZIk4=/0x0:5472x3084/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3033328/original/031979000_1580109795-shutterstock_574138822.jpg'},
      {namaResep: 'Gudeg', 
      author: 'Jum', 
      image: 
      'https://awsimages.detik.net.id/community/media/visual/2023/06/01/resep-gudeg-jogja-komplet_43.jpeg?w=600&q=90'},
      {namaResep: 'Pempek', 
      author: 'kamto', 
      image: 
      'https://nibble-images.b-cdn.net/nibble/original_images/pempek_paling_enak_di_jakarta_00_6822572595_fnDbRp3RP.jpg'},
      {namaResep: 'Opor Ayam', 
      author: 'Susi', 
      image: 
      'https://img.okezone.com/content/2023/04/20/298/2801873/berapa-kandungan-lemak-yang-dimiliki-opor-ayam-dsI0usH4U2.jpg'},
      {namaResep: 'Gado-Gado', 
      author: 'Narsih', 
      image: 
      'https://resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg'},
      {namaResep: 'Ayam Betutu', 
      author: 'Komang', 
      image: 
      'https://awsimages.detik.net.id/community/media/visual/2021/08/27/resep-ayam-betutu-gilimanuk_43.jpeg?w=1200'},
      {namaResep: 'Rawon', 
      author: 'Suharti', 
      image: 
      'https://bobobox.com/blog/wp-content//uploads/2023/06/Bagaimana-Cara-Membuat-Rawon-Daging-Sederhana-819x1024.jpg'},
      {namaResep: 'Nasi Padang', 
      author: 'Pergaulan', 
      image: 
      'https://assets-pergikuliner.com/4o-dKncqKNS6QQbFDqM52WkrK0o=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/12013/picture-1537766225.jpeg'},
      {namaResep: 'Pecel Lele', 
      author: 'Jack', 
      image: 
      'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/kulinear/2021/01/133933895_3569592479785744_7554704832760385227_n.jpg'},
      {namaResep: 'Coto Makasar', 
      author: 'Losari', 
      image: 
      'https://asset.kompas.com/crops/HwvWgOyjELRqljZh2bdXEpR1t4M=/32x7:1000x653/750x500/data/photo/2022/06/19/62ae88c4a1690.jpeg'},
      {namaResep: 'Nasi Liwet', 
      author: 'Dwi', 
      image: 
      'https://assets-pergikuliner.com/aF9T7n8e1AE8NnYx5XrGx7Rycms=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/25357/Nasi_Liwet__blog.tokowahab.com_.jpg'},
      {namaResep: 'Empal Gentong', 
      author: 'Bayu', 
      image: 
      'https://awsimages.detik.net.id/community/media/visual/2023/06/30/resep-empal-gentong-cirebon_43.jpeg?w=1200'},
      {namaResep: 'Gulai', 
      author: 'Wido', 
      image: 
      'https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-gulai-kambing-sederhana.jpg'},
      {namaResep: 'Kerak Telor', 
      author: 'Halim', 
      image: 
      'https://cdn0-production-images-kly.akamaized.net/Dm0WXFWjKVDpbuv4g72BcL8oEKQ=/0x251:6000x3633/673x378/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4333141/original/094643300_1677050370-shutterstock_2197062627.jpg'},
      {namaResep: 'Seblak', 
      author: 'Jesica', 
      image: 
      'https://cdn.idntimes.com/content-images/community/2020/08/img-20200819-220706-b1e83aed75d8cbd775f13f829f1bed1d.jpg'},
    
    ]);

    const [dataLokasi, setDatalokasi] = useState([
      {namaResep: 'Nasi Goreng', 
      author: 'Losi Pratama', 
      image: 
      'https://images.unsplash.com/photo-1647093953000-9065ed6f85ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      
      {namaResep: 'Rendang', 
      author: 'Farid', 
      image: 
      'https://images.unsplash.com/photo-1606143704849-eb181ba1543a?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Sate Ayam', 
      author: 'Felicia', 
      image: 
      'https://images.unsplash.com/photo-1561626423-a51b45aef0a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Soto Ayam', 
      author: 'Indra', 
      image: 
      'https://images.unsplash.com/photo-1677029969063-23ecbb98d0af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Bakso', 
      author: 'Arifin', 
      image: 
      'https://images.unsplash.com/photo-1687426163461-1eeb49c83584?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Mie Goreng', 
      author: 'Eris', 
      image: 
      'https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
      {namaResep: 'Ayam Goreng', 
      author: 'Mahmur', 
      image: 
      'https://cdn1-production-images-kly.akamaized.net/1MzOAT1cIcnWDFAeydR4w5mZIk4=/0x0:5472x3084/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3033328/original/031979000_1580109795-shutterstock_574138822.jpg'},
      {namaResep: 'Gudeg', 
      author: 'Jum', 
      image: 
      'https://awsimages.detik.net.id/community/media/visual/2023/06/01/resep-gudeg-jogja-komplet_43.jpeg?w=600&q=90'},
      {namaResep: 'Pempek', 
      author: 'kamto', 
      image: 
      'https://nibble-images.b-cdn.net/nibble/original_images/pempek_paling_enak_di_jakarta_00_6822572595_fnDbRp3RP.jpg'},
      {namaResep: 'Opor Ayam', 
      author: 'Susi', 
      image: 
      'https://img.okezone.com/content/2023/04/20/298/2801873/berapa-kandungan-lemak-yang-dimiliki-opor-ayam-dsI0usH4U2.jpg'},
      {namaResep: 'Gado-Gado', 
      author: 'Narsih', 
      image: 
      'https://resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg'},
      {namaResep: 'Ayam Betutu', 
      author: 'Komang', 
      image: 
      'https://awsimages.detik.net.id/community/media/visual/2021/08/27/resep-ayam-betutu-gilimanuk_43.jpeg?w=1200'},
      {namaResep: 'Rawon', 
      author: 'Suharti', 
      image: 
      'https://bobobox.com/blog/wp-content//uploads/2023/06/Bagaimana-Cara-Membuat-Rawon-Daging-Sederhana-819x1024.jpg'},
      {namaResep: 'Nasi Padang', 
      author: 'Pergaulan', 
      image: 
      'https://assets-pergikuliner.com/4o-dKncqKNS6QQbFDqM52WkrK0o=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/12013/picture-1537766225.jpeg'},
      {namaResep: 'Pecel Lele', 
      author: 'Jack', 
      image: 
      'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/kulinear/2021/01/133933895_3569592479785744_7554704832760385227_n.jpg'},
      {namaResep: 'Coto Makasar', 
      author: 'Losari', 
      image: 
      'https://asset.kompas.com/crops/HwvWgOyjELRqljZh2bdXEpR1t4M=/32x7:1000x653/750x500/data/photo/2022/06/19/62ae88c4a1690.jpeg'},
      {namaResep: 'Nasi Liwet', 
      author: 'Dwi', 
      image: 
      'https://assets-pergikuliner.com/aF9T7n8e1AE8NnYx5XrGx7Rycms=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/bootsy/image/25357/Nasi_Liwet__blog.tokowahab.com_.jpg'},
      {namaResep: 'Empal Gentong', 
      author: 'Bayu', 
      image: 
      'https://awsimages.detik.net.id/community/media/visual/2023/06/30/resep-empal-gentong-cirebon_43.jpeg?w=1200'},
      {namaResep: 'Gulai', 
      author: 'Wido', 
      image: 
      'https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-gulai-kambing-sederhana.jpg'},
      {namaResep: 'Kerak Telor', 
      author: 'Halim', 
      image: 
      'https://cdn0-production-images-kly.akamaized.net/Dm0WXFWjKVDpbuv4g72BcL8oEKQ=/0x251:6000x3633/673x378/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4333141/original/094643300_1677050370-shutterstock_2197062627.jpg'},
      {namaResep: 'Seblak', 
      author: 'Jesica', 
      image: 
      'https://cdn.idntimes.com/content-images/community/2020/08/img-20200819-220706-b1e83aed75d8cbd775f13f829f1bed1d.jpg'},
    
    ]);

  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <StatusBar backgroundColor='#F5F5F5' barStyle="dark-content"/>
      <View style={{marginHorizontal: 20, marginBottom: 20, marginTop: 20}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Makanan Khas Indonesia</Text>
    <View>
    </View>

    <FlatList
    data={kategori}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{marginLeft: 10}}
    renderItem={({item})=>(
    <TouchableOpacity
    style={{
      marginRight: 5, 
      backgroundColor: kategoriSeleksi.nama == item.nama ? '#4169E1' : '#FFF', 
      elevation: 3,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginBottom: 10,
      borderRadius: 8,
      marginLeft: 5,
      }}>
      <Text 
        style={{
          color: kategoriSeleksi.nama == item.nama ? '#FFF' : "#212121",
          }}>
            {item.nama}
          </Text>
    </TouchableOpacity>
    )}
    />
    </View>

    <View 
    style={{
      marginHorizontal: 20,
      marginBottom: 10, 
      marginTop: 20, 
      flexDirection: 'row'
    }}>        
      <Text style={{fontSize: 18, fontWeight: 'bold', color:'#212121'}}>
        Trending
      </Text>
        <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Text style={{fontSize: 14}}>Lihat Semua</Text>
          </View>
      </View>
      
      <View style={{flex: 1}}>
        <FlatList
    data={dataTrending}
    horizontal
    showsVerticalScrollIndicator={false}
    style={{marginLeft: 10}}
    renderItem={({item})=>(
    <TouchableOpacity
    style={{
      marginRight: 5, 
      backgroundColor: '#FFF',
      elevation: 3,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginBottom: 10,
      borderRadius: 15,
      marginLeft: 5,
      }}>
        <Image 
        source={{uri: item.image}} 
        style={{
          width: 200, 
          height: 150, 
          marginTop: 10, 
          marginBottom: 10,
          borderRadius: 3,
        }} 
        resizeMode={'cover'}
        />
      <Text 
        style={{
          color:  '#212121',
          fontSize: 18,
          fontWeight: 'bold'
          }}>
            {item.namaResep}
          </Text>
          <Text>{item.author}</Text>
    </TouchableOpacity>
    )}
    />
    </View>

    <View 
    style={{
      marginHorizontal: 20,
      marginBottom: 10, 
      marginTop: 20, 
      flexDirection: 'row'
    }}>        
      <Text style={{fontSize: 18, fontWeight: 'bold', color:'#212121'}}>
        Lokasi Makanan Khas Indonesia
      </Text>
        <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
          <Text style={{fontSize: 14}}>Lihat Semua</Text>
          </View>
      </View>
      
      <View style={{flex: 1}}>
        <FlatList
    data={dataTrending}
    horizontal
    showsVerticalScrollIndicator={false}
    style={{marginLeft: 10}}
    renderItem={({item})=>(
    <TouchableOpacity
    style={{
      marginRight: 5, 
      backgroundColor: '#FFF',
      elevation: 3,
      paddingHorizontal: 15,
      paddingVertical: 8,
      marginBottom: 10,
      borderRadius: 15,
      marginLeft: 5,
      }}>
        <Image 
        source={{uri: item.image}} 
        style={{
          width: 200, 
          height: 150, 
          marginTop: 10, 
          marginBottom: 10,
          borderRadius: 3,
        }} 
        resizeMode={'cover'}
        />
      <Text 
        style={{
          color:  '#212121',
          fontSize: 18,
          fontWeight: 'bold'
          }}>
            {item.namaResep}
          </Text>
          <Text>{item.author}</Text>
    </TouchableOpacity>
    )}
    />
    </View>

    </View>
  );
};

export default App;
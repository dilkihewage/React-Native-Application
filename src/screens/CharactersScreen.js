import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function CharactersScreen() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Thrones API
  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Render each character
  const renderCharacter = ({ item }) => (
    <View style={{ backgroundColor: '#222', margin: 10, borderRadius: 10, padding: 10, alignItems: 'center' }}>
      <Image source={{ uri: item.imageUrl }} style={{ width: wp(40), height: hp(20), borderRadius: 10 }} />
      <Text style={{ color: '#fff', fontSize: hp(2.5), fontWeight: 'bold', marginTop: 10 }}>{item.fullName}</Text>
      <Text style={{ color: 'gray', fontSize: hp(2) }}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#000', padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCharacter}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

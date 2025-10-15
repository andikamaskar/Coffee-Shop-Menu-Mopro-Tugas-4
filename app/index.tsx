import CoffeeCard from '@/components/CoffeeCard';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

interface Coffee {
  coffee_id: string;
  coffee_title: string;
  coffee_detail: string;
  coffee_thumbnails: string;
  coffee_poster: string;
}

export default function CoffeeMenu() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://coffee-shop-menu-backend.vercel.app/coffee")
      .then((res) => res.json())
      .then((data) => setCoffees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={coffees}
        keyExtractor={(item) => item.coffee_id}
        renderItem={({ item }) => (
          <CoffeeCard 
            coffee={item}
            onPress={() =>
              router.push({
                pathname: '/${item.coffee_id}',
                params: { coffee: JSON.stringify(item)},
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    paddingVertical: 10,
  },
});

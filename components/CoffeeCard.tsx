import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "../styles/coffeeCard";

interface Coffee{
    coffee_id: string;
    coffee_title: string;
    coffee_detail: string;
    coffee_poster: string;
}

export default function CoffeeCard({
    coffee,
    onPress,
}: {
    coffee: Coffee;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={{ uri: `https://coffee-shop-menu-backend.vercel.app/images/${coffee.coffee_thumbnails}` }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.title}>{coffee.coffee_title}</Text>
                <Text numberOfLines={3} style={styles.desc}>{coffee.coffee_detail}</Text>
            </View>
        </TouchableOpacity>
    );
}
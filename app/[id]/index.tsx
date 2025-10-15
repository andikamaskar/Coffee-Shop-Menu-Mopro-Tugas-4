import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CoffeeDetail() {
    const { coffee } = useLocalSearchParams();
    const data = JSON.parse(coffee as string);
    const [quantity, setQuantity] = useState(1);
    const price = data.coffee_price || 20000;
    const total = quantity * price;
    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleOrder = () => {
        Alert.alert(
            "Confirm Order",
            `Order ${quantity}x ${data.coffee_title} for Rp${total.toLocaleString()} ?`,
            [
                { text: "Cancel", style: "cancel" },
                { 
                    text: "Order Now", 
                    onPress: () => {
                        Alert.alert("Success", `You ordered ${quantity}x ${data.coffee_title}!`);
                    }
                }
            ]
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: `https://coffee-shop-menu-backend.vercel.app/images/${data.coffee_poster}` }}
                    style={styles.thumbnail}
                />
                <View style={styles.overlay}>
                    <Text style={styles.title}>{data.coffee_title}</Text>
                </View>
            </View>
            <Text style={styles.detail}>{data.coffee_detail}</Text>
            <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>Price:</Text>
                <Text style={styles.priceValue}>Rp{price.toLocaleString()}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                    <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                    <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.totalText}>Total: Rp{total.toLocaleString()}</Text>
            <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                <Text style={styles.orderText}>Order Now</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: 300,
        marginBottom: 20,
    },
    thumbnail: {
        width: "100%",
        height: "100%",
        borderRadius: 15,
    },
    overlay: {
        position: "absolute",
        bottom: 15,
        left: 15,
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 12,
    },
    title: {
        fontSize: 20,
        fontFamily: "Poppins-Bold",
        color: "#fff",
        textShadowColor: "#000",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    detail: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        color: "#5D4037",
        textAlign: "justify",
        lineHeight: 20,
        marginBottom: 20,
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    priceLabel: {
        fontSize: 16,
        fontFamily: "Poppins-Medium",
        color: "#3E2723",
    },
    priceValue: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#3E2723",
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    quantityButton: {
        backgroundColor: "#6F4E37",
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 8,
        marginHorizontal: 10,
    },
    quantityButtonText: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Poppins-Bold",
    },
    quantityText: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        color: "#3E2723",
    },
    totalText: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#3E2723",
        marginVertical: 10,
    },
    orderButton: {
        backgroundColor: "#6F4E37",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 10,
    },
    orderText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Poppins-Bold",
    },
});

import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../Utils/MyColors";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";

const Orderplaced = () => {
  const nav = useNavigation();
  const [purchaseDateTime, setPurchaseDateTime] = useState(null);
  const [purchasedItem, setPurchasedItem] = useState(null);

  useEffect(() => {
    // Simulação de dados do item comprado
    const item = {
      name: "Produto Exemplo",
      price: 50.0,
    };

    const purchaseDate = moment().format("DD/MM/YYYY");
    const purchaseTime = moment().format("HH:mm:ss");

    setPurchaseDateTime({ date: purchaseDate, time: purchaseTime });
    setPurchasedItem(item);

    setTimeout(() => {
      nav.navigate("Home");
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor="white" />
      <MaterialIcons name="verified" size={90} color={myColors.primary} />
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Compra efetuada em {purchaseDateTime?.date} às {purchaseDateTime?.time}
      </Text>
      {purchasedItem && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Item Comprado:
          </Text>
          <Text>{purchasedItem.name}</Text>
          <Text>Preço: R$ {purchasedItem.price.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
};

export default Orderplaced;

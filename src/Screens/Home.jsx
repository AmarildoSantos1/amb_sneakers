import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTitle from "../Components/ProductsTitle";
import ProductsCarousel from "../Components/ProductsCarousel";
import { shoes, shirt } from "../Utils/Date";

const Home = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const handleFavoriteToggle = (item) => {
    const isFavorite = favoriteItems.some((favItem) => favItem.id === item.id);

    if (isFavorite) {
      // Remove o item dos favoritos
      const updatedFavorites = favoriteItems.filter(
        (favItem) => favItem.id !== item.id
      );
      setFavoriteItems(updatedFavorites);
    } else {
      // Adiciona o item aos favoritos
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingHorizontal: 0,
          paddingTop: 10,
        }}
      >
        <View style={{ gap: 20, paddingBottom: 20 }}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          
          {/* Seção de Itens Favoritos */}
          <ProductsTitle title="Itens Favoritos" />
          {favoriteItems.length === 0 ? (
            <Text>Nenhum item favorito.</Text>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 10 }}
            >
              {favoriteItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleFavoriteToggle(item)}
                  style={{
                    marginRight: 20,
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 8,
                  }}
                >
                  <Text>{item.name}</Text>
                  <Text>Preço: R$ {item.price.toFixed(2)}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          {/* Seção de Ofertas */}
          <ProductsTitle title="Ofertas" />
          <ProductsCarousel data={shoes} />

          {/* Seção de Mais Vendidos */}
          <ProductsTitle title="Mais vendidos" />
          <ProductsCarousel data={shirt} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

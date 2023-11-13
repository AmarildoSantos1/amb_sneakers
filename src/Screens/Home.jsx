import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTitle from "../Components/ProductsTitle";
import ProductsCarousel from "../Components/ProductsCarousel";
import { shoes, shirt } from "../Utils/Date";


const Home = () => {
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
          paddingHorizontal:0,
          paddingTop: 10,
        }}
      >
        <View style={{ gap: 20, paddingBottom: 20 }}>
          <HomeIcon />
          <HomeSearch />
          <HomeBanner />
          <ProductsTitle title="Ofertas" />
          <ProductsCarousel data={shoes} />
          <ProductsTitle title="Mais vendidos" />
          <ProductsCarousel data={shirt} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
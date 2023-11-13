import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { myColors } from "../Utils/MyColors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const nav = useNavigation();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [isVisbile, setIsVisible] = useState(true);

  const { email, password } = loginCredentials;

  const loginUser = () => {
    // Simulação de login (credenciais pré-definidas)
    const predefinedEmail = "user@hotmail.com";
    const predefinedPassword = "123456";

    if (email === predefinedEmail && password === predefinedPassword) {
      // Lógica de login simulada com um alerta
      AsyncStorage.setItem("id", "success");
      nav.replace("Home");
    } else {
      Alert.alert("Credenciais inválidas");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("../assets/mainIcon.png")}
        />

        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text
            style={{ color: myColors.third, fontSize: 24, fontWeight: "500" }}
          >
            Login
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "grey",
              marginTop: 10,
            }}
          >
            Insira seu email e senha
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(val) => {
              setLoginCredentials({ ...loginCredentials, email: val });
            }}
            keyboardType="email-address"
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "grey",
              marginTop: 40,
            }}
          >
            Senha
          </Text>
          <View
            style={{
              borderColor: "#E3E3E3",
              borderBottomWidth: 2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput
              value={password}
              onChangeText={(val) => {
                setLoginCredentials({ ...loginCredentials, password: val });
              }}
              secureTextEntry={isVisbile}
              maxLength={6}
              keyboardType="ascii-capable"
              style={{
                fontSize: 17,
                marginTop: 15,
                flex: 0.9,
              }}
            />
            <Ionicons
              onPress={() => {
                setIsVisible(!isVisbile);
              }}
              name={isVisbile == true ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="black"
            />
          </View>

          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "black",
              marginTop: 15,
              textAlign: "right",
            }}
          >
            Esqueceu a senha?
          </Text>
          <TouchableOpacity
            onPress={loginUser}
            style={{
              backgroundColor: myColors.primary,
              marginTop: 10,
              height: 70,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 19,
                color: myColors.secondary,
                fontWeight: "500",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Não tem conta?</Text>
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Signup");
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: myColors.primary,
                  fontWeight: "600",
                }}
              >
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

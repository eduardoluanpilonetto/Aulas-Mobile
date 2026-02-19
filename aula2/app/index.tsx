import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Index() {
  const [corFundo, setCor] = useState("#1C1C1C");

  const mudaCor = () => {
    setCor("red");
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: corFundo
      }}
    >
      <View
        style={{
          width: 200,       
          height: 300,      
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          borderRadius: 10
        }}
      >
        <Image 
          source={require('../assets/images/vamp-e1682444726545.webp')} 
          style={{
            width: 75,
            height: 75,
            borderRadius: 75,
          }}
          resizeMode="cover"
        />
        <Text style={{padding: 10}}>Nome Do Usuário: Joãozinho</Text>
        <Text style={{padding: 10}}>Cidade: Chique Chique Bahia</Text>
        <Pressable style={{
          backgroundColor: "orange",
          borderRadius: 10,
          width: 100,
          height: 35,
          alignItems: "center",
          justifyContent: "center",
          padding: 10
        }}
        onPress={mudaCor}
        > 
          <Text><Image 
            source={require('../assets/images/vamp-e1682444726545.webp')} 
            style={{
              width: 20,
              height: 20,
              borderRadius: 75,
            }}
            resizeMode="cover"
          />Detalhes</Text>
        </Pressable>
      </View>
    </View>
  );
}
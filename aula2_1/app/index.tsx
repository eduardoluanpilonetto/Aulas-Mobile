import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const largura = "40%";
  const [corCabecalho, setCorCabecalho] = useState("red");

   return (
    <>
      <Pressable onPress={()=>setCorCabecalho("red")} style={{
        backgroundColor: corCabecalho,
        alignItems: "center",
        justifyContent: "center",
        height: 120
      }}>
        <Text>Cabeçalho</Text>
      </Pressable>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Pressable style={{
          width: largura,
          margin: 5,
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center"
        }} onPress={()=>setCorCabecalho("blue")}>
          <Text>Produto 1</Text>
        </Pressable>
        <Pressable style={{
          width: largura,
          margin: 5,
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center"
        }} onPress={()=>setCorCabecalho("orange")}>
          <Text>Produto 2</Text>
        </Pressable>
        <Pressable style={{
          width: largura,
          margin: 5,
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center"
        }}  onPress={()=>setCorCabecalho("yellow")}>
          <Text>Produto 3</Text>
        </Pressable>
        <Pressable style={{
          width: largura,
          margin: 5,
          padding: 5,
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "blue",
          alignItems: "center",
          justifyContent: "center"
        }}  onPress={()=>setCorCabecalho("green")}>
          <Text>Produto 4</Text>
        </Pressable>
      </View>
    </>
  );
}

import { Pressable, Text, View } from "react-native";
import { meucomponente } from "./componentes/Componente";

export default function Index() {
  const componente = () => {
    return (
      <Text style={{
        color: "white",
        fontWeight: "bold",
        padding: 10,
        fontSize: 18
      }}>
        Teste
      </Text>
    );
  }

  	return (
    		<View style={{
            backgroundColor: "red",
            width: "100%",
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        }}>
          {meucomponente()}
          {componente()}
          <Pressable style={{
            backgroundColor: "cyan",
            width: 120,
            height: 30,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            margin: 10
          }}>
             <Text>Sair</Text>
          </Pressable>
        </View>
  	)
}


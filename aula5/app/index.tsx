import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

class Usuario {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string
  ) {}
}

interface ItemProps {
  usuario: Usuario;
}

const Item = ({ usuario }: ItemProps) => {
  const cor = usuario.email.endsWith("biz") ? 'red': 'blue';
  return (
    <View style={{
      backgroundColor: cor,
      borderWidth: 2,
      borderRadius: 10,
      width: "80%",
      alignItems: "center"
    }}>
      <Text style={{ padding: 10, fontSize: 18 }}>Nome: {usuario.name}</Text>
      <Text style={{ padding: 10, fontSize: 18 }}>Usuario: {usuario.email}</Text>
      <Text style={{ padding: 10, fontSize: 18 }}>Senha: {usuario.username}</Text>
    </View>
  )
};

export default function Index() {
  const [dados, setDados] = useState<Usuario[]>([]);

  useEffect(() => {
    buscarDados();
  }, []);

  const buscarDados = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datajson = await response.json();

      // Converte para array de Usuario
      const usuarios = datajson.map(
        (u: any) => new Usuario(u.id, u.name, u.username, u.email)
      );

      setDados(usuarios);
    } catch {
      console.log("erro ao buscar dados");
    }
  };

  return (
    <View style={{
        alignItems:'center',
        justifyContent:'center'
      }}>
      <FlatList
        data={dados}
        renderItem={({ item }) => <Item usuario={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

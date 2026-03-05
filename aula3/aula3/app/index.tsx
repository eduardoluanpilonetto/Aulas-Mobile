import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  const salvarDados = () => {

    if(nome.trim() == ''){
      Alert.alert("Error", "Digite o nome");
      return;
    }
    if(email.trim() == ''){
      Alert.alert("Error", "Digite o email");
      return;
    }
    if(parseInt(idade ?? 0) < 0 || parseInt(idade ?? 0) > 99){
      Alert.alert("Error", "Digite uma idade valida");
      return;
    }
    Alert.alert("Sucesso", "Dados Salvos com sucesso");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Button title="Salvar" onPress={salvarDados} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
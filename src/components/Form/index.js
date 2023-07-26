import React, { useState } from "react"
import {
  Text,
  TextInput,
  View,
  Vibration,
  TouchableOpacity,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native"
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form() {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")
  const [errorMessage, setErrorMessage] = useState(null)
  const [imcList, setImcList] = useState([])

  function imcCalculator() {
    let heightFormat = height.replace(",", ".")
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2) //2 casas decimais
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
    setImc(totalImc)
  }

  function verificationImc() {
    if (imc == null) {
      setErrorMessage("Campo obrigatório*")
      Vibration.vibrate(100)
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu IMC é igual:")
      setTextButton("Calcular Novamente")
      setErrorMessage(null)
    } else {
      verificationImc()
      setImc(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e altura")
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
          />

          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 70.5"
            keyboardType="numeric"
          />

          <TouchableOpacity
            onPress={() => validationImc()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : 
        <View style={styles.exhibitionResult}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            onPress={() => validationImc()}
            style={styles.buttonCalculator}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
     }
     <FlatList
     showsVerticalScrollIndicator={false}
     style = {styles.listImc}
     data = {imcList.reverse()}
     renderItem = {({item}) => {
        return(           
            <Text style= {styles.resultImcItem}>
                <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                {item.imc}
            </Text>
        )
     }}
     keyExtractor={(item) => {
        item.id
     }}
     />
    </View>
  )
}

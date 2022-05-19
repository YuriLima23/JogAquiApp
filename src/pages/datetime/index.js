import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity, KeyboardAvoidingViewBase, ActivityIndicator, Keyboard } from 'react-native'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import Title from '../../components/title/Title'
import { routes } from '../../routes/routes'
import styles from './style'
import { colors } from '../../../globalStyle/colors'
import EntytoIcon from 'react-native-vector-icons/Entypo'
import { DateFormatter } from '../../utils/formatter'
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimeScreen = () => {
     const [time, setTime] = useState(new Date());
     const [period, setPeriod] = useState(new Date());
     const [showPickerDate, setShowPickerDate] = useState(false);
     const [showPickerTime, setShowPickerTime] = useState(false);

     const [dataAddress, setDataAddress] = useState([]);


     const [timeError, setTimeError] = useState([false, ""]);
     const [periodError, setPeriodError] = useState([false, ""]);

     let dateNow = new Date()
     const navigation = useNavigation()

     const nextPage = () => {
          navigation.navigate(routes.code)
     }

     return (
          <View style={styles.container}>
               <ScrollView contentContainerStyle={styles.scroll} >
                    <View style={styles.regionInput}>
                         <Text style={styles.title}>Defina a data de horario do recolhimento.</Text>
                         <TouchableOpacity onPress={() => setShowPickerDate(!showPickerDate)}>
                              <Input
                                   value={period.toLocaleDateString("pt-br")}
                                   editable={false}
                                   placeholder="23/04/1999" />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => setShowPickerTime(!showPickerTime)}>
                              <Input
                                   onChangeText={(text) => setTime(text)}
                                   value={time.toLocaleTimeString("pt-br")}
                                   keyboardType={"phone-pad"}
                                   editable={false}
                                 
                                   />
                         </TouchableOpacity>
                         <View style={styles.regionButton}>
                              <Button smallButton onPress={() => navigation.navigate(routes.recycle)} title="Cancelar" />
                              <Button smallButton onPress={() => navigation.navigate(routes.selectType)} title="Proximo" />
                         </View>
                    </View>
               </ScrollView>
               {showPickerDate &&
                    <DateTimePicker
                         testID="dateTimePicker"
                         value={period}
                         mode={"date"}
                         is24Hour={true}
                         display="default"
                         minimumDate={new Date()}
                         onChange={(event, selectedDated) => {
                              if (selectedDated) {

                                   setPeriod(selectedDated);
                              }
                              setShowPickerDate(!showPickerDate);

                         }}
                    />}
               {showPickerTime &&
                    <DateTimePicker
                         testID="dateTimePicker"
                         value={time}
                         mode={"time"}
                         is24Hour={true}
                         minimumDate={new Date().getTime() * 60 * 60 * 1000}
                         display="default"
                         onChange={(event, selectedTime) => {
                              if (selectedTime) {
                                   setTime(selectedTime)
                              }
                              setShowPickerTime(!showPickerTime)
                         }}
                    />}
          </View >
     )
}
export default DateTimeScreen
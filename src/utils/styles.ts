import { StyleSheet } from 'react-native'
import {PickerSelectProps} from 'react-native-picker-select'

export const householdStyles = StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
    },
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    inputContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: 1,
    },
    input: {
      flex: 1,
      margin: 5,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
    },
    buttonsContainer: {
      flexDirection: 'row', 
      alignItems: 'center', 
      padding: 1,
    },
    checkbox: {
      height: 20,
      width: 20,
      borderWidth: 1,
      borderColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    checked: {
      height: 10,
      width: 10,
      backgroundColor: 'black',
    },
    pagenationContainer: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    pagenationButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginHorizontal: 10,
    },
    householdContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    householdText: {
      marginHorizontal: 5,
    },
  });
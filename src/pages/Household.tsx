 import  { useEffect, useState } from 'react'
 import { View, Text, Button, Modal } from 'react-native'
 import { Picker } from '@react-native-picker/picker'
 import { householdStyles } from '../utils/styles'
 import RNPickerSelect from 'react-native-picker-select'


const Household = () => {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const lastYear = currentYear - 1
    const currentMonth = currentDate.getMonth() + 1

    const [year, setYear] = useState(currentYear)
    const [month, setMonth] = useState(currentMonth)

    useEffect(() => {

    }, [year, month])

    return (
        <View>
            <RNPickerSelect
                onValueChange={(value) => setYear(value)}
                items={[
                    { label: lastYear.toString(), value: lastYear.toString()},
                    { label: currentYear.toString(), value: currentYear.toString()}
                ]}
            />
            <Text>{month}月の生活費</Text>
        </View>
    )
}

export default Household
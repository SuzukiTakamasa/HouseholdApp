 import  { useEffect, useState } from 'react'
 import { View, Text, Button, Modal } from 'react-native'
 import { useTailwind } from 'tailwindcss-react-native'
 import { householdStyles } from '../utils/styles'
 import RNPickerSelect from 'react-native-picker-select'


const Household = () => {
    const tailwind = useTailwind()

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
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
                    { label: (year-1).toString(), value: year-1},
                    { label: year.toString(), value: year}
                ]}
            />
        </View>
    )
}

export default Household
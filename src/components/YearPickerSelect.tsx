import  { useState } from 'react'
import { View } from 'react-native'
import RNPickerSelect, { PickerSelectProps } from 'react-native-picker-select'
import { householdStyles } from '../utils/styles'


const YearPickerSelect = () => {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const lastYear = currentYear - 1

    const [year, setYear] = useState(currentYear)

    return (
        <View style={householdStyles.headerContainer}>
            <RNPickerSelect
                onValueChange={(value) => setYear(value)}
                items={[
                    { label: lastYear.toString(), value: lastYear.toString()},
                    { label: currentYear.toString(), value: currentYear.toString()}
                ]}
                placeholder={{label: "年を選択...", value: null}}
            />
        </View>
    )
}

export default YearPickerSelect
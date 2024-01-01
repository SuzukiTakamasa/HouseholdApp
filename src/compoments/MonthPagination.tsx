import { useState } from 'react'
import { View, Button } from 'react-native'
import { householdStyles } from '../utils/styles'


const MonthPagination = () => {
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1

    const [month, setMonth] = useState(currentMonth)

    return (
        <View style={householdStyles.pagenationContainer}>
            <View style={householdStyles.pagenationButtons}>
                <Button title="先月の家計簿" onPress={() => setMonth(m => m - 1)}/>
                <View style={{ flex: 1 }}/>
                <Button title="来月の家計簿" onPress={() => setMonth(m => m + 1)}/>
            </View>
        </View>
    )
}
 import  React, { useEffect, useState } from 'react'
 import { TouchableOpacity, View, Text, TextInput, Button } from 'react-native'
 import { householdStyles } from '../utils/styles'
 import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select'


const Household = () => {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const lastYear = currentYear - 1
    const currentMonth = currentDate.getMonth() + 1
    const initializedCheckedItems: number[] = []

    const [year, setYear] = useState(currentYear)
    const [month, setMonth] = useState(currentMonth)
    const [formCount, setFormCount] = useState(1)
    const [isDefault, setIsDefault] = useState(false)
    const [checkedItems, setCheckedItems] = useState(initializedCheckedItems)


    const handleSetIsDefault = (index: number) => {
        setIsDefault(!isDefault)
        !checkedItems.includes(index)
        ? setCheckedItems([...checkedItems, index])
        : setCheckedItems(checkedItems.filter(i => i !== index))
    }

    const renderInputForm = () => {
        const inputForms = []
        for (let i = 1; i < formCount + 1; i++) {
            inputForms.push(
                <View key={i} style={householdStyles.inputContainer}>
                    <TouchableOpacity onPress={() => handleSetIsDefault(i)} style={householdStyles.checkbox}>
                        {checkedItems.includes(i) && <View style={householdStyles.checked}/>}
                    </TouchableOpacity>
                    <TextInput style={householdStyles.input} placeholder="項目名"/>
                    <TextInput style={householdStyles.input} placeholder="金額"/>
                    <Button title="保存"/>
                </View>
            )
        }
        return inputForms
    }

    useEffect(() => {

    }, [year, month])

    return (
        <>
            <View style={householdStyles.headerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setYear(value)}
                    items={[
                        { label: lastYear.toString(), value: lastYear.toString()},
                        { label: currentYear.toString(), value: currentYear.toString()}
                    ]}
                    placeholder={{label: "年を選択...", value: null}}
                />
                <Text style={householdStyles.item}>{month}月の生活費</Text>
            </View>
            {renderInputForm()}
            <View style={householdStyles.buttonsContainer}>
                <Button title="項目を追加" onPress={() => setFormCount(n => n + 1)}/>
                {formCount >= 2 && <Button title="項目を削除" onPress={() => setFormCount(n => n -1)}/>}
            </View>
            <View style={householdStyles.pagenationContainer}>
                <View style={householdStyles.pagenationButtons}>
                    <Button title="先月の家計簿" onPress={() => setMonth(m => m - 1)}/>
                    <View style={{ flex: 1 }}/>
                    <Button title="来月の家計簿" onPress={() => setMonth(m => m + 1)}/>
                </View>
            </View>
        </>
    )
}

export default Household
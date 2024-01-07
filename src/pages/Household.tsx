 import  React, { useEffect, useState } from 'react'
 import { TouchableOpacity, View, Text, TextInput, Button } from 'react-native'
 import { householdStyles } from '../utils/styles'
 import RNPickerSelect, {PickerSelectProps} from 'react-native-picker-select'
 import FirestoreHandler from '../utils/firestore'
 import { HouseholdData } from '../utils/constants'


const Household = () => {

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const lastYear = currentYear - 1
    const currentMonth = currentDate.getMonth() + 1

    const [year, setYear] = useState(currentYear)
    const [month, setMonth] = useState(currentMonth)
    const [formCount, setFormCount] = useState(0)
    const [households, setHouseholds] = useState<HouseholdData[]>([])

    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(0)
    const [isDefault, setIsDefault] = useState(false)
    const [version, setVersion] = useState(0)


    const getHouseholds = async () => {
        const fh = new FirestoreHandler()
        const response = await fh.get('household', [
            {field: 'month', operator: '==', value: month},
            {field: 'year', operator: '==',value: year}
        ]) as HouseholdData[]
        return response
    }

    const saveHouseholds = () => {
        const fh = new FirestoreHandler()
        fh.add('household', {
          year: year,
          month: month,
          item: item,
          amount: amount,
          isDefault: isDefault,
          version: version
        })
    }

    const updateHousehold = (docId: string) => {
        const fh = new FirestoreHandler()
        fh.update('household', {
          year: year,
          month: month,
          item: item,
          amount: amount,
          isDefault: isDefault,
          version: version
        },
        docId
        )
    }

    useEffect(() => {
        const fetchHousehold = async () => {
            const households = await getHouseholds()
            setHouseholds(households)
        }
        fetchHousehold()
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
            {households.map((household, i) => {
                return (
                <View key={i} style={householdStyles.households}>
                    <Text>{household.item}</Text>
                    <Text>{household.amount}</Text>
                </View>
                )
            })}
            {formCount == 1 &&
                <View style={householdStyles.inputContainer}>
                <TouchableOpacity onPress={() => setIsDefault(!isDefault)} style={householdStyles.checkbox}>
                    {isDefault && <View style={householdStyles.checked}/>}
                </TouchableOpacity>
                <TextInput style={householdStyles.input} placeholder="項目名" onChangeText={(text) => setItem(text)} value={item} />
                <TextInput style={householdStyles.input} placeholder="金額" onChangeText={(text) => setAmount(Number(text))} value={amount.toString()} />
                <Button title="保存" onPress={() => saveHouseholds}/>
                </View>
            }
            <View style={householdStyles.buttonsContainer}>
                {formCount == 0 && <Button title="項目を追加" onPress={() => setFormCount(n => n + 1)}/>}
                {formCount == 1 && <Button title="項目を削除" onPress={() => setFormCount(n => n -1)}/>}
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
 import  { useState } from 'react'
 import { View, Text, Button, Modal } from 'react-native'
 import { useTailwind } from 'tailwindcss-react-native'
 import { householdStyles } from '../utils/styles'


const Household = () => {
    const tailwind = useTailwind()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [household, setHousehold] = useState([])

    return (
    <View style={householdStyles.container}>
        <Button title="Add" onPress={() => setIsModalOpen(true)} />
        <Modal
           animationType="slide"
           transparent={true}
           visible={isModalOpen}
           onRequestClose={() => setIsModalOpen(false)}>
        </Modal>
    </View>
    )
}

export default Household
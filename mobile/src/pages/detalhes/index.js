import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'
import styles from './styles';

export default function Detalhes() {
    const navigation = useNavigation()
    const route = useRoute()
    const caso = route.params.caso
    const message = 'quero ajudar voce'

    function goBack() {
        navigation.goBack()
    }

    function openWhats() {
        Linking.openURL(`whatsapp://send?phone=${caso.whatsapp}&text=${message}`)
    }

    function openMail() {
        MailComposer.composeAsync({
            subject: `Heroi do caso`,
            recipients: [caso.email],
            body: message
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}></Image>

                <TouchableOpacity onPress={goBack}>
                    <Feather name="arrow-left" size={28} color="#e08241"></Feather>
                </TouchableOpacity>
            </View>

            <View style={styles.caso}>
                <Text style={styles.casoProperty}>ONG de {caso.city} {caso.uf}</Text>
                <Text style={styles.casoValue}>{caso.name}</Text>

                <Text style={styles.casoProperty}>CASO</Text>
                <Text style={styles.casoValue}> {caso.title} </Text>

                <Text style={styles.casoProperty}> Descricao </Text>
                <Text style={styles.casoValue}> {caso.description} </Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>
                <Text style={styles.heroDescription}>Salve o dia</Text>

                <View style={styles.action}>
                    <TouchableOpacity style={styles.actions} onPress={openWhats}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actions} onPress={openMail}>
                        <Text style={styles.actionText}>Email</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import logo from '../../assets/logo.png'
import api from '../../services/api'
import styles from './styles';

export default function Casos() {
    const navigation = useNavigation()
    const [casos, setCasos] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        fetch()
    }, [])

    async function fetch() {
        if (loading) return
        if (total > 0 && casos.length === total) return

        setLoading(true)
        const res = await api.get('casos', {
            params: { page } 
        })
        setTotal(res.headers['x-total-count'])
        setCasos([ ...casos, ...res.data ])
        setLoading(false)
        setPage(page + 1)
    }

    function toDetail(caso) {
        navigation.navigate('Detalhes', { caso })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}></Image>
                <Text style={styles.headerText}> Total <Text style={styles.headerTextBold}>{total} de casos</Text></Text>
            </View>

            <Text style={styles.title}> Bem vindo</Text>
            <Text style={styles.description}> Escolha um caso para ajudar</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={c => String(c.id)}
                style={styles.list}
                onEndReached={fetch}
                onEndReachedThreshold={0.2}
                data={casos}
                renderItem={({ item }) => (
                    <View style={styles.caso}>
                        <Text style={styles.casoProperty}> ONG </Text>
                        <Text style={styles.casoValue}> {item.name} </Text>

                        <Text style={styles.casoProperty}> Caso </Text>
                        <Text style={styles.casoValue}>  {item.title} </Text>

                        <Text style={styles.casoProperty}> Valor </Text>
                        <Text style={styles.casoValue}> {item.value} R$</Text>

                        <TouchableOpacity onPress={() => toDetail(item)} style={styles.button}>
                            <Text style={styles.detalhesButton}>Veja mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041"></Feather>
                        </TouchableOpacity>
                    </View>
                )}
            ></FlatList>
            <View >

            </View>
        </View>
    );
}

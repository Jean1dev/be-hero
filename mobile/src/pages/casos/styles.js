import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    list: {
        marginTop: 32,
    },
    caso: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    casoProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold'
    },
    casoValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detalhesButton: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
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
    caso: {
        marginTop: 48,
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
        marginTop: 0,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    }, 
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,
    },
    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    action: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actions: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
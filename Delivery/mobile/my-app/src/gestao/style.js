import {StyleSheet} from 'react-native';

export default StyleSheet.create({
        container:{
        flex: 1,
    },
        title: {
        fontSize: '1.05rem',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
        item: {
        margin: '15px'
    },
        Tex: {
        paddingTop:6,
        paddingBottom:6,
        backgroundColor: "#FFF",
        borderRadius: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#7242F5",
        marginTop: 8,
        marginBottom: 8,
        marginLeft:35,
        width: 310,
        alignContent: "center",
    },

        logo: {
        width: 200,
        height: 200,
        marginTop:250,
        marginLeft:84,
        marginBottom:22
    },
        container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        backgroundColor: '#D7D9DB'
    },
        dog: {
        width: '205px',
        height: '205px',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 3.00,
        elevation: 24,
    },
        input: {
        width: '75%',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        backgroundColor: '#EFEFEF',
        outlineStyle: 'none',
        border: 'none',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
        button: {
        width: '75%',
        backgroundColor: '#33ACF5',
        paddingHorizontal: '12px',
        paddingVertical: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 16,
    },
        textButton: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#EFEFEF',
    },
        hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: 200
      },
     
})
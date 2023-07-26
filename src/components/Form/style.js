import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        bottom: 0,
        justifyContent:'flex',
        marginTop: 30,
        backgroundColor: '#FFF',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        paddingTop: 15,
        borderTopRightRadius: 30,
    },

    form: {
        width: '100%',
    },

    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
    },

    formInput:{
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    textButtonCalculator:{
        fontSize: 20,
        color: '#FFF',
    },

    buttonCalculator: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#FF0043',
        justifyContent: 'center',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 30,
        paddingTop: 14,
        paddingBottom: 14,
        width: '90%',
    },
    
    errorMessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },

    exhibitionResult: {
        width: '100%',
        height: '50%',
    },

    listImc:{
        marginTop:20,
    },

    resultImcItem:{
        fontSize: 26,
        color: 'red',
        height: 50,
        width:'100%',
        paddingRight: 20,      
    },

    textResultItemList:{
        color:'red',
        fontSize: 14,
    },

});

export default styles;
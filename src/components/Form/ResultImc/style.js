import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: 'center',
        width:'100%',
    },

    information: {
        fontSize: 18,
        color: '#FF0043',
        fontWeight: 'bold',
    },

    numberImc: {
        color: '#FF0043',
        fontSize: 48,
        fontWeight: 'bold',
    },

    contextImc:{
        flex:1,
        marginTop: 20,
        paddingTop: 15,
        alignItems:'center',
        width:'100%',
    },

    boxShareButton: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },

    share: {
        backgroundColor: '#1817f2',
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },

    textShare: {
        color: '#fff',
        fontWeight:"bold",
        paddingHorizontal: 30,
    },
});

export default styles;
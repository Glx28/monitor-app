import { Platform, StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    inputLogin: {
        height: 50,
        marginLeft: 50,
        marginRight:50,
        marginTop: 25,
        borderWidth: 1,
        padding: 10,
        borderRadius: 35,
        backgroundColor: "white",
        width: "90%",
        textAlign: 'center',
      },
    
  
    signInButton: {
        alignItems: "center",
        flexBasis: '10%',
        backgroundColor: '#000000',
        alignContent: "space-between",
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 2,
        paddingVertical: 10,
        borderRadius: 35,
        flexDirection: "row",
        justifyContent: 'center',
        width: "90%",
        shadowColor: "#2A2A2A",
        shadowRadius: 25,
        shadowOffset: {
          width: 0,
          height: 2
        },
      },
  
    buttonText: {
      fontSize: 40,
      color: '#FFFFFF',
      fontWeight: "bold",
      alignSelf: "center",
    },

    loginScreen: {
        flex: 1,
        backgroundColor: '#F4F5E2',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
  
      titleText: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 50,
      },

      icon: {
        alignSelf: "center",
      },
  })

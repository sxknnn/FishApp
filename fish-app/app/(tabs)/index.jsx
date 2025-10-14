
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Colors from '../../constant/Colors'; 
import { useRouter } from "expo-router";

const router = useRouter();

export default function Index()
{
    return (

        <View
        style={{
            flex: 1,
            backgroundColor: Colors.bg, 
            alignItems: 'center',        
            justifyContent: 'center',     
        }}
        >

            <Image 
                source={require("../../assets/images/boat.png")}
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                    borderWidth: 2,
                    borderColor: Colors.ACCENT_YELLOW,
                    marginBottom: 40,
                }}
            />

            <View style={{
                position: 'absolute', 
                top: 200,            
                left: 0,
                right: 0,
            }}>
                <Text style={{
                    color: Colors.WHITE,
                    fontWeight: 'bold',
                    fontSize: 30,
                    textAlign: 'center', 
                }}>
                    Let's get started!
                </Text>

            </View>
                <View style={styles.buttonArea}>
                    

                     <TouchableOpacity
                         style={styles.primaryButton}
                         onPress={()=>router.push('../auth/signUp')}
                     >
                         <Text style={styles.primaryButtonText}>
                             Sign Up
                        </Text>
                     </TouchableOpacity>
                    
                     {/* Secondary Link: Log In */}
                    <View style={styles.loginLinkRow}>
                        {/* Text is white/light on the dark background */}
                        <Text style={styles.loginLinkText}>
                            Already have an account?
                        </Text>
                         <TouchableOpacity onPress={()=>router.push('../auth/signIn')}> 
                            {/* Accent color for the link text */}
                            <Text style={styles.loginLinkAccent}> Log In</Text>
                        </TouchableOpacity>
                    </View>
               </View>
            </View>


    )
}

const styles = StyleSheet.create({
    buttonArea: {
        paddingHorizontal: 17, 
        width: '100%'
    },

    primaryButton: {
        paddingVertical: 15,
        backgroundColor: Colors.ACCENT_YELLOW, 
        marginHorizontal: 20,
        borderRadius: 17,
        marginBottom: 20, 
        marginTop: 25,
        shadowColor: Colors.ACCENT_YELLOW,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 8,
        elevation: 10, 
    },

    primaryButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.BLACK, 
    },

         loginLinkRow: {
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
     },
    
     loginLinkText: {
         color: Colors.WHITE, 
         fontWeight: '600',
        fontSize: 17,
     },
     loginLinkAccent: {
         fontWeight: '600',
         fontSize: 17,
         color: Colors.ACCENT_YELLOW, 
     },

})
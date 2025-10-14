import React from 'react'
import { View, Image, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import Colors from '../../constant/Colors'; 
import { useRouter } from "expo-router";

export default function SignUp() {
    const router = useRouter(); 
    
    const handleSignUp = () => {

        console.log("Attempting to create account...");
    };

    const handleLogin = () => {

        router.push('../auth/signIn'); 
    };

    return (
        // ScrollView allows the content to move when the keyboard is open
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            

            <Image 
                source={require("../../assets/images/fishing.jpg")}
                style={styles.headerImage} 
            />


            <View style={styles.formWrapper}>
                

                <Text style={styles.title}>
                    Create new account
                </Text>
                

                <TextInput 
                    placeholder='Full Name' 
                    style={styles.input}
                    placeholderTextColor={Colors.textSecondary || '#888'}
                />
                <TextInput 
                    placeholder='Email' 
                    keyboardType='email-address'
                    style={styles.input}
                    placeholderTextColor={Colors.textSecondary || '#888'}
                />
                <TextInput 
                    placeholder='Password' 
                    secureTextEntry={true} 
                    style={styles.input}
                    placeholderTextColor={Colors.textSecondary || '#888'}
                />
                <TextInput 
                    placeholder='Confirm Password' 
                    secureTextEntry={true}
                    style={styles.input}
                    placeholderTextColor={Colors.textSecondary || '#888'}
                />


                <View style={styles.buttonArea}>
                    <Pressable
                        onPress={handleSignUp}
                        style={styles.primaryButton}
                    >
                        <Text style={styles.primaryButtonText}>
                            Create account
                        </Text>
                    </Pressable>
                    

                    <View style={styles.loginLinkRow}>
                        <Text style={styles.loginLinkText}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={handleLogin}>
                            <Text style={styles.loginLinkAccent}> Log In</Text>
                        </Pressable>
                    </View>
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, 
        backgroundColor: Colors.bg || '#4B0082', 
        alignItems: 'center',
        paddingTop: 0, 
    },
    headerImage: {
        width: '100%', 
        height: 350, 
        marginBottom: 40,
    },
    formWrapper: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: Colors.WHITE || '#FFFFFF',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.inputBg || '#F0F0F0',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: Colors.border || '#DDDDDD',
        color: Colors.textPrimary || '#333333',
    },


    buttonArea: {
        width: '100%', 
        marginTop: 20,
    },
    primaryButton: {
        paddingVertical: 15,
        backgroundColor: Colors.ACCENT_YELLOW || '#FFD700', 
        marginHorizontal: 0, // Ensures the button is full width
        borderRadius: 17,
        marginBottom: 15, 
        shadowColor: Colors.ACCENT_YELLOW || '#FFD700',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 8,
        elevation: 10, 
    },
    primaryButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.BLACK || '#000000', 
    },
    loginLinkRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40, 
    },
    loginLinkText: {
        color: Colors.WHITE || '#FFFFFF', 
        fontWeight: '600',
        fontSize: 17,
    },
    loginLinkAccent: {
        fontWeight: '600',
        fontSize: 17,
        color: Colors.ACCENT_YELLOW || '#FFD700', 
    },
});

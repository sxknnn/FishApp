import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// Assuming Colors.jsx is located at ../../constant/Colors
import Colors from '../../constant/Colors'; 

// Get screen dimensions for dynamic image sizing
const { width } = Dimensions.get('window');

const index: React.FC = () => {
    // Removed: useNavigation() and any navigation logic

    return (
        // Use Colors.bg from your Colors file for the main screen background
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                
                {/* Headline */}
                <Text style={styles.headline}>
                    Let's Get Started!
                </Text>
                
                {/* Image Container (Now houses the circular logo placeholder) */}
                <View style={styles.imageContainer}>
                    {/* CIRCULAR LOGO CONTAINER */}
                    <View style={styles.circularLogo}>
                        {/* The new image source is placed here, replacing the LOGO text. */}
                        <Image 
                            source={require("../../assets/images/boat.png")}
                            style={styles.logoImage} 
                            resizeMode="contain"
                        />
                    </View>
                </View>
                
                {/* Button and Login Link Area */}
                <View style={styles.buttonArea}>
                    
                    {/* Primary Button: Sign Up (Uses ACCENT_YELLOW) */}
                    <TouchableOpacity
                        style={styles.primaryButton}
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
                        <TouchableOpacity>
                            {/* Accent color for the link text */}
                            <Text style={styles.loginLinkAccent}> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default index;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        // Using the 'bg' color provided in your Colors.jsx (which is '#877dfa')
        backgroundColor: Colors.bg, 
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    headline: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 36,
        textAlign: 'center',
        paddingTop: 40,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    // NEW STYLE: CIRCULAR LOGO CONTAINER
    circularLogo: {
        width: width * 0.6, // Slightly smaller width for a better logo focus
        height: width * 0.6, // Ensures a perfect circle
        borderRadius: (width * 0.6) / 2, // Half of width/height for circular shape
        backgroundColor: Colors.ACCENT_YELLOW, // Dark background color for the logo area
        //borderWidth: 2, // Defined edge
        //borderColor: Colors.ACCENT_YELLOW,
        
        // Center the content (the image) inside
        justifyContent: 'center',
        alignItems: 'center',

        // // Retained shadows, applied to the View for the logo effect
        // shadowColor: Colors.ACCENT_YELLOW,
        // shadowOffset: { width: 0, height: 5 },
        // shadowOpacity: 0.8, // Increased shadow for more pop
        // shadowRadius: 15,
        // elevation: 20,
        // padding: 10, // Added padding to give the image breathing room inside the border
    },
    // NEW STYLE for the Image inside the circle
    logoImage: {
        width: '100%',
        height: '100%',
    },
    buttonArea: {
        paddingHorizontal: 15, 
    },
    primaryButton: {
        paddingVertical: 15,
        backgroundColor: Colors.ACCENT_YELLOW, // Yellow CTA
        marginHorizontal: 10,
        borderRadius: 12,
        marginBottom: 20, 
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
        // Text color contrasting against the yellow button. Using black or a dark color is best.
        color: Colors.BLACK, 
    },
    loginLinkRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Using WHITE instead of a specific text gray from your original component
    loginLinkText: {
        color: Colors.WHITE, 
        fontWeight: '600',
        fontSize: 15,
    },
    loginLinkAccent: {
        fontWeight: '600',
        fontSize: 15,
        color: Colors.ACCENT_YELLOW, // Yellow accent for the link
    },
});

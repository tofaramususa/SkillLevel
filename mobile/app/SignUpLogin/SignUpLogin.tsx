import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
  } from "react-native";
  import React, { useState } from "react";
  import { colors } from "@/utils/colors";
  import { fonts } from "@/utils/fonts";
  
  import Ionicons from "react-native-vector-icons/Ionicons";
  import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  import { router } from 'expo-router';
  import { StatusBar } from 'expo-status-bar';
  import { LinearGradient } from 'expo-linear-gradient';
  
  const LoginScreen = () => {
	const [secureEntry, setSecureEntry] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
	const handleGoBack = () => {
	  router.back();
	};
	const handleSignup = () => {
	//   navigation.navigate("SIGNUP");
	};
  
	const handleLogin = async () => {
	  try {
		if (!email || !password) {
		  return;
		}
		
		// Add your login logic here
		
		router.replace('/(tabs)/home');
	  } catch (error) {
		console.error('Login error:', error);
	  }
	};
  
	const handleGoogleLogin = () => {
	  // Implement Google login logic
	};
  
	return (
	  <View style={styles.container}>
		<StatusBar style="dark" />
		
		<View style={styles.backgroundPattern}>
		  <LinearGradient
			colors={['rgba(0, 182, 255, 0.1)', 'rgba(0, 122, 255, 0.05)']}
			style={styles.gradientPattern}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
		  />
		</View>

		<View style={styles.header}>
		  <TouchableOpacity onPress={handleGoBack}>
			<Ionicons name="chevron-back" size={24} color={colors.darkBlue} />
		  </TouchableOpacity>
		</View>

		<View style={styles.titleContainer}>
		  <LinearGradient
			colors={['#00B6FF', '#007AFF']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			style={styles.gradientWrapper}
		  >
			<Text style={styles.appName}>Skill Level</Text>
		  </LinearGradient>
		  <Text style={styles.welcomeText}>Welcome back!</Text>
		  <Text style={styles.subtitleText}>
			Sign in to continue your gaming journey
		  </Text>
		</View>

		<View style={styles.formContainer}>
		  <View style={styles.inputContainer}>
			<Text style={styles.inputLabel}>EMAIL</Text>
			<View style={styles.inputWrapper}>
			  <Ionicons name="mail-outline" size={20} color={colors.darkBlue} />
			  <TextInput
					style={styles.input}
					placeholder="Enter your email"
					placeholderTextColor={colors.darkBlue + '80'}
					keyboardType="email-address"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
			  />
			</View>
		  </View>

		  <View style={styles.inputContainer}>
			<Text style={styles.inputLabel}>PASSWORD</Text>
			<View style={styles.inputWrapper}>
			  <SimpleLineIcons name="lock" size={20} color={colors.darkBlue} />
			  <TextInput
					style={styles.input}
					placeholder="Enter your password"
					placeholderTextColor={colors.darkBlue + '80'}
					secureTextEntry={secureEntry}
					value={password}
					onChangeText={setPassword}
					autoCapitalize="none"
			  />
			  <TouchableOpacity
					onPress={() => setSecureEntry(!secureEntry)}
					hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
			  >
				<Ionicons 
				  name={secureEntry ? "eye-outline" : "eye-off-outline"} 
				  size={20} 
				  color={colors.darkBlue} 
				/>
			  </TouchableOpacity>
			</View>
		  </View>

		  <TouchableOpacity style={styles.forgotPassword}>
			<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
					style={styles.loginButton} 
					onPress={handleLogin}
		  >
			<LinearGradient
			  colors={['#00B6FF', '#007AFF']}
			  style={styles.loginGradient}
			  start={{ x: 0, y: 0 }}
			  end={{ x: 1, y: 0 }}
			>
			  <Text style={styles.loginButtonText}>Sign In</Text>
			</LinearGradient>
		  </TouchableOpacity>

		  <View style={styles.dividerContainer}>
			<View style={styles.divider} />
			<Text style={styles.dividerText}>OR</Text>
			<View style={styles.divider} />
		  </View>

		  <TouchableOpacity 
					style={styles.googleButton} 
					onPress={handleGoogleLogin}
		  >
			<Image
			  source={require('@/assets/google.png')}
			  style={styles.googleIcon}
			/>
			<Text style={styles.googleButtonText}>Continue with Google</Text>
		  </TouchableOpacity>

		  <View style={styles.footer}>
			<Text style={styles.footerText}>Don't have an account?</Text>
			<TouchableOpacity onPress={handleSignup}>
			  <Text style={styles.signupText}>Create account</Text>
			</TouchableOpacity>
		  </View>
		</View>
	  </View>
	);
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#F8FAFF',
	},
	backgroundPattern: {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  right: 0,
	  height: '40%',
	},
	gradientPattern: {
	  flex: 1,
	},
	header: {
	  paddingHorizontal: 20,
	  paddingTop: 20,
	},
	titleContainer: {
	  paddingHorizontal: 20,
	  marginTop: 40,
	  marginBottom: 40,
	},
	appName: {
	  fontSize: 20,
	  color: colors.white,
	  fontWeight: '700',
	},
	welcomeText: {
	  fontSize: 32,
	  fontWeight: 'bold',
	  color: '#1A1A1A',
	  marginBottom: 8,
	},
	subtitleText: {
	  fontSize: 16,
	  color: '#404040',
	  lineHeight: 24,
	},
	formContainer: {
	  backgroundColor: colors.white,
	  borderTopLeftRadius: 30,
	  borderTopRightRadius: 30,
	  padding: 20,
	  flex: 1,
	  shadowColor: colors.darkBlue,
	  shadowOffset: {
		width: 0,
		height: -4,
	  },
	  shadowOpacity: 0.03,
	  shadowRadius: 12,
	  elevation: 5,
	},
	inputContainer: {
	  marginBottom: 20,
	},
	inputLabel: {
	  fontSize: 12,
	  fontWeight: '600',
	  color: '#404040',
	  marginBottom: 8,
	  marginLeft: 4,
	},
	inputWrapper: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  backgroundColor: '#F8FAFF',
	  borderRadius: 12,
	  paddingHorizontal: 16,
	  height: 56,
	  borderWidth: 1,
	  borderColor: '#E1E8F5',
	},
	input: {
	  flex: 1,
	  marginLeft: 12,
	  fontSize: 16,
	  color: '#1A1A1A',
	},
	forgotPassword: {
	  alignSelf: 'flex-end',
	  marginBottom: 24,
	},
	forgotPasswordText: {
	  color: '#404040',
	  fontSize: 14,
	  fontWeight: '600',
	},
	loginButton: {
	  borderRadius: 12,
	  overflow: 'hidden',
	  marginBottom: 24,
	},
	loginGradient: {
	  height: 56,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	loginButtonText: {
	  color: colors.white,
	  fontSize: 16,
	  fontWeight: '600',
	},
	footer: {
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  gap: 8,
	},
	footerText: {
	  fontSize: 14,
	  color: '#404040',
	},
	signupText: {
	  fontSize: 14,
	  color: '#00B6FF',
	  fontWeight: '600',
	},
	gradientWrapper: {
	  paddingHorizontal: 12,
	  paddingVertical: 6,
	  borderRadius: 8,
	  alignSelf: 'flex-start',
	  marginBottom: 16,
	},
	dividerContainer: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  marginVertical: 24,
	},
	divider: {
	  flex: 1,
	  height: 1,
	  backgroundColor: '#E1E8F5',
	},
	dividerText: {
	  paddingHorizontal: 16,
	  color: '#404040',
	  fontSize: 14,
	  fontWeight: '500',
	},
	googleButton: {
	  flexDirection: 'row',
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: '#FFFFFF',
	  borderRadius: 12,
	  height: 56,
	  borderWidth: 1,
	  borderColor: '#E1E8F5',
	  marginBottom: 24,
	},
	googleIcon: {
	  width: 24,
	  height: 24,
	  marginRight: 12,
	},
	googleButtonText: {
	  fontSize: 16,
	  color: '#1A1A1A',
	  fontWeight: '600',
	},
  });
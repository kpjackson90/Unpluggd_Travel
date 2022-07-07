import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Separator } from '../../../components';
import { AppleIcon, GoogleIcon } from '../../../icons';
import { Screens, useAppNavigation } from '../../screen';

export const LoginScreen = () => {
    const navigator = useAppNavigation();
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20}}>
                <View><Text>Back</Text></View>
                <View><Text>Skip</Text></View>
            </View>
            <View style={{ margin: 20}}>
                <Text style={{ fontWeight: '600', fontSize: 30, lineHeight: 41, letterSpacing: 0.37}}>Welcome back</Text>
                <Separator height={30} />
                <TextInput placeholder="Email" style={{ borderWidth: 0.5, borderRadius: 8, height: 52, width: '100%', paddingLeft: 15}}/>
                <Separator height={50} />
                <TouchableOpacity style={{ width: '100%', height: 60, borderRadius: 10, backgroundColor: '#3081ED', justifyContent: 'center', alignItems: 'center'}} onPress={() => navigator.navigate(Screens.Home)}>
                    <Text style={{fontWeight: '600', fontSize: 18, lineHeight: 19.58, color: 'white'}}>Sign in with email</Text>
                </TouchableOpacity>
                <Separator height={80} />
                <View style={{ flexDirection: 'row'}}>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#C7C9D9', width: 160, marginTop: 6}}/>
                    <View>
                        <Text style={{ marginLeft: 10, marginRight: 10, fontWeight: '400', fontSize: 14, lineHeight: 12.3}}>or</Text>
                    </View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#C7C9D9', width: 160, marginTop: 6}}/>
                </View>
                <Separator height={30} />
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, height: 52, width: 366, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row'}}>
                    <View>
                        <AppleIcon />
                    </View>
                    <View>
                        <Text style={{ fontWeight: '600', fontSize: 17, lineHeight: 22, letterSpacing: -0.41}}>Sign in with Apple</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <Separator height={20} />
                <TouchableOpacity style={{ borderWidth: 1, borderRadius: 8, height: 52, width: 366, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{ flexDirection: 'row'}}>
                    <View>
                        <GoogleIcon />
                    </View>
                    <View>
                        <Text style={{ fontWeight: '600', fontSize: 17, lineHeight: 22, letterSpacing: -0.41}}>Sign in with Google</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <Separator height={50} />
                <TouchableOpacity style={{ alignItems: 'center'}}>
                    <Text style={{ color: '#3081ED', fontWeight: '400', fontSize: 18}}>New here? create an account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
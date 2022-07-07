import React from 'react';
import { View, Text, Image, ImageBackground, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Separator } from '../../../components';
import { UserIcon} from '../../../icons'

export const HomeScreen = () => {
    const categories = [
        {
            icon: 'icon',
            name: 'Hotel'
        },
        {
            icon: 'icon',
            name: 'Restaurant'
        },
        {
            icon: 'icon',
            name: 'Gym'
        },
    ]
    return (
        <SafeAreaView>
            <View style={{ margin: 20}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ justifyContent: 'center'}}><Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 23.8}}>Landungsari, Malang</Text></View>
                    <View style={{ backgroundColor: '#EAEEFD', height: 80, width: 80, borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}><UserIcon/></View>
                </View>
                <ScrollView style={{ flexDirection: 'row'}} horizontal>
                {categories && categories.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={{ backgroundColor: '#F3F3F3', height: 48, width: 100, borderRadius: 30, marginRight: 10, justifyContent: 'center', alignItems: 'center'}}>
                        
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                            )
                        })}
                
                </ScrollView>
                <Separator height={40}/>
                <View>
                    <Text style={{ fontWeight: '800', fontSize: 20, lineHeight: 21.76}}>Top Destination</Text>
                    <Separator height={10}/>
                    <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 23.8, color: '#444444'}}>Plan your next trip by selecting one of out top destination</Text>
                    <Separator height={30}/>
                    <ImageBackground source={require('../../../../assets/asia.jpg')} style={{ width: 366, height: 234, justifyContent: 'flex-end'}}>
                        <View>
                        <Text style={{ fontWeight: '800', fontSize: 20, lineHeight: 21.76, color: '#FFFFFF'}}>SAN MIGUEL</Text>
                        <Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 27.2, color: '#FFFFFF'}}>Fusce hic augue velit wisi ips quibusdam</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </SafeAreaView>
    )
}
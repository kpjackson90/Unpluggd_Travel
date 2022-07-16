import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CategoryProps {
    title: string;
}

export const CategoryItem: React.FC<CategoryProps> = ({ title }) => {
    return (
        <TouchableOpacity  style={{ width: 'auto', height: 48, paddingLeft: 20, paddingRight: 20, borderRadius: 25, backgroundColor: '#F3F3F3', justifyContent: 'center', alignItems: 'center', marginRight: 5}}>
        <Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 23.8, color: '#444444'}}>{title}</Text>
    </TouchableOpacity>
        )
}
import React from 'react';
import { TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';

interface FilterItemProps {
    title: string;
    isActive: boolean;
    onPress: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ title, isActive, onPress }) => {
    return isActive ? (
        <ImageBackground
            source={require('@/assets/images/hero-card.png')}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 10 }}
        >
            <TouchableOpacity onPress={onPress}>
                <Text style={[styles.filterText, styles.activeFilter]}>{title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    ) : (
        <TouchableOpacity style={styles.imageBackground} onPress={onPress}>
            <Text style={styles.filterText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    filterText: {
        fontSize: 16,
        padding: 5,
        borderRadius: 10,
    },
    activeFilter: {
        fontWeight: 'bold',
        color: '#fff',
    },
    imageBackground: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default FilterItem;
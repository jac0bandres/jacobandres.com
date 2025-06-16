import { StyleSheet } from 'react-native';

export const colors = {
    foreground: "#c2c2b0",
    background: '#222222'
}

export const styles = StyleSheet.create({
    text: {
        color: colors.foreground,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
    },
    background: {
        backgroundColor: colors.background,
    }
})

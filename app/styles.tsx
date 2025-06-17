import { StyleSheet } from 'react-native';

export const colors = {
    foreground: "#c2c2b0",
    background: '#222222',
    palette0: "#000000",
    brown0: "#685742",
    green0: "#5f875f",
    orange0: "#b36d43",
    green1: "#78824b",
    orange1: "#bb7744",
    yellow0: "#c9a554",
    palette7: "#d7c483",
    palette8: "#666666",
    paleBrown: "#685742",
    palette10: "#5f875f",
    palette11: "#b36d43",
    palette12: "#78824b",
    palette13: "#bb7744",
    palette14: "#c9a554",
    palette15: "#d7c483",
    selectionBackground: '#e5c47b',
}

export const styles = StyleSheet.create({
    p: {
        color: colors.foreground,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
    },
    h1: {
        color: colors.green0,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 24,
        fontWeight: 'bold',
    },
    h2: {
        color: colors.green1,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 22,
        fontWeight: 'bold',
    },
    mdH1: {
        color: colors.orange0,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 32,
        fontWeight: 'bold',
    },
    mdH2: {
        color: colors.yellow0,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 28,
        marginVertical: 8,
        fontWeight: 'bold',    
    },
    codeBlock: {
        color: colors.green1,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
        backgroundColor: colors.background,
        padding: 8,
        borderColor: colors.background
    },
    a: {
        color: colors.palette7,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
    },
    aSelected: {
        color: colors.orange0,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    iconButton: {
        color: colors.foreground,
    },
    background: {
        backgroundColor: colors.background,
    }
})

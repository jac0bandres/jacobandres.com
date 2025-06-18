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

export const venom_colors = {
    background: "#000000",
    foreground: "#c1c1c1",
    licorice: "#211816",
    bluegreen: "#5F8787",
    gray: "#c1c1c1",
    vermilion: "#FC302E",
}

export const styles = StyleSheet.create({
    p: {
        color: venom_colors.foreground,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
    },
    h1: {
        color: venom_colors.vermilion,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 24,
        fontWeight: 'bold',
    },
    h2: {
        color: venom_colors.gray,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 22,
        fontWeight: 'bold',
    },
    codeBlock: {
        color: venom_colors.bluegreen,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
        backgroundColor: venom_colors.jet,
        padding: 8,
        borderColor: colors.background
    },
    a: {
        color: venom_colors.bluegreen,
        fontFamily: 'FiraMono_400Regular',
        fontSize: 20,
    },
    aSelected: {
        color: venom_colors.bluegreen,
        fontFamily: 'firamono_400regular',
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    iconbutton: {
        color: colors.foreground,
    },
    background: {
        backgroundColor: venom_colors.background,
    }
})

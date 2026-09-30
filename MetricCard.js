//weekly metric card
import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function MetricCard(props){
    return(
        <View style={styles.card}>
            <View style={[styles.iconBox, {backgroundColor: props.tint}]}>
                <Text style={styles.icon}>{props.icon}</Text>
            </View>

            <Text style={styles.value}>
                {props.value}
                <Text style={styles.unit}> {props.unit}</Text>
            </Text>

            <Text style={styles.label}>{props.label}</Text>

            <View style={[styles.track, {backgroundColor: props.tint}]}>
                <View
                    style={[
                        styles.fill,
                        {width: props.fill, backgroundColor: props.accent}
                    ]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 16,
        marginHorizontal: 6,
        borderWidth: 1,
        borderColor: "#E7EAE4"
    },
    iconBox: {
        width: 36,
        height: 36,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 14
    },
    icon: {
        fontSize: 16
    },
    value: {
        color: "#1B1F1C",
        fontSize: 22,
        fontWeight: "800",
        letterSpacing: -0.5
    },
    unit: {
        fontSize: 12,
        fontWeight: "700",
        color: "#9AA49C"
    },
    label: {
        color: "#6F7A73",
        fontSize: 12,
        marginTop: 4
    },
    track: {
        height: 5,
        borderRadius: 999,
        overflow: "hidden",
        marginTop: 14
    },
    fill: {
        height: "100%",
        borderRadius: 999
    }
});
//single workout list row
import React from "react";
import {StyleSheet, Text, View} from "react-native";

export default function WorkoutRow(props){
    return(
        <View style={styles.row}>
            <View style={styles.timeColumn}>
                <Text style={styles.time}>{props.time}</Text>
                <Text style={styles.meridiem}>{props.meridiem}</Text>
            </View>

            <View style={[styles.bar, {backgroundColor: props.accent}]} />

            <View style={styles.body}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.meta}>{props.meta}</Text>
            </View>

            <View style={[styles.durationPill, {backgroundColor: props.tint}]}>
                <Text style={[styles.duration, {color: props.accent}]}>
                    {props.duration}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15
    },
    timeColumn: {
        width: 42
    },
    time: {
        color: "#1B1F1C",
        fontSize: 14,
        fontWeight: "700"
    },
    meridiem: {
        color: "#9AA49C",
        fontSize: 10,
        fontWeight: "700",
        letterSpacing: 0.5,
        marginTop: 2
    },
    bar: {
        width: 5,
        height: 44,
        borderRadius: 999,
        marginHorizontal: 12
    },
    body: {
        flex: 1
    },
    name: {
        color: "#1B1F1C",
        fontSize: 14,
        fontWeight: "600"
    },
    meta: {
        color: "#9AA49C",
        fontSize: 12,
        marginTop: 4
    },
    durationPill: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        marginLeft: 10
    },
    duration: {
        fontSize: 11,
        fontWeight: "700"
    }
});
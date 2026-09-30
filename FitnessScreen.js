//fitness dashboard screen
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import MetricCard from "./MetricCard";
import WorkoutRow from "./WorkoutRow";

export default function FitnessScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <View>
                        <Text style={styles.date}>TUESDAY · SEP 29</Text>
                        <Text style={styles.greeting}>Let's move, Bea</Text>
                    </View>

                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>BR</Text>
                    </View>
                </View>

                <View style={styles.hero}>
                    <View style={styles.heroTop}>
                        <Text style={styles.heroLabel}>Today's steps</Text>
                        <View style={styles.heroChip}>
                            <Text style={styles.heroChipText}>82% of goal</Text>
                        </View>
                    </View>

                    <Text style={styles.heroValue}>
                        8,240<Text style={styles.heroGoal}> / 10,000</Text>
                    </Text>

                    <View style={styles.heroTrack}>
                        <View style={styles.heroFill} />
                    </View>

                    <View style={styles.heroFooter}>
                        <View style={styles.heroStat}>
                            <Text style={styles.heroStatValue}>6.1</Text>
                            <Text style={styles.heroStatLabel}>km</Text>
                        </View>
                        <View style={styles.heroDivider} />
                        <View style={styles.heroStat}>
                            <Text style={styles.heroStatValue}>412</Text>
                            <Text style={styles.heroStatLabel}>kcal</Text>
                        </View>
                        <View style={styles.heroDivider} />
                        <View style={styles.heroStat}>
                            <Text style={styles.heroStatValue}>54</Text>
                            <Text style={styles.heroStatLabel}>min</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>This week</Text>
                <View style={styles.metricsRow}>
                    <MetricCard
                        icon="⚡"
                        value="214"
                        unit="min"
                        label="Active time"
                        accent="#1F6F5C"
                        tint="#E2F1EC"
                        fill="72%"
                    />
                    <MetricCard
                        icon="🔥"
                        value="3,180"
                        unit="kcal"
                        label="Calories burned"
                        accent="#D97941"
                        tint="#FBEDE3"
                        fill="58%"
                    />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={[styles.sectionTitle, styles.sectionTitleTight]}>
                        Today's workouts
                    </Text>
                    <Text style={styles.viewAll}>See plan</Text>
                </View>

                <View style={styles.workoutCard}>
                    <WorkoutRow
                        time="6:30"
                        meridiem="AM"
                        name="Morning Run"
                        meta="Riverside loop · Zone 2"
                        duration="32 min"
                        accent="#1F6F5C"
                        tint="#E2F1EC"
                    />
                    <View style={styles.divider} />
                    <WorkoutRow
                        time="12:15"
                        meridiem="PM"
                        name="Mobility Flow"
                        meta="Home · Stretch & core"
                        duration="18 min"
                        accent="#D97941"
                        tint="#FBEDE3"
                    />
                    <View style={styles.divider} />
                    <WorkoutRow
                        time="6:00"
                        meridiem="PM"
                        name="Strength Circuit"
                        meta="Gym · Upper body"
                        duration="45 min"
                        accent="#3A6EA5"
                        tint="#E6EEF8"
                    />
                </View>

                <Text style={styles.sectionTitle}>Challenges</Text>
                <View style={styles.challengeRow}>
                    <View style={[styles.challengeCard, styles.challengeDark]}>
                        <Text style={styles.challengeTag}>ACTIVE</Text>
                        <Text style={styles.challengeName}>10K Steps</Text>
                        <Text style={styles.challengeMeta}>
                            5 of 7 days · ends Sunday
                        </Text>
                    </View>

                    <View style={[styles.challengeCard, styles.challengeWarm]}>
                        <Text style={[styles.challengeTag, styles.challengeTagWarm]}>
                            NEW
                        </Text>
                        <Text style={[styles.challengeName, styles.challengeNameDark]}>
                            Hydration
                        </Text>
                        <Text style={[styles.challengeMeta, styles.challengeMetaWarm]}>
                            Drink 2L daily · 12 days left
                        </Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomNav}>
                <View style={styles.navItem}>
                    <Text style={styles.activeNavIcon}>●</Text>
                    <Text style={styles.activeNavText}>Today</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navIcon}>◆</Text>
                    <Text style={styles.navText}>Plans</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navIcon}>◇</Text>
                    <Text style={styles.navText}>Stats</Text>
                </View>
                <View style={styles.navItem}>
                    <Text style={styles.navIcon}>○</Text>
                    <Text style={styles.navText}>Me</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8F5"
    },
    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 28
    },

    /* header */
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    date: {
        color: "#9AA49C",
        fontSize: 11,
        fontWeight: "700",
        letterSpacing: 1.2
    },
    greeting: {
        color: "#1B1F1C",
        fontSize: 26,
        fontWeight: "700",
        marginTop: 4
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#1B1F1C",
        justifyContent: "center",
        alignItems: "center"
    },
    avatarText: {
        color: "#F7F8F5",
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 0.5
    },

    /* hero card */
    hero: {
        backgroundColor: "#1F6F5C",
        borderRadius: 26,
        padding: 22,
        marginBottom: 26,
        shadowColor: "#1F6F5C",
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.22,
        shadowRadius: 14,
        elevation: 6
    },
    heroTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    heroLabel: {
        color: "#CDE9DF",
        fontSize: 13,
        fontWeight: "600"
    },
    heroChip: {
        backgroundColor: "rgba(255, 255, 255, 0.16)",
        paddingHorizontal: 11,
        paddingVertical: 5,
        borderRadius: 999
    },
    heroChipText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "700"
    },
    heroValue: {
        color: "#FFFFFF",
        fontSize: 38,
        fontWeight: "800",
        letterSpacing: -1,
        marginTop: 14
    },
    heroGoal: {
        fontSize: 16,
        fontWeight: "600",
        color: "#A9D8C9"
    },
    heroTrack: {
        height: 10,
        borderRadius: 999,
        backgroundColor: "rgba(255, 255, 255, 0.22)",
        overflow: "hidden",
        marginTop: 16
    },
    heroFill: {
        width: "82%",
        height: "100%",
        borderRadius: 999,
        backgroundColor: "#FFFFFF"
    },
    heroFooter: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20
    },
    heroStat: {
        flex: 1,
        alignItems: "center"
    },
    heroStatValue: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "700"
    },
    heroStatLabel: {
        color: "#A9D8C9",
        fontSize: 11,
        marginTop: 3
    },
    heroDivider: {
        width: 1,
        height: 26,
        backgroundColor: "rgba(255, 255, 255, 0.2)"
    },

    /* section headers */
    sectionTitle: {
        color: "#1B1F1C",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 14
    },
    sectionTitleTight: {
        marginBottom: 0
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14
    },
    viewAll: {
        color: "#1F6F5C",
        fontSize: 13,
        fontWeight: "700"
    },

    /* metrics */
    metricsRow: {
        flexDirection: "row",
        marginHorizontal: -6,
        marginBottom: 26
    },

    /* workout list */
    workoutCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 22,
        paddingHorizontal: 16,
        marginBottom: 26,
        borderWidth: 1,
        borderColor: "#E7EAE4"
    },
    divider: {
        height: 1,
        backgroundColor: "#EEF1EC",
        marginLeft: 71 /* aligns under the workout name */
    },

    /* challenges */
    challengeRow: {
        flexDirection: "row",
        marginHorizontal: -6
    },
    challengeCard: {
        flex: 1,
        borderRadius: 20,
        padding: 16,
        marginHorizontal: 6
    },
    challengeDark: {
        backgroundColor: "#1B1F1C"
    },
    challengeWarm: {
        backgroundColor: "#FBEDE3"
    },
    challengeTag: {
        fontSize: 10,
        fontWeight: "800",
        letterSpacing: 1,
        color: "#7FD4B8"
    },
    challengeTagWarm: {
        color: "#D97941"
    },
    challengeName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#FFFFFF",
        marginTop: 10
    },
    challengeNameDark: {
        color: "#1B1F1C"
    },
    challengeMeta: {
        fontSize: 12,
        color: "#8B968F",
        marginTop: 5,
        lineHeight: 16
    },
    challengeMetaWarm: {
        color: "#8A6A55"
    },

    /* bottom nav */
    bottomNav: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        paddingTop: 12,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderTopColor: "#E7EAE4"
    },
    navItem: {
        flex: 1,
        alignItems: "center"
    },
    activeNavIcon: {
        color: "#1F6F5C",
        fontSize: 15
    },
    navIcon: {
        color: "#B3BBB4",
        fontSize: 15
    },
    activeNavText: {
        color: "#1F6F5C",
        fontSize: 11,
        fontWeight: "700",
        marginTop: 4
    },
    navText: {
        color: "#B3BBB4",
        fontSize: 11,
        marginTop: 4
    }
});
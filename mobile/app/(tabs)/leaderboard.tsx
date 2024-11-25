import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LeaderboardScreen = () => {
  const insets = useSafeAreaInsets();
  
  const leaderboardData = [
    { id: 1, name: 'You', points: 58245, avatar: require('@/assets/profile/3.png') },
    { id: 2, name: 'Richard', points: 52000, avatar: require('@/assets/profile/2.png') },
    { id: 3, name: 'Amman', points: 45255, avatar: require('@/assets/profile/1.png') },
    { id: 4, name: 'Ahmed', points: 20205, avatar: require('@/assets/profile/4.png') },
    { id: 5, name: 'Bob', points: 1000, avatar: require('@/assets/profile/5.png') },
  ];

  const formatPoints = (points) => {
    return points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Leaderboard</Text>
    </View>
  );

  const renderTopPlayer = () => (
    <View style={styles.topPlayerContainer}>
      <View style={styles.rankBadge}>
        <Text style={styles.rankText}>🏅 Rank 1</Text>
      </View>
      <Image
        source={leaderboardData[0].avatar}
        style={styles.topPlayerAvatar}
      />
      <Text style={styles.topPlayerName}>You</Text>
      <Text style={styles.topPlayerPoints}>{formatPoints(leaderboardData[0].points)} Points</Text>
    </View>
  );

  const renderLeaderboardItem = (item, index) => (
    <View key={item.id} style={styles.leaderboardItem}>
      <Image source={item.avatar} style={styles.avatarSmall} />
      <Text style={styles.playerName}>{item.name}</Text>
      <Text style={styles.points}>{formatPoints(item.points)} PTS</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />
      {renderHeader()}
      {renderTopPlayer()}
      <ScrollView style={styles.leaderboardList}>
        {leaderboardData.map(renderLeaderboardItem)}
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.navItemActive]}>
          <Text>🏆</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  topPlayerContainer: {
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    padding: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  rankBadge: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 16,
  },
  rankText: {
    fontWeight: 'bold',
  },
  topPlayerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  topPlayerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  topPlayerPoints: {
    fontSize: 20,
    opacity: 0.8,
	color: 'purple',
	fontWeight: '600',
  },
  leaderboardList: {
    flex: 1,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  playerName: {
    flex: 1,
    fontSize: 16,
  },
  points: {
    fontSize: 16,
    color: 'purple',
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingBottom: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  navItemActive: {
    backgroundColor: '#F0E6FF',
    borderRadius: 8,
  },
});

export default LeaderboardScreen;
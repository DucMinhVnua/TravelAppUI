import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

// Font
import { useFonts } from "expo-font";

// colors
import colors from "../assets/colors/colors";

// Data
import discoverCategoriesData from "../assets/data/discoverCategoriesData";
import discoverData from "../assets/data/discoverData";
import activitiesData from "../assets/data/activitiesData";
import learnMoreData from "../assets/data/learnMoreData";

function HomeScreen({ navigation }) {
  // load font
  const [loaded] = useFonts({
    latoBold: require("../assets/fonts/Lato-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  // renderDiscoverItem
  const renderDiscoverItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("Details", {
          item: item,
        })
      }
    >
      <ImageBackground
        source={item.image}
        style={styles.discoverItem}
        imageStyle={styles.discoverItemImage}
      >
        <Text style={styles.discoverItemTitle}>{item.title}</Text>
        <View style={styles.discoverItemLocationWrapper}>
          <Image
            style={styles.imageLocal}
            source={require("../assets/images/VectorLocal.png")}
          />
          <Text style={styles.discoverItemLocationText}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  // renderActivitiesItem
  const renderActivitiesItem = ({ item }) => (
    <SafeAreaView style={styles.activitiesItemWrapper}>
      <Image source={item.image} style={styles.activitiesItemImage} />
      <Text style={styles.activitiesItemText}>{item.title}</Text>
    </SafeAreaView>
  );

  // renderLearnMoreItem
  const renderLearnMoreItem = ({ item }) => (
    <View>
      <ImageBackground
        source={item.image}
        style={styles.learnMoreItemImage}
        imageStyle={{ borderRadius: 20 }}
      >
        <Text style={styles.learnMoreItemtitle}>{item.title}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={StyleSheet.container}>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
      />
      <ScrollView>
        {/* header */}
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/images/menu.png")}
            style={styles.imageLeft}
          />
          <Image
            source={require("../assets/images/person.png")}
            style={styles.imageRight}
          />
        </View>

        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <View style={styles.discoverTitleWrapper}>
            <Text style={styles.discoverTitleText}>Discover</Text>
          </View>

          <ScrollView horizontal={true}>
            <View style={styles.discoverCategoriesWrapper}>
              {discoverCategoriesData.map((item) => (
                <View key={item.id}>
                  <Text
                    style={[
                      styles.discoverCategoriesText,
                      {
                        color:
                          item.id == "discoverCategoriesData-1"
                            ? colors.orange
                            : colors.gray,
                      },
                    ]}
                  >
                    {item.text}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={styles.discoverItemWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities */}
        <View style={styles.activitieswrapper}>
          <SafeAreaView style={styles.activitiesTitle}>
            <Text style={styles.activitiesTitleText}>Activities</Text>
          </SafeAreaView>
          <SafeAreaView>
            <FlatList
              data={activitiesData}
              renderItem={renderActivitiesItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </SafeAreaView>
        </View>

        {/* Learn More */}
        <View style={styles.learnMoreWrapper}>
          <View style={styles.learnMoreTextWrapper}>
            <Text style={styles.learnMoreText}>Learn More</Text>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    marginTop: 35,
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  imageLeft: {
    width: 20,
    height: 20,
  },
  imageRight: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  discoverWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  discoverTitleWrapper: {},
  discoverTitleText: {
    fontSize: 32,
    fontFamily: "latoBold",
  },
  discoverCategoriesWrapper: {
    flexDirection: "row",
  },
  discoverCategoriesText: {
    marginTop: 20,
    marginRight: 30,
    fontFamily: "latoBold",
    fontSize: 16,
  },
  discoverItem: {
    width: 170,
    height: 250,
    marginTop: 20,
    marginRight: 20,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "latoBold",
    letterSpacing: 1,
  },
  discoverItemLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  imageLocal: {
    marginRight: 9,
  },
  discoverItemLocationText: {
    color: colors.white,
    fontFamily: "latoBold",
    fontSize: 10,
    letterSpacing: 1.2,
  },
  activitieswrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  activitiesTitle: {
    marginBottom: 20,
  },
  activitiesTitleText: {
    fontSize: 24,
    fontFamily: "latoBold",
    lineHeight: 28,
  },
  activitiesItemWrapper: {
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  activitiesItemImage: {
    width: 30,
    resizeMode: "contain",
  },
  activitiesItemText: {
    fontFamily: "latoBold",
    fontSize: 10,
    color: colors.gray,
    marginTop: 5,
  },

  // learn more
  learnMoreWrapper: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  learnMoreTextWrapper: {},
  learnMoreText: {
    fontSize: 24,
    fontFamily: "latoBold",
    lineHeight: 28,
  },
  learnMoreItemImage: {
    width: 170,
    height: 180,
    marginTop: 20,
    marginRight: 20,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  learnMoreItemtitle: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "latoBold",
    letterSpacing: 1,
  },
});

export default HomeScreen;

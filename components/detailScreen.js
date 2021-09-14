import React from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

// Font
import { useFonts } from "expo-font";

// colors
import colors from "../assets/colors/colors";

// icon
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  // load font
  const [loaded] = useFonts({
    latoBold: require("../assets/fonts/Lato-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  // item
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={{ marginTop: 40, marginHorizontal: 20 }}
            name="ios-chevron-back-outline"
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.location}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.LocationWrapper}>
            <Image
              style={styles.imageLocal}
              source={require("../assets/images/VectorLocal.png")}
            />
            <Text style={styles.LocationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Description */}
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <AntDesign name="heart" size={24} color={colors.orange} />
        </View>
        <View style={styles.descriptionTitleWrapper}>
          <Text style={styles.descriptionTitleText}>Description</Text>
        </View>
        <View style={styles.descriptionTextWrapper}>
          <Text style={styles.descriptionText}>{item.Description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <Text style={styles.info}>${item.price}<Text style={{fontSize: 14, color: colors.darkGray}}> /person</Text></Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>RATING</Text>
            <Text style={styles.info}>${item.rating}<Text style={{fontSize: 14, color: colors.darkGray}}> /5</Text></Text>
          </View>
          <View style={styles.infoWrapper}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <Text style={styles.info}>${item.duration}<Text style={{fontSize: 14, color: colors.darkGray}}>  hour</Text></Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity= {0.8}
          onPress={() => {
            alert("You booked a trip!");
          }}
        >
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: colors.orange,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                paddingHorizontal: 118,
                paddingVertical: 16,
                color: colors.white,
                fontSize: 18,
                fontFamily: "latoBold"
              }}
            >Book Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const heightWindow = Dimensions.get("window").height;
console.log(heightWindow);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backgroundImage: {
    height: heightWindow * 0.5,
    justifyContent: "space-between",
  },
  location: {
    marginHorizontal: 20,
    marginVertical: 49,
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontFamily: "latoBold",
    letterSpacing: 1,
    width: "80%",
  },
  LocationWrapper: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  imageLocal: {
    marginRight: 9,
  },
  LocationText: {
    color: colors.white,
    fontFamily: "latoBold",
    fontSize: 20,
    letterSpacing: 1.2,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -20,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  descriptionTitleWrapper: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  descriptionTitleText: {
    fontSize: 24,
    fontFamily: "latoBold",
  },
  descriptionTextWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "latoBold",
    color: colors.darkGray
  },
  infoWrapper: {
    marginHorizontal: 20,
    marginBottom: 35,
  },
  infoTitle: {
    fontSize: 12,
    color: colors.darkGray
  },
  info: {
    fontSize: 24,
    color: colors.orange
  },
});

export default DetailScreen;

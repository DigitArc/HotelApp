import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import { TouchableOpacity } from "react-native-gesture-handler";

const CheckInSuccessScreen = props => {
  return (
    <Transition appear="vertical">
      <View style={styles.container}>
        {/* MAIN VIEW */}
        <View
          style={{
            marginTop: 90,
            paddingHorizontal: 10,
            flex: 1
          }}
        >
          <Text style={{ fontSize: 22, fontFamily: "Roboto-Medium" }}>
            Request Completed
          </Text>
          <Text
            style={{
              fontFamily: "Roboto-Light",
              fontSize: 16,
              paddingVertical: 10
            }}
          >
            * Your check-in request is now being processed at this moment.
          </Text>

          <Image
            source={{
              uri:
                "https://maxxroyalcdn.blob.core.windows.net/uploads/20170302103601864.jpg"
            }}
            style={{
              height: 200,
              width: Dimensions.get("window").width - 20,
              borderRadius: 5
            }}
          />

          {/* SUB CONTAINER BELOW IMAGE */}
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontFamily: "Roboto-Light",
                fontSize: 20,
                paddingBottom: 5
              }}
            >
              King Suite
            </Text>
            <Text style={{ fontFamily: "Roboto-Light", fontSize: 13 }}>
              Entire Luxury King Suit
            </Text>
          </View>

          {/* TINY LINE */}
          <View
            style={{
              width: "100%",
              height: 0.2,
              backgroundColor: "gray",
              marginVertical: 10
            }}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {/* CHECK IN */}
            <View>
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 15
                }}
              >
                Wednesday
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 15
                }}
              >
                May 22, 2019
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto-Light",
                  fontSize: 15
                }}
              >
                Check-in: 12AM
              </Text>
            </View>

            {/* CHECK OUT */}
            <View>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Roboto-Light",
                  fontSize: 15
                }}
              >
                Thursday
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Roboto-Light",
                  fontSize: 15
                }}
              >
                May 24, 2019
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Roboto-Light",
                  fontSize: 15
                }}
              >
                Checkout: 11PM
              </Text>
            </View>
          </View>

          {/* TINY LINE */}
          <View
            style={{
              width: "100%",
              height: 0.2,
              backgroundColor: "gray",
              marginVertical: 10
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.popToTop();
            props.navigation.navigate("Home");
          }}
          style={{
            height: 90,
            zIndex: 0,
            width: Dimensions.get("window").width,
            backgroundColor: "#FF5A5F",
            marginTop: "auto",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
              fontFamily: "Roboto-Light"
            }}
          >
            Go Home
          </Text>
        </TouchableOpacity>
      </View>
    </Transition>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CheckInSuccessScreen;

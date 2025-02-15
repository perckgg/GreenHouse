import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SettingScreen from "../screens/Setting/SettingScreen";
import StatisticScreen from "../screens/Statistic/StatisticScreen";
import { AppTabParamList, HomeStackParamList } from "../utils/navigator";
import HomeScreen from "../screens/Home/HomeScreen";
import { COLORS, icons } from "../constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ControlScreen from "../screens/Control/ControlScreen";
import NotifyScreen from "../screens/Notification/NotifyScreen";
const Tab = createBottomTabNavigator<AppTabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackCmp = ({
  navigation,
}: BottomTabScreenProps<AppTabParamList, "HomeStack">): JSX.Element => {
  // <AppTabParamList, "Home"> Home here must match with AppTabParamList and name attribute of Tab.Screen below
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.mainBackground },
        headerShadowVisible: false,
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={icons.left}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
          </TouchableOpacity>
        ),
        headerTitle: "Home page",
      }}
    >
      {/* name attribute here must match with HomeStackParamList */}
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

function TabNavigator() {
  return (
    // name attribute of Tab.Screen here must match with AppTabParamList defined in natigator.tsx file
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackCmp}
        options={{
          title: "Home",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="home" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: COLORS.secondary,
          },
          tabBarActiveBackgroundColor: COLORS.buttonBg,
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={StatisticScreen}
        options={{
          title: "Statistic",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="chart-line" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: COLORS.secondary,
          },
          tabBarActiveBackgroundColor: COLORS.buttonBg,
          tabBarActiveTintColor: COLORS.buttonBg,
        }}
      />
      <Tab.Screen
        name="Control"
        component={ControlScreen}
        options={{
          title: "Control",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="database" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: COLORS.secondary,
          },
          tabBarActiveBackgroundColor: COLORS.buttonBg,
          tabBarActiveTintColor: COLORS.buttonBg,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotifyScreen}
        options={{
          title: "Notification",
          tabBarIcon: () => {
            return (
              <>
                <MaterialCommunityIcons name="bell" size={27} />
              </>
            );
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: COLORS.secondary,
          },
          tabBarActiveBackgroundColor: COLORS.buttonBg,
          tabBarActiveTintColor: COLORS.buttonBg,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "Setting",
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="account" size={27} />;
          },
          tabBarLabelStyle: {
            fontSize: 13,
            color: COLORS.secondary,
          },
          tabBarActiveBackgroundColor: COLORS.buttonBg,
          tabBarActiveTintColor: COLORS.buttonBg,
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

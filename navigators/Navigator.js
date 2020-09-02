import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../views/Profile";
import Home from "../views/Home";

const Tab = createBottomTabNavigator();

const TabScreen = () => {
    return (
        
            <Tab.Navigator>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
          
    );
   };
   
   const StackScreen = () => {
       const isLoggedIn = true;
    return (
      <Stack.Navigator>
          {isLoggedIn ? (
              <>
              <Stack.Screen name="Home" component={TabScreen}/>
              <Stack.Screen name="Single" component={Single}/>
              </>
          )}
      </Stack.Navigator>
    );
   };

const Navigator = () => {
  return (
    <NavigationContainer>
    </NavigationContainer>
  );
};

export default Navigator;

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./components/Home";
import ListModal from "./components/ListModal";
import ListCards from "./components/ListCard";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Home} />
      <Route path="/listmodal" component={ListModal} />
    </NativeRouter>
  );
}

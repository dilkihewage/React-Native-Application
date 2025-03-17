import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import Voice from "@react-native-voice/voice";

const VoiceToText = () => {
  const [text, setText] = useState("");

  const startListening = () => {
    Voice.start("en-US");
    Voice.onSpeechResults = (event) => setText(event.value[0]);
  };

  return (
    <View>
      <Button title="Start Speaking" onPress={startListening} />
      <Text>{text}</Text>
    </View>
  );
};

export default VoiceToText;

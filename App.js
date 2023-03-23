import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>

    <View>

<Image  
  source={{uri: './assets/img/imgindexHL.avif'}}
  className="h-7 w-7 bg-gray-300 rounded-full"
  />
  </View>

    </SafeAreaView>
  );
}


import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { WebView as WebViewReact } from 'react-native-webview'

export default function WebView() {
  const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `
  return (
    <View style={styles.container}>
      <WebViewReact
        source={{
          uri: 'http://192.168.110.102:3000',
        }}
        injectedJavaScript={INJECTEDJAVASCRIPT}
        scrollEnabled
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
})

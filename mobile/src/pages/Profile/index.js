import React from 'react';
import { WebView } from 'react-native-webview';

// import { Container } from './styles';

export default function Profile({ route, navigation }) {
    const { github_username } = route.params;
    return (
        <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${github_username}` }} />
    );
}

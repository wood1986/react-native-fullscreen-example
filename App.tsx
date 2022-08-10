// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

import React, {useRef} from 'react';
import {
  View
} from 'react-native';
import Video from 'react-native-video';

export default function () {
  const videoRef = useRef<Video>(null);
  return <View style={{height: '50%', width: '50%', backgroundColor: 'blue'}}>
    <Video
      ref={videoRef}
      source={require('./playstation.mp4')}
      controls={true}
      resizeMode={'contain'}
      paused={true}
      style={[{flex: 1, height: '100%', width: '100%'}]}
      onLoad={() => {
        videoRef.current?.seek(0);
      }}
    />
  </View>
}
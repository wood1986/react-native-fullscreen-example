// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

import React, {useRef, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import Video from 'react-native-video';

export default function () {
  const videos = [require('./playstation1.mp4'), require('./playstation2.mp4')];
  const [index, setIndex] = useState(0);

  const videoRef = useRef<Video>(null);
  return (
    <SafeAreaView style={{height: '50%', width: '50%', backgroundColor: 'blue'}}>
      <Button
        title="NEXT"
        onPress={() => {
          setIndex((index + 1) % videos.length);
        }}
      />
      <Video
        ref={videoRef}
        source={videos[index]}
        controls={true}
        resizeMode={'contain'}
        style={[{flex: 1, height: '100%', width: '100%'}]}
        onLoad={() => {
          videoRef.current?.seek(0);
        }}
      />
    </SafeAreaView>
  );
}

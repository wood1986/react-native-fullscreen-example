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
import {SafeAreaView, Button} from 'react-native';
import Video from 'react-native-video';

export default function () {
  const videoRef = useRef<Video>(null);
  const [on, setOn] = useState(true);
  const videos = [
    require('./playstation2.mp4'),
    require('./playstation1.mp4')
  ];
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={{height: '50%', width: '50%', backgroundColor: 'blue'}}>
      <Button
        title={'Toggle'}
        onPress={() => {
          setOn(!on);
        }}
      />
      {on ? (
        <>
          <Button
            title={'Next'}
            onPress={() => {
              setIndex((index + 1) % videos.length)
            }}
          />
          <Video
            key={index}
            ref={videoRef}
            source={videos[index]}
            controls={true}
            resizeMode={'contain'}
            paused={true}
            style={[{flex: 1, height: '100%', width: '100%'}]}
          />
        </>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

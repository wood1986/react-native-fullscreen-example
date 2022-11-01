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

  return (
    <SafeAreaView style={{height: '50%', width: '50%', backgroundColor: 'blue'}}>
      <Button
        title={'Toggle'}
        onPress={() => {
          setOn(!on);
        }}
      />
      {on ? (
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
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

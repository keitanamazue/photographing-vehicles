/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

export default function step2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <div>
      <Camera
        ref={camera}
        errorMessages={{
          noCameraAccessible: undefined,
          permissionDenied: undefined,
          switchCamera: undefined,
          canvas: undefined,
        }}
      />
      {/* @ts-ignore */}
      <button onClick={() => setImage(camera.current.takePhoto())}>
        Take photo
      </button>
      {/* <img src="/guide_01.png" alt="Taken photo" /> */}
    </div>
  );
}

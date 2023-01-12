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
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%) rotate(90deg)",
          backgroundImage: "url(/guide_01.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50%",
          margin: "0 auto",
        }}
      />
      <button
        style={{
          position: "absolute",
          bottom: "10px",
          left: "20px",
          width: "120px",
          height: "0px",
        }}
      >
        キャプチャ
      </button>
      {/* @ts-ignore */}
      <button onClick={() => setImage(camera.current.takePhoto())}>
        Take photo
      </button>
    </div>
  );
}

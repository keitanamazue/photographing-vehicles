/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

export default function step2() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);
  const [image, setImage] = useState(null);

  const router = useRouter();

  const NextTake = () => {
    /* @ts-ignore */
    setImage(camera.current.takePhoto());
    router.push("/take/step3");
  };

  return (
    <div>
      <Camera
        ref={camera}
        facingMode="environment"
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
          top: "55%",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%) rotate(90deg)",
          backgroundImage: "url(/guide_01.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "45%",
          margin: "0 auto",
        }}
      />
      <button
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          width: "120px",
          height: "30px",
        }}
        onClick={() => NextTake()}
      >
        撮影
      </button>
    </div>
  );
}

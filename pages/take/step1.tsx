/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import { Header } from "../../components/Header";

export default function step1() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);
  const [image, setImage] = useState("");

  const router = useRouter();

  const NextTake = () => {
    if (!camera.current) return;
    /* @ts-ignore */
    setImage(camera.current.takePhoto());
    console.log({ image });
    router.push({ pathname: "/take/step2", query: { image } });
  };

  return (
    <div>
      <Header />
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
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "28%",
          left: "15%",
          transform: "translateY(-50%) translateX(-50%) rotate(90deg)",
        }}
      >
        <p
          style={{
            background: "#c9c9c9",
            width: "fit-content",
            padding: "5px",
            marginBottom: "3px",
          }}
        >
          1枚目
        </p>
        <p
          style={{
            background: "#c9c9c9",
            width: "fit-content",
            padding: "5px",
          }}
        >
          ガイドの中に車を収めて撮影してください
        </p>
      </div>
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
          width: "70px",
          height: "70px",
        }}
        onClick={() => NextTake()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          style={{
            zIndex: 100,
            position: "absolute",
            left: "50%",
            transform: "translateY(-50%) translateX(-50%)",
            width: "100%",
            height: "100%",
          }}
          src="/record_button.png"
          alt="record_button"
        />
      </button>
    </div>
  );
}

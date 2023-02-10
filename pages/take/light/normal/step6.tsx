/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import { Header } from "../../../../components/Header";

export default function step6() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);

  const router = useRouter();

  const NextTake = () => {
    if (!camera.current) return;
    /* @ts-ignore */
    const image: string = camera.current.takePhoto();
    router.push({
      pathname: "/take/light/normal/step7",
      query: {
        0: router.query[0],
        1: router.query[1],
        2: router.query[2],
        3: router.query[3],
        4: router.query[4],
        5: image,
      },
    });
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
          6枚目
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
          top: "50%",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%) rotate(90deg)",
          backgroundImage: "url(/light/normal/light_06.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "45%",
          margin: "0 auto",
          opacity: "0.6",
          filter: "sepia(300%) hue-rotate(150deg) saturate(450%)",
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

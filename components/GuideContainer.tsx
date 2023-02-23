import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { Guide } from "./Guide";
import { Header } from "./Header";
import { ImageList } from "./ImageList";

export const GuideContainer = () => {
  const [path, setPath] = useState("");
  const [id, setId] = useState(0);
  const router = useRouter();
  const stepNumber = id;
  const nextStepNumber = id + 1;
  //   /take/light/normal/step/1
  const pathArray = path.split("/"); //スラッシュで分割して配列をつくる
  const pathWithoutStep = pathArray.slice(0, 4);
  const pathWithStep = pathArray.slice(0, 5).join("/");
  const nextPathname = pathWithoutStep.join("/") + "/step/" + nextStepNumber; //スラッシュで結合して文字列にする

  const pathWithoutTakeAndStep = pathArray.slice(2, 4);
  const pathWithoutStepDirectory = pathWithoutTakeAndStep.join("/");

  const formattedStepNumber =
    stepNumber.toString().length === 1 ? `0${stepNumber}` : stepNumber;
  const pageGuideImage = `/${pathWithoutStepDirectory}/${formattedStepNumber}.png`;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);

  const NextTake = () => {
    if (!camera.current) return;
    /* @ts-ignore */
    const image: string = camera.current.takePhoto();
    const imageList = ImageList({ image, router });

    Object.keys(imageList).filter((key) => {
      if (key === stepNumber.toString()) {
        router.push({
          pathname:
            stepNumber === 12 ? `${pathWithStep}/stepLast/` : nextPathname,
          query: imageList[stepNumber],
        });
      }
    });
  };

  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setPath(router.asPath);
      setId(Number(router.query.stepId));
    }
  }, [router]);

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
          {stepNumber}枚目
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
      <Guide path={pageGuideImage} />
      {/* <Guide path={`/light/normal/light_0${formattedStepNumber}.png`} /> */}
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
};

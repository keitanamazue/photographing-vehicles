/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { Camera } from "react-camera-pro";
import style from "styled-jsx/style";
import { Guide } from "../../../../components/Guide";
import { Header } from "../../../../components/Header";

export default function Edit() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);
  const router = useRouter();
  const [path, setPath] = useState("");
  const pathName = path.split("/");
  const pathArray = path.split("/"); //スラッシュで分割して配列をつくる
  const pathWithoutTakeAndStep = pathArray.slice(2, 4);
  const pathWithoutStepDirectory = pathWithoutTakeAndStep.join("/");
  const pathDirectory = pathName.slice(1, 4).join("/");

  const editDone = () => {
    if (!camera.current) return;
    /* @ts-ignore */
    const image: string = camera.current.takePhoto();
    const newImageList = router.query;
    Object.keys(router.query).forEach((key) => {
      if (key === router.query.editIndex) {
        newImageList[key] = image;
        return;
      }
      newImageList[key] = router.query[key];
    });
    router.push({
      pathname: `/${pathDirectory}/step/stepLast`,
      query: { ...newImageList },
    });
  };

  const editIndex2NumberAndPlus1 = Number(router.query.editIndex) + 1;
  function changeDigit2DoubleDigit(index: number) {
    /*一旦数値を文字列に変換し、長さを求める*/
    return index.toString().length === 1 ? `0${index}` : index;
  }
  const formattedIndex = changeDigit2DoubleDigit(editIndex2NumberAndPlus1);
  const editImageFrame = `/${pathWithoutStepDirectory}/${formattedIndex}.png`;

  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setPath(router.asPath);
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
          {editIndex2NumberAndPlus1}枚目
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
      <Guide path={editImageFrame} />
      <button
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateY(-50%) translateX(-50%)",
          width: "70px",
          height: "70px",
        }}
        onClick={() => editDone()}
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

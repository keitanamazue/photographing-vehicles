import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { Camera } from "react-camera-pro";
import { Guide } from "./Guide";
import { Header } from "./Header";
import { ImageList } from "./ImageList";
import imageCompression from "browser-image-compression";
import path from "path";
import style from "styled-jsx/style";

export const GuideContainer = (props: { setData: any; setActiveStep: any }) => {
  const { setData, setActiveStep } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const camera = useRef(null);

  const NextTake = async () => {
    if (!camera.current) return;
    /* @ts-ignore */
    const image: string = camera.current.takePhoto();

    //画像をbase64からblobに変換する
    // base64のデコード
    var bin = atob(image.replace(/^.*,/, ""));
    // バイナリデータ化
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      buffer[i] = bin.charCodeAt(i);
    }
    // ファイルオブジェクト生成(この例ではjpegファイル)
    const imageFile = new File([buffer.buffer], "image", {
      type: "image/jpg",
    });

    const options = {
      maxSizeMB: 0.7,
      maxWidth: 1280,
      maxHeight: 720,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      const compressedBase64 = await imageCompression.getDataUrlFromFile(
        compressedFile
      );
      setData((prev: any) => {
        return [
          ...prev,
          {
            compressedBase64,
          },
        ];
      });
      setActiveStep((prev: number) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   // idがqueryで利用可能になったら処理される
  //   if (router.asPath !== router.route) {
  //     setPath(router.asPath);
  //     setId(Number(router.query.stepId));
  //   }
  // }, [router]);

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
      <Box
        display="flex"
        alignItems="center"
        sx={{
          position: "absolute",
          top: "44%",
          right: "-60%",
          transform: "rotate(90deg)",
        }}
      >
        <Box
          style={{
            marginRight: "82px",
          }}
        >
          <Link href="/">
            <Image
              src="/round360_logo.png"
              width={120}
              height={20}
              alt="logo"
            />
          </Link>
        </Box>
        <div
          style={{
            background: "#ffbcbc",
          }}
        >
          <p
            style={{
              color: "#ff2d2d",
              padding: "4px",
              fontWeight: "bold",
              width: "fit-content",
              fontSize: "10px",
              whiteSpace: "nowrap",
            }}
          >
            ナンバープレートを白い紙などで隠した写真をアップロードしてください
          </p>
        </div>
      </Box>

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
      {/* <Guide path={pageGuideImage} /> */}
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
            zIndex: 10,
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

/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

export default function step1() {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  const getWindowDimensions = () => {
    if (typeof window === "undefined") return;
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  console.log({ windowDimensions });

  const videoConstraints = {
    width: windowDimensions?.width,
    height: windowDimensions?.height,
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <Webcam
          audio={false}
          width={windowDimensions?.width}
          height={windowDimensions?.height}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        >
          {/* @ts-ignore */}
          {() => (
            <>
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
                onClick={capture}
              >
                キャプチャ
              </button>
            </>
          )}
        </Webcam>
      </div>

      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              削除
            </button>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </>
  );
}

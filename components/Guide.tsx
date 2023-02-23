import React from "react";

export const Guide = (props: { path: string }) => {
  const { path } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "57%",
        transform: "translateY(-50%) translateX(-50%) rotate(90deg)",
        backgroundImage: `url(${path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "560px",
        height: "260px",
        margin: "0 auto",
        opacity: "0.6",
        filter: "sepia(300%) hue-rotate(150deg) saturate(450%)",
      }}
    />
  );
};

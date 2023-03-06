import React from "react";

export const Guide = (props: { path: string }) => {
  const { path } = props;
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "54%",
          transform: "translateY(-50%) translateX(-50%) rotate(90deg)",
          width: "380px",
          height: "230px",
          margin: "0 auto",
          border: "solid 1px white",
        }}
      />
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
          width: "450px",
          height: "220px",
          margin: "0 auto",
          opacity: "0.6",
          filter: "sepia(300%) hue-rotate(150deg) saturate(450%)",
        }}
      />
    </div>
  );
};

import React from "react";
import QRCode, { QRCodeProps } from "react-qr-code";

const QRCodeGenerator = ({
  value,
  level = "H",
  size = 200,
  bgColor,
  fgColor,
}: QRCodeProps) => {
  return (
    <QRCode
      value={value}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      level={level}
      size={size}
      bgColor={bgColor}
      fgColor={fgColor}
    />
  );
};

export default QRCodeGenerator;

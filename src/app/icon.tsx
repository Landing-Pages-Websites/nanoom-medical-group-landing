import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Nanoom mark — warm ivory tile with a deep-teal serif "N", gold hairline.
export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F5C55",
          color: "#FBF9F5",
          fontSize: 22,
          fontWeight: 700,
          fontFamily: "Georgia, 'Times New Roman', serif",
          borderRadius: 7,
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}

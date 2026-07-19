import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Nanoom mark — deep-teal field with a serif "N" on warm ivory.
export default function AppleIcon(): ImageResponse {
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
          fontSize: 112,
          fontWeight: 700,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        N
      </div>
    ),
    { ...size },
  );
}

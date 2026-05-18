import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Zenqbit — Custom Software, AI & IoT Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #141414 0%, #1a1a2e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            Zen
            <span style={{ color: "#F0544F" }}>Q</span>
            bit
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.6)",
              maxWidth: "700px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Custom Software, AI &amp; IoT Solutions
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "16px",
              fontSize: "16px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <span>Cyberjaya, Malaysia</span>
            <span>•</span>
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

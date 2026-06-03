import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7c3aed",
          borderRadius: 36,
        }}
      >
        <svg
          width="108"
          height="108"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M7 25V13.5L16 8l9 5.5V25h-3.5v-5.5h-11V25H7z"
            fill="#ffffff"
          />
          <path
            d="M12.5 19.5h7v5.5h-7V19.5z"
            fill="#ddd6fe"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}

import { NextConfig } from "next";
import { ImageResponse } from "next/server";

export const config: NextConfig = {
  runtime: "edge",
};

export default async function handler() {
  const font = await fetch(
    new URL("@public/LibreBaskerville-Bold.ttf", import.meta.url)
  );
  const fontData = await font.arrayBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to bottom, #f1f5f9, #e0f2fe)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "solid 8px #334155",
            borderRadius: "32px",
            padding: "32px",
          }}
        >
          <svg
            width="128px"
            fill="#0ea5e9"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            clip-rule="evenodd"
            viewBox="0 0 24 22"
          >
            <path
              fill-rule="nonzero"
              d="M17.278 21.058 5.318 4.023H5.21v11.609c0 .9.032 1.61.095 2.132s.198.927.405 1.215c.207.288.495.477.864.567.369.09.85.144 1.444.162v1.08H0v-1.08c.666-.018 1.201-.076 1.606-.175.405-.1.72-.284.945-.554.225-.27.374-.652.446-1.147.072-.495.108-1.165.108-2.011V4.968c0-.756-.036-1.381-.108-1.876-.072-.495-.207-.887-.405-1.175a1.57 1.57 0 0 0-.85-.607c-.37-.117-.86-.194-1.472-.23V0h7.532l10.88 15.605h.108V5.157c0-.882-.032-1.588-.095-2.12-.063-.53-.198-.94-.405-1.228a1.446 1.446 0 0 0-.864-.567c-.369-.09-.85-.144-1.444-.162V0H24v1.08c-.666.018-1.201.077-1.606.176-.405.099-.72.283-.945.553-.225.27-.374.657-.446 1.161-.072.504-.108 1.17-.108 1.998v16.09h-3.617Z"
            />
          </svg>
        </div>
        <h1
          style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: "48px",
            color: "#0ea5e9",
          }}
        >
          norbertmerkli.dev
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Libre Baskerville",
          data: fontData,
        },
      ],
    }
  );
}

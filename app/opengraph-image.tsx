import { ImageResponse } from "next/og";
import { EVENT } from "@/lib/data";

export const alt =
  "PAZ Kids Conference 2027 — 29 de maio de 2027, Paz Church Barueri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de compartilhamento (WhatsApp, redes sociais, preview do Google).
// Gerada no build/edge a partir da identidade visual — sem depender de um
// asset estático.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          backgroundImage:
            "linear-gradient(135deg, #EEF0FF 0%, #E3E6FF 52%, #EFE0FB 100%)",
          color: "#0F1211",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* brilhos iridescentes nos cantos */}
        <div
          style={{
            position: "absolute",
            top: "-170px",
            right: "-130px",
            width: "440px",
            height: "440px",
            borderRadius: "9999px",
            background: "rgba(203,108,230,0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-180px",
            left: "-140px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: "rgba(62,116,201,0.20)",
          }}
        />
        {/* badge PK */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "150px",
            height: "150px",
            borderRadius: "36px",
            backgroundImage: "linear-gradient(135deg, #043C86 0%, #CB6CE6 100%)",
            boxShadow: "0 24px 50px rgba(4,60,134,0.28)",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-4px",
            }}
          >
            PK
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "44px",
          }}
        >
          <div style={{ display: "flex", fontSize: "84px", fontWeight: 800, lineHeight: 1.05, color: "#043C86" }}>
            PAZ Kids
          </div>
          <div style={{ display: "flex", fontSize: "84px", fontWeight: 800, lineHeight: 1.05, color: "#0F1211" }}>
            Conference 2027
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "38px",
            fontWeight: 600,
            color: "#3F4348",
            marginTop: "30px",
          }}
        >
          {EVENT.dateLabel} · {EVENT.venue}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            marginTop: "40px",
            padding: "16px 32px",
            borderRadius: "9999px",
            backgroundColor: "#043C86",
            color: "#ffffff",
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          Inscrições abertas · vagas limitadas
        </div>
      </div>
    ),
    { ...size }
  );
}

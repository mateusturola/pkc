import { ImageResponse } from "next/og";
import { EVENT } from "@/lib/data";

export const alt =
  "PAZ Kids Conference 27 — 29 de maio de 2027, Paz Church Barueri";
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
            "linear-gradient(135deg, #1b0e3a 0%, #2a1356 55%, #3a1d6e 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* brilho decorativo no canto */}
        <div
          style={{
            position: "absolute",
            top: "-160px",
            right: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "9999px",
            background: "rgba(255,200,61,0.28)",
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
            backgroundColor: "#2BA9E0",
            boxShadow: "0 24px 50px rgba(0,0,0,0.45)",
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
          <div style={{ display: "flex", fontSize: "84px", fontWeight: 800, lineHeight: 1.05 }}>
            PAZ Kids
          </div>
          <div style={{ display: "flex", fontSize: "84px", fontWeight: 800, lineHeight: 1.05 }}>
            Conference 27
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "38px",
            fontWeight: 600,
            color: "#E9E2FB",
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
            backgroundColor: "#FFC83D",
            color: "#1b0e3a",
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          Lote promocional · {EVENT.promoLotPrice}
        </div>
      </div>
    ),
    { ...size }
  );
}

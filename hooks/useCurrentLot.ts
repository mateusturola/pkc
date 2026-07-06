"use client";

import { useEffect, useState } from "react";
import { DEFAULT_LOT_INDEX, LOTS } from "@/lib/data";

/**
 * Retorna o lote vigente pela data (fuso do visitante), o próximo lote e os
 * encerrados. Começa em DEFAULT_LOT_INDEX (o lote vigente hoje) para o
 * primeiro paint já mostrar o preço certo sem mismatch de hidratação; o
 * useEffect corrige no cliente quando a data virar o lote.
 */
export default function useCurrentLot() {
  const [idx, setIdx] = useState(DEFAULT_LOT_INDEX);

  useEffect(() => {
    const now = Date.now();
    const i = LOTS.findIndex(
      (l) => !l.endISO || now <= new Date(l.endISO).getTime()
    );
    setIdx(i === -1 ? LOTS.length - 1 : i);
  }, []);

  return {
    lot: LOTS[idx],
    next: idx + 1 < LOTS.length ? LOTS[idx + 1] : undefined,
    closed: LOTS.slice(0, idx),
  };
}

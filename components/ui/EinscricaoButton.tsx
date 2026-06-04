import { EINSCRICAO } from "@/lib/data";

type Props = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Botão de inscrição do e-inscrição. O widget (carregado uma vez via
 * next/script na seção Inscrições) liga o clique a qualquer elemento com
 * data-einscricao-event e abre o modal de checkout. Pode ser reusado em vários
 * lugares — todos abrem o mesmo fluxo.
 */
export default function EinscricaoButton({ className, children }: Props) {
  return (
    <button
      type="button"
      className={`ei-button${className ? ` ${className}` : ""}`}
      data-einscricao-event={EINSCRICAO.eventId}
      data-einscricao-url={EINSCRICAO.url}
      data-einscricao-api-url={EINSCRICAO.apiUrl}
      data-einscricao-ms-api-url={EINSCRICAO.msApiUrl}
      data-einscricao-receipt-url={EINSCRICAO.receiptUrl}
      data-einscricao-api-participants-url={EINSCRICAO.participantsUrl}
    >
      {children}
    </button>
  );
}

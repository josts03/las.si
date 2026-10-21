import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF, SMS_HREF } from '../data/site';

interface Props {
  className?: string;
  variant?: 'primary' | 'dark' | 'light';
  /** Samo »Pokliči« brez številke (ozki prostori). */
  short?: boolean;
}

/**
 * Glavni poziv na strani. Spletnega naročanja ni (želja salona): termin se dogovori po telefonu.
 */
export function CallButton({ className = '', variant = 'primary', short = false }: Props) {
  return (
    <a href={PHONE_HREF} className={`btn-${variant} ${className}`}>
      <Phone className="h-4 w-4" aria-hidden="true" />
      {short ? 'Pokliči' : <>Pokliči {PHONE_DISPLAY}</>}
    </a>
  );
}

export function SmsButton({ className = '' }: { className?: string }) {
  return (
    <a href={SMS_HREF} className={`btn-outline ${className}`}>
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      Pošlji SMS
    </a>
  );
}

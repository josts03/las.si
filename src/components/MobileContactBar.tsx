import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_HREF, SMS_HREF } from '../data/site';

/** Lepljiva spodnja vrstica na telefonu: klic in SMS vedno na dosegu palca (spletnega naročanja ni). */
export function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a href={SMS_HREF} className="btn-outline flex-1 !px-4">
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          SMS
        </a>
        <a href={PHONE_HREF} className="btn-primary flex-[1.8] !px-4">
          <Phone className="h-4 w-4" aria-hidden="true" />
          Pokliči v salon
        </a>
      </div>
    </div>
  );
}

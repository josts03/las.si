import { Link } from 'react-router-dom';
import { CallButton } from '../components/CallButton';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="Stran ne obstaja – LAS lasni atelje suzana"
        description="Strani, ki jo iščeš, ni. Vrni se na začetek ali nas pokliči."
        path="/404"
        noindex
      />
      <section className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="text-[120px] font-extrabold leading-none tracking-[-0.08em] text-leaf sm:text-[180px]">404</p>
        <h1 className="mt-4 text-[40px] sm:text-[56px]">
          Ta stran se je <span className="accent text-moss">ostrigla na kratko.</span>
        </h1>
        <p className="mt-6 max-w-[520px] text-[17px] text-stone">Strani, ki jo iščeš, ni več. Začni na naslovnici ali nas kar pokliči.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className="btn-dark">Na naslovnico</Link>
          <CallButton />
        </div>
      </section>
    </>
  );
}

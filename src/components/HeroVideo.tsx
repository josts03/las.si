import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/** Do te širine dobi stran pokončni izrez 4 : 5 (1080 × 1350), nad njo ležečega 16 : 9 (1920 × 1080). */
const MOBILE = '(max-width: 639px)';

/**
 * Zanka salona v ozadju naslovnice: roke frizerke pri delu (Higgsfield, iz naslovne fotografije
 * s Facebooka; obrazi niso vidni). Konec videa se prelije v začetek, zato se vrti brez skoka.
 * Pod videom je statična slika (<picture>, ločena za telefon in računalnik); video se pokaže, ko
 * začne teči. Brez zvoka, z gumbom za ustavitev; ob »zmanjšanem gibanju« ostane samo slika.
 */
export function HeroVideo({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React atributa muted ne izpiše v prerenderan HTML, brskalnik pa brez njega ne dovoli samodejnega predvajanja.
    video.muted = true;
    const onPlay = () => {
      setPlaying(true);
      setVisible(true);
    };
    const onPause = () => setPlaying(false);
    video.addEventListener('playing', onPlay);
    video.addEventListener('pause', onPause);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) video.play().catch(() => {});

    // Brskalnik izbere <source> samo ob nalaganju; ob prehodu meje (npr. razširitev okna) ga izberemo znova.
    const mobile = window.matchMedia(MOBILE);
    const onBreakpoint = () => {
      const wasPlaying = !video.paused;
      video.load();
      if (wasPlaying || !reduced) video.play().catch(() => {});
    };
    mobile.addEventListener('change', onBreakpoint);
    return () => {
      video.removeEventListener('playing', onPlay);
      video.removeEventListener('pause', onPause);
      mobile.removeEventListener('change', onBreakpoint);
    };
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const fill = `absolute inset-0 h-full w-full object-cover ${className}`;
  return (
    <>
      <picture>
        <source media={MOBILE} srcSet="/video/salon-mobile-poster.webp" type="image/webp" />
        <img src="/video/salon-poster.webp" alt="" fetchPriority="high" decoding="async" className={fill} />
      </picture>
      <video
        ref={ref}
        className={`${fill} transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source media={MOBILE} src="/video/salon-mobile.webm" type="video/webm" />
        <source media={MOBILE} src="/video/salon-mobile.mp4" type="video/mp4" />
        <source src="/video/salon.webm" type="video/webm" />
        <source src="/video/salon.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Ustavi video' : 'Predvajaj video'}
        className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink/35 text-paper backdrop-blur transition-colors hover:bg-ink/60 sm:bottom-6 sm:right-6"
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
      </button>
    </>
  );
}

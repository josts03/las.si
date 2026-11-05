import { useEffect, useRef, useState } from 'react';
import { preload } from 'react-dom';
import { Pause, Play } from 'lucide-react';

const POSTER = '/video/salon-poster.webp';

/**
 * Zanka salona v ozadju naslovnice: roke frizerke pri delu (Higgsfield, iz naslovne fotografije
 * s Facebooka; obrazi niso vidni). Konec videa se prelije v začetek, zato se vrti brez skoka.
 * Brez zvoka, z gumbom za ustavitev; ob »zmanjšanem gibanju« ostane samo poster.
 */
export function HeroVideo({ className = '' }: { className?: string }) {
  preload(POSTER, { as: 'image', fetchPriority: 'high' });
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React atributa muted ne izpiše v prerenderan HTML, brskalnik pa brez njega ne dovoli samodejnega predvajanja.
    video.muted = true;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.play().catch(() => {});
    }
    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
    };
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <>
      <video
        ref={ref}
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
        poster={POSTER}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
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

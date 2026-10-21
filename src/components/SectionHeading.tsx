import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  /** Na temnem ozadju. */
  light?: boolean;
  as?: 'h1' | 'h2';
}

export function SectionHeading({ eyebrow, title, intro, className = '', light = false, as: Tag = 'h2' }: Props) {
  return (
    <div className={className} data-reveal>
      <p className={`eyebrow mb-5 ${light ? '!text-leaf' : ''}`}>{eyebrow}</p>
      <Tag className={`text-[40px] sm:text-[52px] lg:text-[64px] ${light ? 'text-paper' : ''}`}>{title}</Tag>
      {intro && <p className={`mt-6 max-w-[560px] text-[17px] ${light ? 'text-paper/75' : 'text-stone'}`}>{intro}</p>}
    </div>
  );
}

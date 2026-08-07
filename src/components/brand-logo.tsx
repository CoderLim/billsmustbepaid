import { envConfigs } from '@/config';
import { cn } from '@/lib/utils';

export function BrandLogo({
  name,
  showName = true,
  className,
  imgClassName = 'size-8 rounded-md object-cover',
  nameClassName = 'font-serif text-lg italic',
}: {
  name?: string;
  showName?: boolean;
  className?: string;
  imgClassName?: string;
  nameClassName?: string;
}) {
  const displayName = name ?? envConfigs.app_name;

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <img
        src={envConfigs.app_logo}
        alt={displayName}
        className={imgClassName}
        width={32}
        height={32}
      />
      {showName ? <span className={nameClassName}>{displayName}</span> : null}
    </span>
  );
}

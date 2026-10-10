'use client';

import { cn } from '@/lib/utils';
import { Volume2, VolumeX } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useSoundEnabled } from '@/hooks/use-sound-enabled';

export const SoundToggleButton = ({ className = '' }: { className?: string }) => {
  const { enabled, toggleSound } = useSoundEnabled();
  const label = enabled ? 'Mute sounds' : 'Unmute sounds';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={cn('icon-btn active:scale-95', className)}
          onClick={toggleSound}
          aria-label={label}
          aria-pressed={!enabled}
        >
          {enabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  );
};

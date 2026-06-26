import { X, Play, Pause, Volume2, RotateCcw, ThumbsUp, Sparkles, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(12);
  const [volume, setVolume] = useState(80);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && isOpen) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0; // Loop video mock
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isOpen]);

  if (!isOpen) return null;

  return (
    <div id="video-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-6 backdrop-blur-sm animate-fade-in">
      <div id="video-modal-container" className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-[#1A1D20] text-white shadow-2xl border border-white/10">
        
        {/* Header Bar */}
        <div id="video-modal-header" className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-primary animate-ping" />
            <h3 className="font-sans font-semibold text-sm tracking-wide text-gray-200">
              COOLVIX PROMOTIONAL TOUR &middot; LIVE
            </h3>
          </div>
          <button 
            id="close-video-modal-btn"
            onClick={onClose}
            className="rounded-full bg-white/5 p-1.5 text-gray-400 transition hover:bg-white/15 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Outer Area of Simulated Video */}
        <div id="video-screen-wrapper" className="relative aspect-video w-full bg-black/90">
          
          {/* Mock Video Feed Visualizer */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-t from-black/80 via-black/20 to-black/40">
            {/* Spinning/pulsating fan visual to simulate HVAC */}
            <div className={`relative mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-dashed border-brand-primary/50 bg-[#1A1D20]/80 p-4 shadow-inner transition-transform duration-1000 ${isPlaying ? 'animate-spin' : ''}`}>
              <div className="h-10 w-10 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-brand-primary animate-pulse" />
              </div>
            </div>

            <span className="rounded-full bg-[#007BFF]/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#007BFF] border border-[#007BFF]/30">
              Diagnostic Quality Test
            </span>
            <h4 className="mt-3 font-sans font-bold text-lg md:text-2xl text-white">
              Behind The Scenes: Expert HVAC Airflow Maintenance
            </h4>
            <p className="mt-2 max-w-lg text-xs md:text-sm text-gray-400">
              Watch how our experienced technicians diagnose multi-stage scroll compressors and calibrate thermostat air cooling loops.
            </p>

            {/* Simulated Live Statistics */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-6 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-left">
              <div>
                <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">Airflow Rate</p>
                <p className="font-mono text-xs font-bold text-brand-primary">450 CFM</p>
              </div>
              <div>
                <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">Static Pressure</p>
                <p className="font-mono text-xs font-bold text-green-400">0.5 in. w.g.</p>
              </div>
              <div>
                <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider">Compressor Temp</p>
                <p className="font-mono text-xs font-bold text-yellow-400">104&deg;F</p>
              </div>
            </div>
          </div>

          {/* Video Control Bottom Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-black/0 p-4">
            
            {/* Timeline slider */}
            <div className="group relative flex h-1.5 w-full cursor-pointer items-center rounded bg-white/20">
              <div 
                className="h-full rounded bg-brand-primary relative"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute -right-1.5 -top-1 h-3.5 w-3.5 scale-0 rounded-full bg-brand-primary shadow transition group-hover:scale-100" />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="h-4 w-4 fill-white" /> : <Play className="h-4 w-4 fill-white" />}
                </button>

                <button 
                  onClick={() => setProgress(0)}
                  className="text-gray-400 hover:text-white transition"
                  title="Replay"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                {/* Volume slider */}
                <div className="hidden items-center gap-2 sm:flex">
                  <Volume2 className="h-4 w-4 text-gray-400" />
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="h-1 w-16 cursor-pointer rounded-lg bg-gray-600 accent-brand-primary"
                  />
                </div>

                <span className="font-mono text-xs text-gray-400 select-none">
                  0:{progress < 10 ? `0${progress}` : progress} / 1:40
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setLiked(!liked)} 
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition ${liked ? 'bg-brand-primary text-brand-dark' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>{liked ? 'Liked!' : 'Helpful'}</span>
                </button>

                <span className="hidden items-center gap-1 text-[11px] text-brand-primary font-semibold uppercase tracking-wider md:flex">
                  <Sparkles className="h-3 w-3" />
                  COOLVIX certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Info Footnote */}
        <div className="bg-[#1e2226] px-6 py-4 flex items-start gap-2.5 border-t border-white/5">
          <AlertCircle className="h-4 w-4 text-brand-primary mt-0.5 shrink-0" />
          <p className="text-[11px] text-gray-400 leading-normal">
            Need video consultation instead? You can dial our direct dispatch terminal inside the hero area. Our certified engineers offer digital thermal-imaging drafts ahead of residential check-ins.
          </p>
        </div>

      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Subtitles,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Factory,
  Truck,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  X,
  Building2,
  Search
} from 'lucide-react';
import { siteConfig } from '../config/site';

interface Chapter {
  id: string;
  number: string;
  title: string;
  startTime: number; // in seconds
  description: string;
}

interface GalleryItem {
  id: string;
  title: string;
  location: string;
  desc: string;
  image: string;
  tag: string;
}

export const HowItWorks: React.FC = () => {
  // Video Player States
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(32); // default 32s matching our MP4
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Gallery Lightbox State
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // FAQ Accordion State (first item open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "How It Works | Hira Outsourcing — China Sourcing & Import Process";
    window.scrollTo(0, 0);
  }, []);

  // Video Chapter Definitions matching hira_how_it_works.mp4
  const chapters: Chapter[] = [
    {
      id: "ch-1",
      number: "01",
      title: "Share Your Requirement",
      startTime: 0,
      description: "Submit product specifications, reference images or 1688 links."
    },
    {
      id: "ch-2",
      number: "02",
      title: "Source & Verify",
      startTime: 8,
      description: "Factory qualification, sample dispatch and on-site AQL inspection."
    },
    {
      id: "ch-3",
      number: "03",
      title: "Import & Logistics",
      startTime: 16,
      description: "Export consolidation, container staging and customs filing."
    },
    {
      id: "ch-4",
      number: "04",
      title: "Delivery",
      startTime: 24,
      description: "Direct handover and commercial delivery to your warehouse."
    }
  ];

  // Video Event Handlers
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);

    // Update active chapter based on time
    if (current >= 24) {
      setActiveChapter(3);
    } else if (current >= 16) {
      setActiveChapter(2);
    } else if (current >= 8) {
      setActiveChapter(1);
    } else {
      setActiveChapter(0);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const seekToChapter = (startTime: number, index: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = startTime;
    setCurrentTime(startTime);
    setActiveChapter(index);
    if (!isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuteState = !isMuted;
    videoRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (videoRef.current) {
      videoRef.current.volume = newVol;
      videoRef.current.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const toggleCaptions = () => {
    if (!videoRef.current) return;
    const tracks = videoRef.current.textTracks;
    if (tracks.length > 0) {
      const track = tracks[0];
      const newMode = track.mode === 'showing' ? 'hidden' : 'showing';
      track.mode = newMode;
      setShowCaptions(newMode === 'showing');
    }
  };

  // Auto-hide controls when playing
  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2600);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToVideo = () => {
    const el = document.getElementById('video-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Autoplay video after smooth scroll
      setTimeout(() => {
        if (videoRef.current && !isPlaying) {
          videoRef.current.play().catch(() => {});
        }
      }, 700);
    }
  };

  // Operational Gallery Items
  const galleryItems: GalleryItem[] = [
    {
      id: "op-1",
      title: "Container Port Staging & Terminal Handoff",
      location: "Ningbo-Zhoushan & Yantian Terminals",
      desc: "Vessel staging and international container terminal release for sea freight departures bound for Indian destination ports.",
      image: "/images/cargo_ship_hero.jpg",
      tag: "Ocean Port Staging"
    },
    {
      id: "op-2",
      title: "Warehouse Consolidation & Palletization",
      location: "Yiwu & Shenzhen Logistics Hubs",
      desc: "Pallet strapping, dimensional weight audits, custom inner-box packing, and export container stuffing.",
      image: "/images/promo_logistics.jpg",
      tag: "Ground Facility"
    },
    {
      id: "op-3",
      title: "Pre-Shipment Product Quality Audit",
      location: "Guangdong & Zhejiang Factory Floors",
      desc: "Physical AQL 2.5 sample checks, golden sample verification, functional tolerance testing, and packaging drop testing.",
      image: "/images/promo_items_pure.jpg",
      tag: "On-Site Quality Audit"
    },
    {
      id: "op-4",
      title: "Export Carton Reinforcement & Strapping",
      location: "Central Consolidation Depot",
      desc: "Edge-guard corner protection, heavy-duty shrink wrapping, and moisture barrier application prior to ocean voyage.",
      image: "/images/mockup_warehouse_video.png",
      tag: "Export Packaging"
    },
    {
      id: "op-5",
      title: "Full Container (FCL) Staging & Seal Integrity",
      location: "Industrial Export Terminal",
      desc: "Official container seal checks, load-balance optimization, and customs documentation matching for sealed transit.",
      image: "/images/container_img.png",
      tag: "Container Operations"
    },
    {
      id: "op-6",
      title: "Doorstep Warehouse Commercial Handover",
      location: "Indian Commercial Hubs (Mumbai / Delhi NCR)",
      desc: "Customs release, bonded inland transport, and physical product handover directly to your Indian facility.",
      image: "/images/order_confirmed_top_bg.jpg",
      tag: "Doorstep Delivery"
    }
  ];

  // 7 Specific FAQs requested
  const faqs = [
    {
      q: "1. How does the China sourcing process work?",
      a: "Our sourcing process follows four clear stages: First, you share your product idea or specifications. Second, our bilingual ground team in China identifies verified direct manufacturers and coordinates physical sample evaluation. Third, we manage packaging, container loading, and international ocean or air freight. Finally, your cargo completes Indian customs clearance and is delivered directly to your commercial warehouse."
    },
    {
      q: "2. Can Hira help find products on 1688?",
      a: "Yes. 1688.com is China's largest domestic B2B platform where primary manufacturers quote domestic factory pricing. Because 1688 operates strictly in Mandarin and requires domestic Chinese accounts and payment rails, our on-the-ground team communicates directly with 1688 suppliers, negotiates commercial terms, evaluates factory credentials, and organizes physical consolidation."
    },
    {
      q: "3. Can I share an existing product link?",
      a: "Absolutely. You can share links from 1688, Alibaba, Taobao, Made-in-China, Amazon, or direct factory websites. Our team analyzes the specifications, contacts the underlying manufacturer, and benchmarks the pricing against verified tier-1 factories producing identical or higher-grade quality."
    },
    {
      q: "4. Do you verify suppliers?",
      a: "Yes. Supplier verification is our foundational safeguard. We verify government business licenses, export credentials, operational history, production line capacity, and physical facility addresses. We also perform pre-shipment AQL 2.5 sample audits before your balance payments are released."
    },
    {
      q: "5. Can Hira help with shipping and customs?",
      a: "Yes. We coordinate end-to-end international freight, including Full Container Load (FCL) and Less than Container Load (LCL) consolidation, Bill of Lading (B/L) generation, export clearance in Chinese ports, and documentation assistance for Indian customs clearance."
    },
    {
      q: "6. Can startups and small businesses use your services?",
      a: "Yes. We support businesses across all stages, from emerging e-commerce brands and D2C startups to established national distributors. We help identify manufacturers willing to support realistic Minimum Order Quantities (MOQs) and accommodate initial trial runs."
    },
    {
      q: "7. How do I request a quotation?",
      a: "You can click the 'Get a Quote' button to complete our dedicated 2-step online form, or connect with our team directly via WhatsApp at +91 90720 14777. Provide your product details, estimated quantity, and delivery destination, and our team will review feasibility and get back to you with next steps."
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen text-[#111111]">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative bg-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Subtle Monochrome Industrial Background with soft Hira blue gradient accent */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-multiply overflow-hidden">
          <img
            src="/images/cargo_ship_hero.jpg"
            alt="Monochrome cargo vessel background"
            className="w-full h-full object-cover object-center grayscale"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#FAFAFA] border border-[#EAEAEA] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#555555]">
                The Hira Process
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.08] mb-5">
              From Your Idea<br />
              <span className="text-[#111111]">To Your Doorstep.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mb-8">
              Discover how Hira helps businesses source products from China, verify suppliers and manage the import journey — all through one coordinated process.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={scrollToVideo}
                className="inline-flex items-center justify-center gap-2.5 bg-[#111111] hover:bg-[#252525] text-white px-6 py-3.5 rounded-xl text-sm font-semibold tracking-tight transition-all shadow-sm active:scale-[0.99] cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                </div>
                <span>Watch How It Works</span>
              </button>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#111111] px-5 py-3.5 rounded-xl text-sm font-medium border border-[#EAEAEA] transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#555555]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CINEMATIC VIDEO SECTION                                               */}
      {/* ========================================================================= */}
      <section id="video-section" className="py-12 sm:py-20 bg-[#FAFAFA] border-t border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-2xl mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">
              Our Process, Visually Explained
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
              See how your products make their journey.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-2.5 leading-relaxed">
              From finding the right supplier in China to receiving your products in India, here's how we work.
            </p>
          </div>

          {/* Large Video Player Frame */}
          <div
            ref={videoContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => isPlaying && setControlsVisible(false)}
            className="relative aspect-video w-full rounded-2xl sm:rounded-3xl bg-[#0D0D0E] border border-[#222222] shadow-2xl ring-1 ring-white/10 overflow-hidden group select-none"
          >
            {/* HTML5 Video Element */}
            <video
              ref={videoRef}
              src="/videos/hira_how_it_works.mp4"
              poster="/images/mockup_warehouse_video.png"
              preload="metadata"
              playsInline
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
            >
              <track
                kind="captions"
                src="/videos/hira_how_it_works.vtt"
                srcLang="en"
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>

            {/* Custom Big Center Play Button Overlay (when paused or before playback) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-opacity duration-200 z-10"
              >
                <div className="relative group/btn flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-xl group-hover/btn:scale-105 transition-transform duration-200">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-[#111111] text-[#111111] ml-1" />
                  </div>
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-white bg-black/70 px-3 py-1 rounded-md backdrop-blur-xs">
                    Play Video (0:32)
                  </div>
                </div>
              </div>
            )}

            {/* Chapter Pill Overlay (Top Left of Video) */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[11px] font-medium tracking-tight">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span>Chapter {chapters[activeChapter].number}: {chapters[activeChapter].title}</span>
              </div>
            </div>

            {/* Floating Bottom Control Bar */}
            <div
              className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-3 sm:p-5 z-20 transition-opacity duration-300 ${
                controlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Scrubbable Seek Bar with Chapter Markers */}
              <div className="relative mb-2 sm:mb-3 group/seek">
                <input
                  type="range"
                  min="0"
                  max={duration || 32}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Seek video position"
                  className="w-full h-1.5 bg-white/25 rounded-lg appearance-none cursor-pointer accent-[#0066FF] hover:h-2 transition-all"
                />

                {/* 4 Chapter Markers on Timeline */}
                <div className="absolute top-0 inset-x-0 h-1.5 pointer-events-none flex justify-between">
                  {chapters.map((ch, idx) => (
                    <div
                      key={ch.id}
                      style={{ left: `${(ch.startTime / (duration || 32)) * 100}%` }}
                      className={`absolute top-0 w-0.5 h-1.5 ${
                        idx === 0 ? 'bg-transparent' : 'bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Controls Row */}
              <div className="flex items-center justify-between text-white text-xs">
                {/* Left Controls: Play/Pause, Replay, Time */}
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/15 transition-colors focus:outline-none"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                    ) : (
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => seekToChapter(0, 0)}
                    className="p-1.5 rounded-lg hover:bg-white/15 transition-colors hidden sm:block focus:outline-none"
                    aria-label="Replay from start"
                    title="Replay from start"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-white/80" />
                  </button>

                  <span className="font-mono text-[11px] sm:text-xs text-white/90">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Right Controls: Volume, Captions, Fullscreen */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Volume Group */}
                  <div className="flex items-center gap-1.5 group/vol">
                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-1.5 rounded-lg hover:bg-white/15 transition-colors focus:outline-none"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted || volume === 0 ? (
                        <VolumeX className="w-4 h-4 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-white" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      aria-label="Volume slider"
                      className="w-14 sm:w-18 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white hidden sm:block"
                    />
                  </div>

                  {/* Subtitles CC Toggle */}
                  <button
                    type="button"
                    onClick={toggleCaptions}
                    className={`p-1.5 rounded-lg text-xs font-semibold px-2 transition-colors focus:outline-none ${
                      showCaptions ? 'bg-white text-[#111111]' : 'text-white/80 hover:bg-white/15'
                    }`}
                    aria-label="Toggle Captions"
                    title="Toggle Subtitles"
                  >
                    <Subtitles className="w-3.5 h-3.5" />
                  </button>

                  {/* Fullscreen Toggle */}
                  <button
                    type="button"
                    onClick={toggleFullscreen}
                    className="p-1.5 rounded-lg hover:bg-white/15 transition-colors focus:outline-none"
                    aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                  >
                    {isFullscreen ? (
                      <Minimize className="w-4 h-4 text-white" />
                    ) : (
                      <Maximize className="w-4 h-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Subtle Chapter Markers Below Video (Seekable on Click) */}
          <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => seekToChapter(ch.startTime, idx)}
                  className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111] shadow-sm'
                      : 'bg-white text-[#444444] border-[#EAEAEA] hover:border-[#111111] hover:text-[#111111]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono tracking-wider ${isActive ? 'text-[#0066FF]' : 'text-[#888888]'}`}>
                      {ch.number} • {formatTime(ch.startTime)}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                    )}
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold tracking-tight ${isActive ? 'text-white' : 'text-[#111111]'}`}>
                    {ch.title}
                  </div>
                  <div className={`text-[11px] mt-0.5 line-clamp-1 ${isActive ? 'text-white/70' : 'text-[#777777]'}`}>
                    {ch.description}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FOUR-STEP EDITORIAL PROCESS SECTION                                    */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white border-t border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
              A simpler way to source globally.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-3 leading-relaxed">
              We replace fragmented brokers with one coordinated process, helping Indian businesses find verified suppliers, audit quality, and manage customs clearance with complete transparency.
            </p>
          </div>

          {/* 4 Process Stages: Balanced Grid with Progress Flow */}
          <div className="space-y-6 sm:space-y-8">

            {/* STEP 01 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#111111] transition-all duration-200">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#111111] text-white text-xs font-bold font-mono">
                      1
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#888888]">
                      Step 01 — Share Your Requirement
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                    What are you looking to produce?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                    "Tell us what you're looking for. Share your product idea, specifications, reference images or product links."
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Input</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Product requirements</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Volume</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Estimated quantity</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Links &amp; Specs</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Product references</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Destination</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Target delivery location</div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#111111] mb-2">
                    <Search className="w-4 h-4 text-[#0066FF]" />
                    <span>Visual Reference</span>
                  </div>
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    An Indian business owner researching product parameters on a laptop with 1688 and factory drawings.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#111111] transition-all duration-200">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#111111] text-white text-xs font-bold font-mono">
                      2
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#888888]">
                      Step 02 — We Source &amp; Verify
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                    Factory matching &amp; on-site quality evaluation.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                    "We help identify suitable suppliers, explore sourcing options and assess supplier and product requirements."
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Discovery</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Supplier identification</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Pricing</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Product evaluation</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Inspection</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Quality audit coordination</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Verification</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Supplier audit support</div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#111111] mb-2">
                    <Factory className="w-4 h-4 text-[#0066FF]" />
                    <span>Visual Reference</span>
                  </div>
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    Chinese manufacturing facility with our bilingual inspectors conducting pre-production AQL sample audits.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 03 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#111111] transition-all duration-200">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#111111] text-white text-xs font-bold font-mono">
                      3
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#888888]">
                      Step 03 — Import &amp; Logistics
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                    Consolidation, freight &amp; compliance management.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                    "We coordinate the import journey and help manage the logistics requirements for moving your products from China to India."
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Packaging</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Packaging coordination</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Preparation</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Shipment preparation</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Transport</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Freight coordination</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Customs</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Import documentation</div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#111111] mb-2">
                    <Truck className="w-4 h-4 text-[#0066FF]" />
                    <span>Visual Reference</span>
                  </div>
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    Yiwu / Shenzhen logistics hub with forklift loading, heavy-duty export pallet strapping and sealed container staging.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="p-6 sm:p-8 rounded-2xl border border-[#EAEAEA] bg-white hover:border-[#111111] transition-all duration-200">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#111111] text-white text-xs font-bold font-mono">
                      4
                    </span>
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#888888]">
                      Step 04 — Receive Your Products
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2">
                    Indian port clearance &amp; direct delivery.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-4">
                    "Your shipment reaches its destination, helping you move forward with your business."
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Port Discharge</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Shipment arrival</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Inland Transit</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Unloading &amp; destuffing</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Last Mile</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Delivery coordination</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#EAEAEA]">
                      <div className="text-[10px] text-[#888888] font-mono uppercase">Completion</div>
                      <div className="text-xs font-semibold text-[#111111] mt-0.5">Product handover</div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-72 shrink-0 p-4 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#111111] mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    <span>Visual Reference</span>
                  </div>
                  <p className="text-[11px] text-[#666666] leading-relaxed">
                    Direct unloading and shipment inspection at an Indian enterprise facility with signed commercial delivery handover.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REAL OPERATIONS SECTION (Gallery + Lightbox)                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] border-t border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">
              Authentic Ground Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
              Behind every shipment is real work.
            </h2>
            <p className="text-sm sm:text-base text-[#666666] mt-3 leading-relaxed">
              We are not an anonymous web directory. Our dedicated bilingual teams physically inspect facilities, manage consolidation, and oversee container handoff across major export hubs.
            </p>
          </div>

          {/* 6 Authentic Operation Gallery Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden hover:border-[#111111] transition-all duration-200 cursor-pointer shadow-xs flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F0F0F0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-3 right-3 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>View Photo</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-1">
                      {item.location}
                    </div>
                    <h3 className="text-base font-bold text-[#111111] mb-1.5 group-hover:text-[#0066FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-[#F5F5F5] flex items-center gap-2 text-[11px] text-[#111111] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Verified Procedure</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Gallery Images */}
      {selectedGalleryItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111111] text-white rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-white hover:text-[#111111] transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-5 sm:p-6 bg-[#141416] border-t border-white/10">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-mono uppercase text-[#0066FF] font-semibold">
                  {selectedGalleryItem.tag}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs text-white/60 font-mono">
                  {selectedGalleryItem.location}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {selectedGalleryItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                {selectedGalleryItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. WHY WORK WITH HIRA (Sophisticated Black Background Section)             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#111111] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="max-w-2xl mb-14 sm:mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">
              Why Work With Hira
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              One partner. A connected sourcing journey.
            </h2>
            <p className="text-sm sm:text-base text-[#999999] mt-3.5 leading-relaxed">
              We remove the uncertainty of overseas manufacturing by coordinating factory identification, physical inspection, and ocean freight under a single transparent umbrella.
            </p>
          </div>

          {/* 4 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Benefit 1 */}
            <div className="p-6 rounded-2xl bg-[#1A1A1D] border border-white/10 hover:border-[#0066FF] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5">
                  <Search className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  Sourcing Support
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Direct access to factory clusters in Yiwu, Guangdong, and Zhejiang. We negotiate primary wholesale pricing without intermediary markups.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-[#0066FF]">
                Factory Direct Access
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 rounded-2xl bg-[#1A1A1D] border border-white/10 hover:border-[#0066FF] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  Supplier Verification
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  On-site business license checks, operational facility audits, and AQL 2.5 pre-shipment sampling before final payment authorization.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-[#0066FF]">
                On-Site Quality Audits
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 rounded-2xl bg-[#1A1A1D] border border-white/10 hover:border-[#0066FF] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5">
                  <Truck className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  Import Coordination
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Full container (FCL) and consolidated (LCL) freight booking, pallet strapping, Bill of Lading generation, and Indian customs filing support.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-[#0066FF]">
                Sea &amp; Air Logistics
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 rounded-2xl bg-[#1A1A1D] border border-white/10 hover:border-[#0066FF] transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5">
                  <Building2 className="w-5 h-5 text-[#0066FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  Business-Focused Assistance
                </h3>
                <p className="text-xs text-[#999999] leading-relaxed">
                  Dedicated bilingual coordination team bridging communication barriers between Indian enterprises and Chinese manufacturers.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-[#0066FF]">
                Bilingual Ground Team
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FAQ SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#EAEAEA]" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] leading-tight">
              Common questions about our process.
            </h2>
            <p className="text-sm text-[#666666] mt-2.5 leading-relaxed">
              Everything you need to know about how we source, audit factories, and coordinate imports from China.
            </p>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-[#EAEAEA] border-y border-[#EAEAEA]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#0066FF] transition-colors">
                      {faq.q}
                    </span>
                    <span className="p-1 rounded-full bg-[#F5F5F5] group-hover:bg-[#111111] group-hover:text-white transition-colors shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8">
                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Additional Help CTA */}
          <div className="mt-10 p-5 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#111111]">Have a specific product question?</div>
              <div className="text-[11px] text-[#666666]">Our sourcing team is ready to discuss your target specifications.</div>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent("Hello Hira Outsourcing, I have a specific question about your China sourcing and import process.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] hover:bg-[#252525] text-white rounded-lg text-xs font-medium shrink-0 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CONVERSION SECTION                                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Black Container Card */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#141416] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl">

            {/* Subtle monochrome shipping container graphic */}
            <div className="absolute top-0 right-0 w-[55%] sm:w-[48%] h-full pointer-events-none z-0 overflow-hidden opacity-30">
              <img
                src="/images/container_img.png"
                alt="Hira Outsourcing branded shipping container"
                className="w-full h-full object-cover object-right"
                loading="lazy"
              />
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#141416] to-transparent pointer-events-none" />
            </div>

            {/* Content Left Column */}
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0066FF] block mb-3">
                Start Your Sourcing Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                Your next product starts here.
              </h2>
              <p className="text-sm sm:text-base text-[#A0A0A0] leading-relaxed mb-8 max-w-lg">
                "Have a product in mind? Let's explore how we can help you source it from China."
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#111111] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all shadow-md active:scale-[0.99]"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4 text-[#111111]" />
                </Link>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent("Hello Hira Outsourcing, I would like to explore sourcing products from China.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#252528] hover:bg-[#333336] text-white px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium border border-white/10 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

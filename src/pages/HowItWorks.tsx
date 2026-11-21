import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  Search,
  Package,
  Clock,
  Globe,
  Star,
  ArrowDown
} from 'lucide-react';
import { siteConfig } from '../config/site';

interface Chapter {
  id: string;
  number: string;
  title: string;
  startTime: number;
  description: string;
  thumbnail?: string;
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
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(45);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Gallery Lightbox State
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scroll-triggered animations
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    document.title = "How It Works | Hira Outsourcing — China Sourcing & Import Process";
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  // Video Chapter Definitions
  const chapters: Chapter[] = [
    {
      id: "ch-1",
      number: "01",
      title: "Share Your Requirement",
      startTime: 0,
      description: "Submit product specs, images or 1688 links",
      thumbnail: "/videos/thumb_ch1.jpg"
    },
    {
      id: "ch-2",
      number: "02",
      title: "Source & Verify",
      startTime: 11,
      description: "Factory match, sample dispatch & AQL audit",
      thumbnail: "/videos/thumb_ch2.jpg"
    },
    {
      id: "ch-3",
      number: "03",
      title: "Import & Logistics",
      startTime: 22,
      description: "Export consolidation & customs filing",
      thumbnail: "/videos/thumb_ch3.jpg"
    },
    {
      id: "ch-4",
      number: "04",
      title: "Delivery",
      startTime: 33,
      description: "Direct handover to your Indian warehouse",
      thumbnail: "/videos/thumb_ch4.jpg"
    }
  ];

  // Video Event Handlers
  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (hasEnded) {
      videoRef.current.currentTime = 0;
      setHasEnded(false);
      setCurrentTime(0);
      setActiveChapter(0);
      videoRef.current.play().catch(() => {});
      return;
    }
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      if (!hasStarted) setHasStarted(true);
      videoRef.current.play().catch(() => {});
    }
  }, [isPlaying, hasStarted, hasEnded]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    setCurrentTime(current);
    if (current >= 33) setActiveChapter(3);
    else if (current >= 22) setActiveChapter(2);
    else if (current >= 11) setActiveChapter(1);
    else setActiveChapter(0);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setHasEnded(true);
    setControlsVisible(true);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
      if (hasEnded) setHasEnded(false);
    }
  };

  const seekToChapter = (startTime: number, index: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = startTime;
    setCurrentTime(startTime);
    setActiveChapter(index);
    if (hasEnded) setHasEnded(false);
    if (!hasStarted) setHasStarted(true);
    videoRef.current.play().catch(() => {});
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

  const handleMouseMove = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => setControlsVisible(false), 2600);
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
      setTimeout(() => {
        if (videoRef.current && !isPlaying) {
          setHasStarted(true);
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

  // FAQ Data
  const faqs = [
    {
      q: "How does the China sourcing process work?",
      a: "Our sourcing process follows four clear stages: First, you share your product idea or specifications. Second, our bilingual ground team in China identifies verified direct manufacturers and coordinates physical sample evaluation. Third, we manage packaging, container loading, and international ocean or air freight. Finally, your cargo completes Indian customs clearance and is delivered directly to your commercial warehouse."
    },
    {
      q: "Can Hira help find products on 1688?",
      a: "Yes. 1688.com is China's largest domestic B2B platform where primary manufacturers quote domestic factory pricing. Because 1688 operates strictly in Mandarin and requires domestic Chinese accounts and payment rails, our on-the-ground team communicates directly with 1688 suppliers, negotiates commercial terms, evaluates factory credentials, and organizes physical consolidation."
    },
    {
      q: "Can I share an existing product link?",
      a: "Absolutely. You can share links from 1688, Alibaba, Taobao, Made-in-China, Amazon, or direct factory websites. Our team analyzes the specifications, contacts the underlying manufacturer, and benchmarks the pricing against verified tier-1 factories producing identical or higher-grade quality."
    },
    {
      q: "Do you verify suppliers?",
      a: "Yes. Supplier verification is our foundational safeguard. We verify government business licenses, export credentials, operational history, production line capacity, and physical facility addresses. We also perform pre-shipment AQL 2.5 sample audits before your balance payments are released."
    },
    {
      q: "Can Hira help with shipping and customs?",
      a: "Yes. We coordinate end-to-end international freight, including Full Container Load (FCL) and Less than Container Load (LCL) consolidation, Bill of Lading (B/L) generation, export clearance in Chinese ports, and documentation assistance for Indian customs clearance."
    },
    {
      q: "Can startups and small businesses use your services?",
      a: "Yes. We support businesses across all stages, from emerging e-commerce brands and D2C startups to established national distributors. We help identify manufacturers willing to support realistic Minimum Order Quantities (MOQs) and accommodate initial trial runs."
    },
    {
      q: "How do I request a quotation?",
      a: "You can click the 'Get a Quote' button to complete our dedicated 2-step online form, or connect with our team directly via WhatsApp at +91 90720 14777. Provide your product details, estimated quantity, and delivery destination, and our team will review feasibility and get back to you with next steps."
    }
  ];

  // Process steps for the editorial section
  const processSteps = [
    {
      num: "01",
      title: "Share Your Requirement",
      headline: "Tell us what you're looking for.",
      description: "Share your product idea, specifications, reference images, or product links from 1688, Alibaba, or any marketplace. We'll take it from there.",
      icon: Search,
      details: [
        { label: "Input", value: "Product requirements" },
        { label: "Volume", value: "Estimated quantity" },
        { label: "References", value: "Links, images & specs" },
        { label: "Destination", value: "Delivery location" },
      ]
    },
    {
      num: "02",
      title: "We Source & Verify",
      headline: "Factory matching & quality evaluation.",
      description: "Our bilingual team on the ground identifies suitable manufacturers, negotiates pricing, coordinates samples, and conducts on-site quality audits.",
      icon: Factory,
      details: [
        { label: "Discovery", value: "Supplier identification" },
        { label: "Evaluation", value: "Product assessment" },
        { label: "Inspection", value: "Quality audit" },
        { label: "Verification", value: "Supplier credentials" },
      ]
    },
    {
      num: "03",
      title: "Import & Logistics",
      headline: "Consolidation, freight & compliance.",
      description: "We coordinate packaging, container loading, international freight, and handle the documentation needed for customs clearance.",
      icon: Truck,
      details: [
        { label: "Packaging", value: "Export preparation" },
        { label: "Freight", value: "FCL / LCL booking" },
        { label: "Transport", value: "Ocean & air freight" },
        { label: "Customs", value: "Documentation support" },
      ]
    },
    {
      num: "04",
      title: "Receive Your Products",
      headline: "Indian port clearance & direct delivery.",
      description: "Your shipment arrives, clears Indian customs, and is delivered directly to your warehouse — ready for your business.",
      icon: CheckCircle2,
      details: [
        { label: "Arrival", value: "Port discharge" },
        { label: "Clearance", value: "Customs processing" },
        { label: "Transit", value: "Inland delivery" },
        { label: "Handover", value: "Product receipt" },
      ]
    }
  ];

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex flex-col bg-white min-h-screen text-[#111111]">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO SECTION — Cinematic, conversion-focused
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAFAFA] overflow-hidden">
        {/* Subtle monochrome background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/cargo_ship_hero.jpg"
            alt=""
            className="w-full h-full object-cover object-center grayscale opacity-[0.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-36 lg:pb-36">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E8E8E8] shadow-xs mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#555555]">
                The Hira Process
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[36px] sm:text-5xl lg:text-[64px] font-black tracking-[-0.03em] text-[#111111] leading-[1.05] mb-5 sm:mb-6">
              From Your Idea<br />
              <span className="bg-gradient-to-r from-[#111111] to-[#444444] bg-clip-text text-transparent">To Your Doorstep.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#555555] leading-[1.65] max-w-xl mb-8 sm:mb-10">
              Discover how Hira helps businesses source products from China, verify suppliers and manage the import journey — all through one coordinated process.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={scrollToVideo}
                className="group inline-flex items-center justify-center gap-3 bg-[#111111] hover:bg-black text-white px-7 py-4 rounded-2xl text-sm font-semibold tracking-tight transition-all shadow-lg shadow-black/15 active:scale-[0.98] cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>Watch How It Works</span>
              </button>

              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F5F5F5] text-[#111111] px-6 py-4 rounded-2xl text-sm font-medium border border-[#E5E5E5] hover:border-[#CCCCCC] transition-all shadow-xs"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#888888]" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-[#888888] font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                <span>End-to-End Import</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
                <span>Doorstep Delivery</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-[#BBBBBB]">
            <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          2. CINEMATIC VIDEO SECTION — The centrepiece
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="video-section" className="py-16 sm:py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div
            id="anim-video-header"
            data-animate
            className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 transition-all duration-700 ${isVisible('anim-video-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#ECECEC] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF] mb-4">
              <Play className="w-3 h-3 fill-[#0066FF]" />
              Our Process, Visually Explained
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-[#111111] leading-tight">
              See how your products<br className="hidden sm:block" /> make their journey.
            </h2>
            <p className="text-sm sm:text-base text-[#777777] mt-3 leading-relaxed max-w-lg mx-auto">
              From finding the right supplier in China to receiving your products in India.
            </p>
          </div>

          {/* Large Cinematic Video Player */}
          <div
            id="anim-video-player"
            data-animate
            className={`transition-all duration-700 delay-200 ${isVisible('anim-video-player') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div
              ref={videoContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setControlsVisible(false)}
              className="relative aspect-video w-full rounded-2xl sm:rounded-3xl bg-[#0A0A0B] overflow-hidden group select-none shadow-2xl shadow-black/20 ring-1 ring-black/5"
            >
              {/* HTML5 Video */}
              <video
                ref={videoRef}
                src="/videos/how_it_works_video.mp4"
                poster="/videos/how_it_works_poster.jpg"
                preload="metadata"
                playsInline
                onClick={togglePlay}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover cursor-pointer"
              >
                <track
                  kind="captions"
                  src="/videos/how_it_works_video.vtt"
                  srcLang="en"
                  label="English"
                  default
                />
              </video>

              {/* Pre-play / Paused Overlay */}
              {(!isPlaying && !hasEnded) && (
                <div
                  onClick={togglePlay}
                  className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 z-10 ${
                    hasStarted ? 'bg-black/40 backdrop-blur-[1px]' : 'bg-black/50 backdrop-blur-[2px]'
                  }`}
                >
                  {/* Pulsating Play Button */}
                  <div className="relative group/play">
                    <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-2xl group-hover/play:scale-110 transition-transform duration-300">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-[#111111] text-[#111111] ml-1" />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <div className="text-white text-sm sm:text-base font-semibold tracking-tight">
                      {hasStarted ? 'Resume Playing' : 'Watch the Full Process'}
                    </div>
                    <div className="text-white/60 text-xs mt-1 font-mono">
                      {hasStarted ? formatTime(currentTime) + ' / ' + formatTime(duration) : '0:45 • Full HD'}
                    </div>
                  </div>
                </div>
              )}

              {/* Video Ended — Replay + CTA Overlay */}
              {hasEnded && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                  <div className="text-center max-w-md px-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 mb-5 cursor-pointer hover:bg-white/20 transition-colors" onClick={togglePlay}>
                      <RotateCcw className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight mb-2">
                      Ready to get started?
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
                      You've seen the process. Let's bring your product to life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        to="/quote"
                        className="inline-flex items-center gap-2 bg-white hover:bg-[#F0F0F0] text-[#111111] px-6 py-3 rounded-xl text-sm font-bold tracking-tight transition-all shadow-lg active:scale-[0.98]"
                      >
                        <span>Get a Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Watch Again</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Active Chapter Pill (Top Left) */}
              {(isPlaying || hasStarted) && !hasEnded && (
                <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-20 pointer-events-none transition-opacity duration-300 ${controlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-[11px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
                    <span>Chapter {chapters[activeChapter].number}: {chapters[activeChapter].title}</span>
                  </div>
                </div>
              )}

              {/* Bottom Control Bar */}
              <div
                className={`absolute inset-x-0 bottom-0 z-20 transition-opacity duration-300 ${
                  controlsVisible || !isPlaying || hasEnded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                <div className="relative p-3 sm:p-4 lg:p-5">
                  {/* Progress Bar */}
                  <div className="relative mb-2.5 sm:mb-3 group/seek">
                    {/* Background track */}
                    <div className="w-full h-1 group-hover/seek:h-1.5 bg-white/20 rounded-full overflow-hidden transition-all">
                      {/* Filled progress */}
                      <div
                        className="h-full bg-white rounded-full transition-all duration-100"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                    {/* Hidden range input overlay */}
                    <input
                      type="range"
                      min="0"
                      max={duration || 45}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      aria-label="Seek video position"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {/* Chapter dividers */}
                    {chapters.slice(1).map((ch) => (
                      <div
                        key={ch.id}
                        style={{ left: `${(ch.startTime / (duration || 45)) * 100}%` }}
                        className="absolute top-0 w-[2px] h-1 group-hover/seek:h-1.5 bg-white/50 rounded-full transition-all"
                      />
                    ))}
                    {/* Scrubber Dot */}
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover/seek:opacity-100 transition-opacity pointer-events-none"
                      style={{ left: `calc(${progressPercent}% - 6px)` }}
                    />
                  </div>

                  {/* Controls Row */}
                  <div className="flex items-center justify-between text-white text-xs">
                    {/* Left */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="p-1.5 rounded-full hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
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
                        className="p-1.5 rounded-full hover:bg-white/15 transition-colors hidden sm:flex focus:outline-none cursor-pointer"
                        aria-label="Replay from start"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-white/80" />
                      </button>

                      <span className="font-mono text-[11px] sm:text-xs text-white/85 tabular-nums">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-1.5 sm:gap-2.5">
                      <div className="flex items-center gap-1.5 group/vol">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="p-1.5 rounded-full hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
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
                          aria-label="Volume"
                          className="w-14 sm:w-16 h-1 bg-white/25 rounded-full appearance-none cursor-pointer accent-white hidden sm:block"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={toggleCaptions}
                        className={`p-1.5 rounded-full text-xs transition-colors focus:outline-none cursor-pointer ${
                          showCaptions ? 'bg-white text-[#111111]' : 'text-white/70 hover:bg-white/15'
                        }`}
                        aria-label="Toggle Captions"
                      >
                        <Subtitles className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={toggleFullscreen}
                        className="p-1.5 rounded-full hover:bg-white/15 transition-colors focus:outline-none cursor-pointer"
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
            </div>
          </div>

          {/* Chapter Cards Below Video */}
          <div
            id="anim-chapters"
            data-animate
            className={`mt-5 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 transition-all duration-700 delay-300 ${isVisible('anim-chapters') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {chapters.map((ch, idx) => {
              const isActive = activeChapter === idx;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => seekToChapter(ch.startTime, idx)}
                  className={`text-left p-3 sm:p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111] shadow-lg shadow-black/10'
                      : 'bg-white text-[#444444] border-[#F0F0F0] hover:border-[#CCCCCC] hover:shadow-sm'
                  }`}
                >
                  {/* Thumbnail */}
                  {ch.thumbnail && (
                    <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-3 bg-[#F0F0F0]">
                      <img
                        src={ch.thumbnail}
                        alt={ch.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                        {formatTime(ch.startTime)}
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 ring-2 ring-inset ring-[#0066FF] rounded-xl pointer-events-none" />
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-mono tracking-widest font-semibold ${isActive ? 'text-[#0066FF]' : 'text-[#AAAAAA]'}`}>
                      {ch.number}
                    </span>
                    {isActive && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
                      </span>
                    )}
                  </div>
                  <div className={`text-xs sm:text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-[#111111]'}`}>
                    {ch.title}
                  </div>
                  <div className={`text-[10.5px] sm:text-[11px] mt-1 leading-snug line-clamp-2 ${isActive ? 'text-white/60' : 'text-[#999999]'}`}>
                    {ch.description}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          3. FOUR-STEP EDITORIAL PROCESS — Deep detail
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div
            id="anim-process-header"
            data-animate
            className={`max-w-2xl mb-14 sm:mb-20 transition-all duration-700 ${isVisible('anim-process-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#ECECEC] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF] mb-4 shadow-xs">
              <Clock className="w-3 h-3" />
              Step by Step
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.025em] text-[#111111] leading-[1.1]">
              A simpler way to<br className="hidden sm:block" /> source globally.
            </h2>
            <p className="text-sm sm:text-base text-[#777777] mt-4 leading-relaxed max-w-lg">
              We replace fragmented brokers with one coordinated process — from factory discovery to doorstep delivery.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-5 sm:space-y-6">
            {processSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const animId = `anim-step-${idx}`;
              return (
                <div
                  key={idx}
                  id={animId}
                  data-animate
                  className={`transition-all duration-700 ${isVisible(animId) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="group bg-white rounded-2xl sm:rounded-3xl border border-[#EBEBEB] hover:border-[#CCCCCC] transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-black/[0.03]">
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
                        {/* Left — Number + Icon */}
                        <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3 shrink-0">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#111111] text-white flex items-center justify-center font-mono text-lg sm:text-xl font-black group-hover:scale-105 transition-transform duration-300">
                            {step.num}
                          </div>
                          <div className="w-10 h-10 rounded-xl bg-[#F5F5F5] flex items-center justify-center group-hover:bg-[#EEF4FF] transition-colors">
                            <StepIcon className="w-5 h-5 text-[#555555] group-hover:text-[#0066FF] transition-colors" />
                          </div>
                        </div>

                        {/* Middle — Content */}
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-[#AAAAAA] block mb-1.5">
                            Step {step.num} — {step.title}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight mb-2.5">
                            {step.headline}
                          </h3>
                          <p className="text-sm text-[#777777] leading-relaxed mb-5 max-w-xl">
                            {step.description}
                          </p>

                          {/* Detail Chips */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                            {step.details.map((d, di) => (
                              <div key={di} className="px-3 py-2.5 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] group-hover:border-[#E5E5E5] transition-colors">
                                <div className="text-[9px] sm:text-[10px] text-[#AAAAAA] font-mono uppercase tracking-wider">{d.label}</div>
                                <div className="text-[11px] sm:text-xs font-semibold text-[#333333] mt-0.5">{d.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connecting line between steps */}
                    {idx < processSteps.length - 1 && (
                      <div className="hidden lg:flex justify-start pl-[26px] sm:pl-[30px] pb-0 -mt-2">
                        {/* This creates a visual continuity */}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Post-Process CTA */}
          <div
            id="anim-process-cta"
            data-animate
            className={`mt-12 sm:mt-16 text-center transition-all duration-700 ${isVisible('anim-process-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-7 py-3.5 rounded-2xl text-sm font-semibold tracking-tight transition-all shadow-lg shadow-black/15 active:scale-[0.98]"
              >
                <span>Start Your Sourcing Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent("Hello Hira, I watched your process video and I'm interested in sourcing products from China.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#555555] hover:text-[#111111] text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Or chat with us on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          4. REAL OPERATIONS GALLERY — Trust-building photography
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            id="anim-gallery-header"
            data-animate
            className={`max-w-2xl mb-12 sm:mb-16 transition-all duration-700 ${isVisible('anim-gallery-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#ECECEC] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF] mb-4 shadow-xs">
              <Globe className="w-3 h-3" />
              Authentic Ground Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#111111] leading-tight">
              Behind every shipment<br className="hidden sm:block" /> is real work.
            </h2>
            <p className="text-sm sm:text-base text-[#777777] mt-3 leading-relaxed max-w-lg">
              Our dedicated teams physically inspect facilities, manage consolidation, and oversee container handoff across major Chinese export hubs.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {galleryItems.map((item, idx) => {
              const galAnimId = `anim-gallery-${idx}`;
              return (
                <div
                  key={item.id}
                  id={galAnimId}
                  data-animate
                  onClick={() => setSelectedGalleryItem(item)}
                  className={`group bg-white rounded-2xl border border-[#F0F0F0] overflow-hidden hover:border-[#CCCCCC] transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-black/[0.04] flex flex-col ${
                    isVisible(galAnimId) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 80}ms`, transitionDuration: '700ms' }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F5F5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                    <div className="absolute bottom-3 right-3 text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#AAAAAA] uppercase tracking-wider mb-1.5">
                        {item.location}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#111111] mb-1.5 group-hover:text-[#0066FF] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#888888] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pt-3.5 mt-3.5 border-t border-[#F5F5F5] flex items-center gap-1.5 text-[11px] text-[#111111] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>Verified Operation</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Gallery Lightbox Modal */}
      {selectedGalleryItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111111] text-white rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-[#111111] text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={selectedGalleryItem.image}
                alt={selectedGalleryItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#141416] border-t border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase text-[#0066FF] font-semibold">
                  {selectedGalleryItem.tag}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-[11px] text-white/50 font-mono">
                  {selectedGalleryItem.location}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {selectedGalleryItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                {selectedGalleryItem.desc}
              </p>
            </div>
          </div>
        </div>
      )}


      {/* ═══════════════════════════════════════════════════════════════════════
          5. WHY WORK WITH HIRA — Dark sophistication section
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#111111] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            id="anim-why-header"
            data-animate
            className={`max-w-2xl mb-14 sm:mb-20 transition-all duration-700 ${isVisible('anim-why-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF] mb-4">
              <Star className="w-3 h-3 fill-[#0066FF]" />
              Why Hira
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-white leading-[1.08]">
              One partner.<br />A connected sourcing journey.
            </h2>
            <p className="text-sm sm:text-base text-[#888888] mt-4 leading-relaxed max-w-lg">
              We remove the uncertainty of overseas manufacturing by coordinating factory identification, physical inspection, and ocean freight under a single transparent umbrella.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: Search,
                title: "Sourcing Support",
                desc: "Direct access to factory clusters in Yiwu, Guangdong, and Zhejiang. Primary wholesale pricing without intermediary markups.",
                footer: "Factory Direct Access"
              },
              {
                icon: ShieldCheck,
                title: "Supplier Verification",
                desc: "On-site business license checks, operational facility audits, and AQL 2.5 pre-shipment sampling before final payment authorization.",
                footer: "On-Site Quality Audits"
              },
              {
                icon: Truck,
                title: "Import Coordination",
                desc: "Full container (FCL) and consolidated (LCL) freight booking, pallet strapping, Bill of Lading generation, and Indian customs filing support.",
                footer: "Sea & Air Logistics"
              },
              {
                icon: Building2,
                title: "Business-Focused Assistance",
                desc: "Dedicated bilingual coordination team bridging communication barriers between Indian enterprises and Chinese manufacturers.",
                footer: "Bilingual Ground Team"
              }
            ].map((benefit, idx) => {
              const BIcon = benefit.icon;
              const bAnimId = `anim-benefit-${idx}`;
              return (
                <div
                  key={idx}
                  id={bAnimId}
                  data-animate
                  className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#1A1A1D] border border-white/[0.06] hover:border-[#0066FF]/40 transition-all duration-300 flex flex-col justify-between group ${
                    isVisible(bAnimId) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.06] group-hover:bg-[#0066FF]/15 text-white flex items-center justify-center mb-5 transition-colors">
                      <BIcon className="w-5 h-5 text-[#0066FF]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#888888] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-white/[0.04] text-[11px] font-mono text-[#0066FF] tracking-wide">
                    {benefit.footer}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          6. FAQ SECTION — Clean accordion
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            id="anim-faq-header"
            data-animate
            className={`text-center max-w-xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${isVisible('anim-faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F5] border border-[#ECECEC] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF] mb-4 shadow-xs">
              <MessageSquare className="w-3 h-3" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-[#111111] leading-tight">
              Common questions about<br className="hidden sm:block" /> our process.
            </h2>
            <p className="text-sm text-[#777777] mt-3 leading-relaxed">
              Everything you need to know about sourcing, factory audits, and imports from China.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#DDDDDD] bg-[#FAFAFA] shadow-sm' : 'border-[#F0F0F0] bg-white hover:border-[#DDDDDD]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-4 px-5 sm:px-6 py-4 sm:py-5 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-sm sm:text-[15px] font-semibold tracking-tight transition-colors ${isOpen ? 'text-[#111111]' : 'text-[#333333] group-hover:text-[#111111]'}`}>
                      {faq.q}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-[#111111] text-white rotate-180' : 'bg-[#F5F5F5] text-[#888888] group-hover:bg-[#111111] group-hover:text-white'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="text-xs sm:text-sm text-[#666666] leading-[1.7]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Help CTA */}
          <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] border border-[#EEEEEE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#111111]">Have a specific product question?</div>
              <div className="text-xs text-[#777777] mt-0.5">Our sourcing team is ready to discuss your requirements.</div>
            </div>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent("Hello Hira Outsourcing, I have a specific question about your China sourcing and import process.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111111] hover:bg-black text-white rounded-xl text-xs font-semibold shrink-0 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════════════
          7. FINAL CONVERSION SECTION — Maximum conversion pressure
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          <div
            id="anim-final-cta"
            data-animate
            className={`relative rounded-3xl sm:rounded-[2rem] bg-[#111111] text-white overflow-hidden transition-all duration-700 ${isVisible('anim-final-cta') ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'}`}
          >
            {/* Monochrome container graphic */}
            <div className="absolute top-0 right-0 w-[55%] sm:w-[48%] h-full pointer-events-none z-0 overflow-hidden opacity-25">
              <img
                src="/images/container_img.png"
                alt=""
                className="w-full h-full object-cover object-right"
                loading="lazy"
              />
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#111111] to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0066FF] mb-5">
                  <Package className="w-3 h-3" />
                  Start Your Journey
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white leading-[1.08] mb-4">
                  Your next product<br />starts here.
                </h2>
                <p className="text-sm sm:text-base text-[#888888] leading-relaxed mb-8 max-w-md">
                  Have a product in mind? Share your requirements and our team will evaluate sourcing options from China.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to="/quote"
                    className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F0F0F0] text-[#111111] px-7 py-4 rounded-2xl text-sm font-bold tracking-tight transition-all shadow-lg active:scale-[0.98]"
                  >
                    <span>GET A QUOTE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent("Hello Hira Outsourcing, I would like to explore sourcing products from China.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.1] text-white px-6 py-4 rounded-2xl text-sm font-medium border border-white/10 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </div>

                {/* Trust row */}
                <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#666666]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>No upfront fees</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Verified suppliers only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

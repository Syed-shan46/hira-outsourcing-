# HIRA OUTSOURCING — OFFICIAL VIDEO EDITING BLUEPRINT
**Standard Operating Procedure (SOP) & Motion Graphics Style Guide**  
*Version 2.0 | Approved for Post-Production, Brand Film, Commercials & Social Video Pipelines*

---

## 1. Executive Summary & Brand Identity

**Hira Outsourcing Services Pvt. Ltd.** is an international procurement, factory coordination, and freight logistics partner connecting Indian businesses directly with manufacturers in China (Yiwu, Shenzhen, Guangzhou). 

The visual identity is defined by **industrial precision, uncompromising corporate integrity, and Apple-inspired minimalist clarity**. Every video produced must convey dependability, fact-based operations, and top-tier logistics expertise.

---

## 2. Official Brand Logos & Asset Registry

All video production pipelines must strictly reference the master transparent assets located in `public/images/`:

| Variant | Filename | Color Code | Primary Use Case |
| :--- | :--- | :--- | :--- |
| **Primary Full Color** | `hira_logo_official_original.png` | `#0180CF` + `#000000` | Dark/Neutral studio footage, intro bumpers, white paper cards, primary lower-thirds |
| **Monochrome White** | `hira_logo_monochrome_white.png` | `#FFFFFF` (Solid) | Dark b-roll, ocean freight at night, dark corporate backgrounds, video watermarks |
| **Monochrome Dark** | `hira_logo_monochrome_black.png` | `#111111` (Slate Black) | Bright exterior footage, sunny port scenes, factory daylight, white-canvas slates |

### Golden Rules for Logo Usage:
1. **Never alter proportions**: Aspect ratio is strictly locked to **2.56 : 1** (Native 1080 × 422 px).
2. **Never change colors**: Use only the exact brand blue (`#0180CF`), solid white (`#FFFFFF`), or deep slate (`#111111`).
3. **Never separate elements**: The stylized 'H' emblem (airplane loop + cargo vessel) and the typography ("HIRA / OUTSOURCING SERVICES PVT LTD") must remain unified unless explicitly producing an approved animated icon bug.
4. **Clear Space**: Maintain a minimum exclusion zone around the logo equal to 1.5× the height of the letter "H" in "HIRA".

---

## 3. Placement & Safe-Zone Matrix

### A. Watermark / Corner Bug
- **Position**: Top-Right corner (standard) or Bottom-Right (when upper overlays exist).
- **Safe Zone Margin**: 5% inset from frame boundary (SMPTE Action/Title Safe 90%).
- **Opacity**: 75% to 85% opacity with gentle subtle drop-shadow (`Opacity: 35%, Distance: 2px, Blur: 4px, Angle: 120°`).
- **Scale**:
  - **4K UHD (3840×2160)**: Width 360 px (Height ~140 px).
  - **1080p FHD (1920×1080)**: Width 220 px (Height ~86 px).
  - **Vertical 9:16 (1080×1920)**: Width 200 px, placed at `Y: 180px` to clear UI icons on Reels/Shorts.

### B. Bright vs. Dark Footage Adaptation
```
┌─────────────────────────────────────────────────────────────┐
│ FOOTAGE LUMINANCE TEST                                      │
├──────────────────────────────┬──────────────────────────────┤
│ Background Luma > 65% (Bright)│ USE: hira_logo_monochrome_black │
│ (e.g. sky, white factory wall)│ (Or White with 40% dark plate) │
├──────────────────────────────┼──────────────────────────────┤
│ Background Luma < 45% (Dark) │ USE: hira_logo_monochrome_white │
│ (e.g. evening port, blue BG) │ (High contrast, clean cut)   │
├──────────────────────────────┼──────────────────────────────┤
│ High-Frequency / Busy Footage│ USE: hira_logo_monochrome_white │
│ (e.g. cargo containers)       │ with Gaussian blur underlay │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 4. Color Palette & Grading Look (LUT)

| Role | Color Name | Hex Code | RGB | HSL |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Accent** | Hira Corporate Blue | `#0180CF` | `1, 128, 207` | `203°, 99%, 41%` |
| **Foundation Navy** | Deep Logistics Navy | `#10243A` | `16, 36, 58` | `211°, 57%, 15%` |
| **Neutral Dark** | Apple Slate Black | `#111111` | `17, 17, 17` | `0°, 0%, 7%` |
| **Neutral Light** | Clean Studio White | `#FAFAF7` | `250, 250, 247`| `60°, 20%, 97%` |
| **Accent Trim** | Certified Gold | `#C7A56A` | `199, 165, 106`| `38°, 46%, 60%` |

### Color Grading Directives:
- **Color Space**: Rec.709 / Rec.2020 (Gamma 2.4).
- **Skin Tones**: Natural, warm neutral. Avoid orange oversaturation.
- **Midtones & Shadows**: Clean cool-shadow tint (`#10243A` subtle shadow tint) balanced against warm factory daylight.
- **Contrast**: Moderate S-Curve. Crisp blacks (do not crush below 0.05 IRE) and clean specular highlights.

---

## 5. Lower-Thirds & Motion Graphics System

### Typography Standard:
- **Primary Typeface**: `Plus Jakarta Sans` or `Inter` (Fallback: `SF Pro Display`).
- **Speaker Name**: Bold 700, 28pt (in 1080p), `#FFFFFF` or `#111111`.
- **Title / Department**: Medium 500, 18pt (in 1080p), `#0180CF`.
- **Motion Animation**:
  - **In**: 0.4s ease-out slide from left + optical alpha fade (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Hold**: 4.0s to 5.5s duration.
  - **Out**: 0.3s ease-in fade to right (`cubic-bezier(0.7, 0, 0.84, 0)`).

---

## 6. Audio Mastering & Sound Design Standard

- **Dialogue / Voiceover**: `-12.0 dBFS to -14.0 dBFS` (RMS around -18 dBFS), EQ high-pass at 80Hz, mild de-esser at 5.5kHz.
- **Background Music (BGM)**: `-22.0 dBFS to -26.0 dBFS` with -4dB dynamic sidechain ducking triggered by speaker track.
- **Sound Effects (SFX)**: `-16.0 dBFS` (subtle swooshes, mechanical air cargo cues, low cinematic hits).
- **Target Loudness**:
  - **YouTube & Corporate Portals**: `-14.0 LUFS (±1.0 LUFS)`, Max True Peak `-1.0 dBTP`.
  - **Instagram Reels / WhatsApp**: `-16.0 LUFS`, Max True Peak `-1.5 dBTP`.

---

## 7. Master Export & Delivery Specifications

| Channel | Container | Resolution | Framerate | Video Codec | Bitrate | Audio |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Master Archive** | `.mov` | 3840×2160 (16:9) | 24.00 / 25.00 fps | Apple ProRes 422 HQ | Constant Quality | 24-bit 48kHz PCM |
| **Web & YouTube** | `.mp4` | 1920×1080 (16:9) | 24.00 fps | H.264 High Profile | 20 Mbps CBR | AAC 320 kbps 48kHz |
| **Social / Reels** | `.mp4` | 1080×1920 (9:16) | 30.00 fps | H.264 / H.265 | 16 Mbps VBR 2-Pass | AAC 256 kbps 48kHz |

---

## 8. Verified Contact & Outro Lockup
Every official company video must conclude with the standardized outro card:
- **Brand Line**: *"Source Smarter. Import with Confidence."*
- **Official URL**: `hiraoutsourcing.com`
- **WhatsApp Line**: `+91 90720 14777`
- **Email**: `enquiry@hiraoutsourcing.com`


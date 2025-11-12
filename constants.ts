import React from 'react';
import { PortfolioCategory, type SkillCategory, type Experience, type PortfolioItem } from './types';

export const PERSONAL_INFO = {
  name: 'Ebere Sunday Ikechukwu',
  email: 'sundayebere23@gmail.com',
  whatsapp: '08127581153',
  whatsappLink: 'https://wa.me/2348127581153',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Graphic Design',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-pink-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" })),
    skills: [{ name: 'Photoshop' }, { name: 'CorelDRAW' }, { name: 'InDesign' }, { name: 'Figma' }, { name: 'Canva' }, {name: "Affinity"}],
  },
  {
    title: 'Video Editing',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-blue-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" })),
    skills: [{ name: 'Premiere Pro' }, { name: 'After Effects' }, { name: 'CapCut' }, { name: 'Clipchamp' }, { name: 'Canva Video' }],
  },
  {
    title: 'AI Creative Tools',
    icon: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8 text-purple-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" })),
    skills: [{ name: 'Pika Labs' }, { name: 'Runway' }, { name: 'Sora' }, { name: 'Veo3' }, { name: 'Leonardo AI' }, { name: 'Gemini' }, { name: 'Heygen' }, { name: 'Turing' }],
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  { company: 'CapacityBay Inc.', role: 'Graphic Designer, Video Editor & AI-Ads Creator' },
  { company: 'Girls in Tech Nigeria', role: 'Graphic Design Instructor' },
  { company: 'Qapabli', role: 'Graphics Designer' },
];

// =================================================================================
// === HOW TO ADD YOUR OPTIMIZED PORTFOLIO IMAGES & VIDEOS                       ===
// =================================================================================
//
// 1. UPLOAD your media to a FREE Cloudinary account (cloudinary.com).
// 2. For each file, click it and "Copy URL".
// 3. To make images load FAST, you MUST add optimization parameters to the URL.
//
//    - Find the "/upload/" part of the URL you copied.
//    - IMMEDIATELY AFTER IT, add: "w_500,q_auto,f_auto/"
//
//    EXAMPLE:
//    Original URL:  https://res.cloudinary.com/your-name/image/upload/v123/my-image.jpg
//    Optimized URL: https://res.cloudinary.com/your-name/image/upload/w_500,q_auto,f_auto/v123/my-image.jpg
//
// 4. Paste the final optimized URL into the 'imageUrl' fields below.
// 5. For videos, you need TWO URLs: one for the video file and one for the poster image.
//
// =================================================================================

const placeholderUrl = 'https://res.cloudinary.com/demo/image/upload/w_500,q_auto,f_auto/sample.jpg';
const placeholderVideoUrl = 'https://res.cloudinary.com/demo/video/upload/q_auto,f_auto/sample.mp4';
const placeholderPosterUrl = 'https://res.cloudinary.com/demo/image/upload/w_500,h_889,c_fill,q_auto,f_auto/sample.jpg';
const placeholderLandscapePosterUrl = 'https://res.cloudinary.com/demo/image/upload/w_889,h_500,c_fill,q_auto,f_auto/sample.jpg';


export const PORTFOLIO_DATA: PortfolioItem[] = [
  // Birthday Flyers (3 items)
  { id: 1, category: PortfolioCategory.BIRTHDAY, title: 'Birthday Flyer For CapacityBay COO', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601552/Emmy-Birthday-flyer-main_hxvg4i.jpg", description: 'Designed a professional birthday flyer for the Chief Operating Officer of CapacityBay. Focused on sophisticated layouts,, and subtle background textures for a classy finish.' },
  { id: 2, category: PortfolioCategory.BIRTHDAY, title: 'Birthday Design For A Child', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601558/price_minaj_uqacyf.jpg", description: 'Designed a professional birthday flyer for a child. Focused on sophisticated layouts,, and subtle background textures for a classy finish.' },
 

  // Webinar Designs (5 items)
  { id: 4, category: PortfolioCategory.WEBINAR, title: 'Kids-Academy Bootcamp Program', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624706/Kids_Academy_program_flyer2_mmn6ik.png", description: 'Developed a professional flyer design for CapacityBay Kids-Academy Bootcamp Program. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 5, category: PortfolioCategory.WEBINAR, title: 'Webinar Design', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624703/Everyday-data-Analysis-flyer_gcjhmh.jpg", description: 'Designed a professional program flyer design for Everydaydataanalyst Hub. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 6, category: PortfolioCategory.WEBINAR, title: 'CapacityBay Cyber Cecurity Program', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624696/Cyber_Security_capa_iehtoz.jpg", description: 'Designed a professional program flyer design for CapacityBay Cyber Cecurity Program. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 7, category: PortfolioCategory.WEBINAR, title: 'Webinar Design ', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624699/Everyday-data-Analysis-flyer..._wtf4oz.jpg", description: 'Designed a professional Webinar flyer design for Everydaydataanalyst Hub. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 8, category: PortfolioCategory.WEBINAR, title: 'Webinar Design ', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624695/Azure-desig2._dote0a.jpg", description: 'Designed a professional Webinar flyer design for CapacityBay. Combined creative layouts with modern typography and color balance for visual appeal.' },

  // Banner Designs (5 items)
  { id: 9, category: PortfolioCategory.BANNER, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601469/Uniq_billboard_qd5xqo.png", description: 'Designed a professional Banner design for Uniq-Estate. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 10, category: PortfolioCategory.BANNER, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601469/light-banner-red_asggcf.png", description: 'Designed a professional Phone-Accessories Banner design for Light-Gadgets. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 11, category: PortfolioCategory.BANNER, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601469/light-banner-blue_gyodny.png", description: 'Designed a professional Phone-Accessories Banner design for Light-Gadgets. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 12, category: PortfolioCategory.BANNER, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601464/uniq-estate-flyer_ddfgbt.jpg", description: 'Designed a professional Banner design for Uniq-Estate. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 13, category: PortfolioCategory.BANNER, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762600071/non-for_profit_designs-banner_ykeh3z.png", description: 'Designed a professional Banner design for a Non-Profit Business organization. Combined creative layouts with modern typography and color balance for visual appeal.' },

  // Brand Identity (5 items)
  { id: 14, category: PortfolioCategory.BRAND, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762856016/Uniq-Brand-identity-mockup-in-one_vlv1an.jpg", description: 'Developed a complete brand identity for Uniq Estate, a modern real estate company. The project included logo design, color palette creation, and visual style consistency across all brand materials.' },
  { id: 15, category: PortfolioCategory.BRAND, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624508/tobins-logo_2_xoeacz.png", description: 'Developed a complete brand identity for Tobinsco capital investment. The project included logo design, color palette creation, and visual style consistency across all brand materials.' },
  { id: 16, category: PortfolioCategory.BRAND, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762856021/polite-havoc-logo-concept3_aohdwv.png", description: 'Developed a complete brand identity for Polite Havoc, a modern clothing brand company. The project included logo design, color palette creation, and visual style consistency across all brand materials.' },
  { id: 17, category: PortfolioCategory.BRAND, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624513/iphone16_zpkzxp.png", description: 'Developed a complete brand identity for CityGrill OSport, a modern restaurant. The project included logo design, color palette creation, and visual style consistency across all brand materials.' },
  { id: 18, category: PortfolioCategory.BRAND, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624516/thankGod_no_disturb_me_zwz7ju.png", description: 'Developed a complete brand identity for Gees Collection, a dealer of female shoes and bags. The project included logo design, color palette creation, and visual style consistency across all brand materials.' },

  // Program Designs (5 items)
  { id: 19, category: PortfolioCategory.PROGRAM, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762622421/Capacitybay-challenge_vqrm3l.jpg", "description": 'Designed a bold and inspiring design for CapacityBay Bootcamp program. Utilized attention-grabbing fonts, strategic color contrast, and layout balance to communicate ambition.' },
  { id: 20, category: PortfolioCategory.PROGRAM, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624617/emeka-flyer-for-affiliate-marketing_t5w8uw.jpg", description: 'Developed a bold and inspiring design for the Smart Income Summit event. Utilized attention-grabbing fonts, strategic color contrast, and layout balance to communicate ambition and financial empowerment.' },
  { id: 21, category: PortfolioCategory.PROGRAM, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762622441/GDG-Ama-design_rzclkr.jpg", description: 'Designed a bold and inspiring AMA Session design for Google Develpers Group On Campus. Utilized attention-grabbing fonts, strategic color contrast, and layout balance to communicate ambition.' },
  { id: 22, category: PortfolioCategory.PROGRAM, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762622453/graphic_design_program_fbjcxz.jpg", description: 'Designed a bold and inspiring design . Utilized attention-grabbing fonts, strategic color contrast, and layout balance to communicate ambition.' },
  { id: 23, category: PortfolioCategory.PROGRAM, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762625184/appetizer_apf6js.jpg", description: 'Designed a bold and inspiring design for CapacityBay program. Utilized attention-grabbing fonts, strategic color contrast, and layout balance to communicate ambition.' },

  // New Month Designs (5 items)
  { id: 24, category: PortfolioCategory.NEWMONTH, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762591767/Olan-November-Designs_ywkigw.jpg", description: 'Created a motivational new month graphic for Olan Associates, blending minimalistic design with brand colors and clean typography.' },
  { id: 25, category: PortfolioCategory.NEWMONTH, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762598823/Capacitybay-November-Designs_lkzjhl.jpg", description: 'Created a motivational new month graphic for CapacityBay, blending minimalistic design with brand colors and clean typography.' },
  { id: 26, category: PortfolioCategory.NEWMONTH, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762598822/Danrits-November-Designs_o7hait.jpg", description: 'Created a motivational new month graphic for Danrit, blending minimalistic design with brand colors and clean typography.' },
  { id: 27, category: PortfolioCategory.NEWMONTH, title: 'New Month Design 4', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762622378/September-Designs-Capacitybay_nb5kar.jpg", description: 'Created a motivational new month graphic for CapacityBay, blending minimalistic design with brand colors and clean typography.' },
  { id: 28, category: PortfolioCategory.NEWMONTH, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762598831/July-Designs-olan_oyk7c5.jpg", description: 'Created a motivational new month graphic for Olan Associates, blending minimalistic design with brand colors and clean typography.' },
  
  // Carousel Designs (5 items)
  { id: 29, category: PortfolioCategory.CAROUSEL, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601620/capa-socials-carousel_xqv0xm.png", description: 'Created a visually balanced multi-slide carousel for social media to educate and engage followers about our appetizer courses. Maintained color consistency, alignment, and modern visual style.' },
  { id: 30, category: PortfolioCategory.CAROUSEL, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762601627/Crousel_Designs_km4ddq.jpg", description: 'Created a visually balanced multi-slide carousel for social media to educate and engage followers about Excel Skills. Maintained color consistency, alignment, and modern visual style.' },
  { id: 31, category: PortfolioCategory.CAROUSEL, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762602360/Tuesday_Carousel_Designs_1_1_lw8uyh.png", description: 'Created a visually balanced multi-slide carousel for social media to educate and engage followers about Portfolio Building. Maintained color consistency, alignment, and modern visual style.' },


  // More Designs (5 items)
  { id: 34, category: PortfolioCategory.MORE, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624615/chima-xchange_h5jskq.jpg", description: 'Developed a professional flyer design for a crypto exchange agent. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 35, category: PortfolioCategory.MORE, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762622473/GITN-INTRO-Flyer2_xhppgq.jpg", description: 'Developed a professional flyer design for a Food vendor. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 36, category: PortfolioCategory.MORE, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624406/Holychild_easter_designs_ip5na6.jpg", description: 'Developed a professional Easter Design for Holy Child preparatory School. Combined creative layouts with modern typography and color balance for visual appeal.' },
  { id: 37, category: PortfolioCategory.MORE, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762623112/qapabli-christmas_aw74is.png", description: 'Designed a festive Christmas greeting flyer for Qapabli, combining elegant gift elements with the brands color scheme. Balanced modern typography with warm tones to reflect both professionalism and celebration' },
  { id: 38, category: PortfolioCategory.MORE, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/w_1200,q_auto,f_auto/v1762624407/Newyear_Designs_jgilac.png", description: 'Designed a festive New Year greeting flyer for Qapabli, combining elegant gift elements with the brands color scheme. Balanced modern typography with warm tones to reflect both professionalism and celebration' },
 

  // Video/AI Ads (10 items: 5 Portrait, 5 Landscape)
  { id: 39, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762879561/capacityBay-thunbnail_u7bds9.jpg", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/w_1200,q_auto,f_auto/v1762815518/202510210423_yhhfmv.mp4", isVideo: true, description: 'Created a visually captivating video to celebrate the start of a new month for CapacityBays social media platforms. Combined brand colors, typography, and positive motion graphics to communicate optimism and growth', isLandscape: false },
  { id: 40, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762879562/olan-thumbnail_u2mb2e.jpg", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762815367/olan-newmonth-ads-video-November_pzqjft.mp4", isVideo: true, description: 'Created a visually captivating video to celebrate the start of a new month for Olan Associates social media platforms. Combined brand colors, typography, and positive motion graphics to communicate optimism and growth', isLandscape: false },
  { id: 41, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762879561/Danrit-thumbnail_kgi7bd.jpg", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762815368/202510311123_bt1jqp.mp4", isVideo: true, description: 'Created a visually captivating video to celebrate the start of a new month for Danrit Beauty Salon social media platforms. Combined brand colors, typography, and positive motion graphics to communicate optimism and growth', isLandscape: false },
  { id: 42, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762879562/Untitled_design_zlcxiw.jpg", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762815379/CapacityBay-kids-Academy-Ads-restructured_x31dix.mp4", isVideo: true, description: 'Kids Academy, showcasing the academys mission to teach children tech skills in a fun and inspiring way. The edit focused on clear storytelling, smooth transitions, and bright visuals that reflect the academys learning spirit.', isLandscape: false },
  { id: 43, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762880944/WhatsApp_Image_2025-11-01_at_09.21.41_ucxvq1.jpg", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762815349/202511011408_ewrdnt.mp4", isVideo: true, description: 'Created a visually captivating for Olan Associates social media platforms. Combined brand colors, typography, and positive motion graphics to communicate optimism and growth.', isLandscape: false },
  { id: 44, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762910497/Screenshot_2025-11-11_201626_vcqaw8.png", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762909377/Qapabli_Splunk_bzesze.mp4", isVideo: true, description: 'Edited a tech-focused promotional ad for Qapablis Splunk training program. The video featured clean motion graphics, sharp text effects, and professional transitions to communicate innovation and data analytics expertise.', isLandscape: true },
  { id: 45, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762910477/Screenshot_2025-11-11_201928_jng4nv.png", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762909387/CapacityBay_KidsAcademy1_wfvyon.mp4", isVideo: true, description: 'Designed and edited a promotional video ad to highlight CapacityBay Python Programming course. Used dynamic text animations, quick cuts, and visuals that reflect learning, coding, and tech growth.', isLandscape: true },
  { id: 46, category: PortfolioCategory.VIDEO, title: '', imageUrl: "https://res.cloudinary.com/dyceltmo3/image/upload/v1762910476/Screenshot_2025-11-11_202008_qv1juu.png", videoUrl: "https://res.cloudinary.com/dyceltmo3/video/upload/v1762909362/Capapython3_cw7obq.mp4", isVideo: true, description: 'Designed and edited a promotional video ad to highlight CapacityBay kids Academy Programming course. Used dynamic text animations, quick cuts, and visuals that reflect learning, coding, and tech growth.', isLandscape: true },
  
];
"use client";

import Slide1_Hero from "@/components/Slide1_Hero";
import Slide2_Aim from "@/components/Slide2_Aim";
import Slide3_Tech from "@/components/Slide3_Tech";
import Slide4_Design from "@/components/Slide4_Design";
import Slide5_New from "@/components/Slide5_New";
import Slide6_Sec from "@/components/Slide6_Sec";
import Slide7_Flow from "@/components/Slide7_Flow";  // Added Slide 7
import Slide8_Conclusion from "@/components/Slide8_Conclusion"; // Added Slide 8

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-y-scroll scroll-snap-y mandatory snap-y">
      <div className="slide-section"><Slide1_Hero /></div>
      <div className="slide-section"><Slide2_Aim /></div>
      <div className="slide-section"><Slide3_Tech /></div>
      <div className="slide-section"><Slide4_Design /></div>
      <div className="slide-section"><Slide5_New /></div>
      <div className="slide-section"><Slide6_Sec /></div>
      <div className="slide-section"><Slide7_Flow /></div>       {/* Render Slide 7 */}
      <div className="slide-section"><Slide8_Conclusion /></div> {/* Render Slide 8 */}
    </main>
  );
}

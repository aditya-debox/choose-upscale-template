import About from "@/components/About";
import BannerSection from "@/components/BannerSection";
import CardSection from "@/components/CardSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Head from "next/head";
import { CSSProperties } from "react";

export default async function Home() {
  const colors = { 
    bgColor: "#EBF8ED", 
    primaryColor: "#162D30", 
    textColor: "#0B0B0B", 
    subTextColor: "#0B0B0BE5", 
    buttonBgColor: "#162D30",
    buttonTextColor: "#EBF8ED",
    butonHoverColor: "#162D30",
  };

  const fonts = {
    primaryFont: "Karla",
    secondaryFont: "Tenor Sans",
  };

  const customStyle: CSSProperties & { [key: string]: string } = {
    "--bg-color": colors.bgColor,
    "--primary-color": colors.primaryColor,
    "--text-color": colors.textColor,
    "--subtext-color": colors.subTextColor,
    "--button-bg-color": colors.buttonBgColor,
    "--button-text-color": colors.buttonTextColor,
    "--button-hover-color": colors.butonHoverColor,
    "--primary-font": fonts.primaryFont,
    "--secondary-font": fonts.secondaryFont,
  };

  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fonts.primaryFont}:italwght@0,200..800;1,200..800&family=${fonts.secondaryFont}&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <div
        style={customStyle}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <HeroSection />
        <CardSection/>
        <BannerSection/>
        <About/>
        <Slider/>
      </div>
    </>
  );
}

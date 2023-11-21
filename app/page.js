"use client";
import { useLayoutEffect, useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import gsap from "gsap";

const Home = () => {
  const [loaderFinised, setloaderFinished] = useState(false);
  const [timeline, setTimeLine] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setloaderFinished(true),
      });
      setTimeLine(tl);
    });
    return () => context.revert();
  }, []);

  return (
    <main>{loaderFinised ? <Hero /> : <Loader timeline={timeline} />}</main>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import Cards from "./Cards";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = ({ id }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cardAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "center bottom",
          end: "bottom bottom",
          scrub: true,
          once: true,
        },
      });

      cardAnimation.fromTo(
        ".base-card",
        {
          opacity: 0,
          xPercent: -100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 0,
        }
      );

      cardAnimation.fromTo(
        ".premium-card",
        {
          opacity: 0,
          yPercent: -100,
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 2,
        }
      );

      cardAnimation.fromTo(
        ".enterprise-card",
        {
          opacity: 0,
          xPercent: 100,
        },
        {
          opacity: 1,
          xPercent: 0,
          duration: 2,
          ease: "power1.in",
          stagger: 4,
        }
      );
    }, cardRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id={id}
      className="pricing min-h-dvh w-full bg-black flex items-center justify-center mt-20"
    >
      <div
        ref={cardRef}
        className="min-h-dvh w-full flex flex-col items-center justify-center z-10 gap-10"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-white text-xl p-3 rounded-full border border-white">
            Pricing
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 w-full md:w-3/5 p-5">
          <Cards
            title="Base"
            price="FREE"
            containerClassName="flex flex-col gap-4 p-5 xl:p-10 border-2 border-gray-700 rounded-3xl text-white xl:w-1/3 w-full h-full items-start justify-start base-card"
            listItems={[
              "1 active collaboration room",
              "Basic syntax highlighting",
              "30-minute session limit/day",
              "Limited drawing board tools",
            ]}
            ptag="For personal use and small projects"
          />
          <Cards
            title="Professional"
            price="$10 / month"
            containerClassName="flex flex-col md:col-span-2 md:mx-auto xl:mx-0 gap-4 p-5 md:p-10 border-2 border-white shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] rounded-3xl text-white xl:w-1/3 w-full h-full items-start justify-start premium-card"
            listItems={[
              "Unlimited collaboration rooms",
              "Advanced auto-formatting",
              "Unlimited drawing board usage",
              "Customizable themes",
              "Priority support",
            ]}
            ptag="For teams & professionals"
          />
          <Cards
            title="Enterprise"
            price="$20 / month"
            containerClassName="flex flex-col md:col-start-2 md:row-start-1 gap-4 p-5 md:p-10 border-2 border-gray-700 rounded-3xl text-white xl:w-1/3 w-full h-full items-start justify-start enterprise-card"
            listItems={[
              "Everything in Pro +",
              "Dedicated servers",
              "Team role management",
              "API access for integrations",
            ]}
            ptag="For large teams and enterprise-level projects"
          />
        </div>
      </div>
    </section>
  );
};
export default Pricing;

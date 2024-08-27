import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Colorstack from "./Colorstack";
import { Suspense } from "react";

const Introduce = () => {
  return (
    <section className="section2-2">
      <div className="horizon-item">
        <Suspense>
          <Colorstack />
        </Suspense>
      </div>
    </section>
  );
};

export default Introduce;

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './MatScrollReveal.css';
import angledMat from '../../assets/Grass image.png';

gsap.registerPlugin(ScrollTrigger);

const MatScrollReveal = () => {
  const matRef = useRef(null);

  useEffect(() => {
    gsap.to(matRef.current, {
      scrollTrigger: {
        trigger: matRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
      rotateX: 45,
      y: -100,
      scale: 1.2,
      ease: 'power2.inOut',
    });
  }, []);

  return (
    <section className="mat-scroll-section">
      <img ref={matRef} src={angledMat} alt="Angled Mat" className="scroll-mat-image" />
    </section>
  );
};

export default MatScrollReveal;

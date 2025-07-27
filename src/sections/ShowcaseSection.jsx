import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const projectRef1 = useRef(null);
  const projectRef2 = useRef(null);
  const projectRef3 = useRef(null);

  useGSAP(() => {
    const projects = [
      projectRef1.current,
      projectRef2.current,
      projectRef3.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={projectRef1}>
            <a href="">
              <div className="image-wrapper">
                <img src="/images/project1.png" alt="Ryde" />
              </div>
            </a>
            <div className="text-content">
              <h2 className="">
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An App Built with React Native, Expo, TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={projectRef2}>
              <a href="https://jobify-9wjc.onrender.com/">
                <div className="image-wrapper bg-[#ffefdb]">
                  <img
                    src="/images/jobify.png"
                    alt="Library Management Platform"
                  />
                </div>
              </a>
              <h2>Job Tracking Platform</h2>
            </div>
            <div className="project" ref={projectRef3}>
              <a href="https://mern-food-project-45o9.onrender.com/">
                <div className="image-wrapper bg-[#ffe7eb]">
                  <img src="/images/food-app.png" alt="YC directory" />
                </div>
              </a>
              <h2> A Startup Mern Food Ordering Website</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;

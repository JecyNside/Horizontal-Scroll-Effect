import ReactLenis from "lenis/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  useGSAP(() => {

    // SCROLL
    const sectionCards = document.querySelector(".section-cards");
    const sectionTitles = document.querySelector(".section-titles");
    const sectionWidth = sectionCards.offsetWidth;
    const titlesWidth = sectionTitles.offsetWidth;
    const scroll = sectionWidth - titlesWidth;

    // SPLIT TEXT
    let text = new SplitText(".main-text", {type: "words"})

    gsap.from(text.words, {
      yPercent: 100,
      autoAlpha: 0,
      filter: "blur(30px)",
      stagger: .4
    })

    ScrollTrigger.create({
      trigger: "#section-2",
      start: "top top",
      end: "+=" + scroll,
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".section-cards", {
          x: `${-scroll * self.progress}`,
        });
      },
    });
  });

  return (
    <ReactLenis root>
      <main>
        <section id="section-1">
          <h1 className="main-text">Horizontal Scroll Effect</h1>
        </section>

        <section id="section-2">
          <div className="section-titles">
            <span>Our Features</span>
            <p>
              High-Quality UI Elements <br />
              for Professional Websites
            </p>
          </div>

          <div className="section-cards">
            <div className="card">
              <div className="card-titles">
                <span>Customizable Buttons</span>

                <p>
                  Easily modify size, color, and style to match your brand’s
                  look and feel.
                </p>
              </div>

              <div className="card-imgs">
                <p>IMAGENES</p>
              </div>
            </div>

            <div className="card">
              <div className="card-titles">
                <span>Responsive Grids</span>

                <p>
                  Adaptable layouts for any screen size, ensuring a perfect fit
                  on any device.
                </p>
              </div>

              <div className="card-imgs">
                <p>IMAGENES</p>
              </div>
            </div>

            <div className="card">
              <div className="card-titles">
                <span>
                  Adaptable layouts for any screen size, ensuring a perfect fit
                  on any device.
                </span>

                <p>
                  A variety of fonts and sizes to maintain a consistent
                  appearance.
                </p>
              </div>

              <div className="card-imgs">
                <p>IMAGENES</p>
              </div>
            </div>

            <div className="card">
              <div className="card-titles">
                <span>Interactive Modals</span>

                <p>
                  Enhance user engagement with intuitive and dynamic pop-ups.
                </p>
              </div>

              <div className="card-imgs">
                <p>IMAGENES</p>
              </div>
            </div>
          </div>
        </section>

        <section id="section-3">
          <p>
            Que tal te parecio esta animación? <br /> Si gustas puedes apoyarme
            dejando una valoración en mi repositorio de GitHub {"->"}{" "}
            <a target="_blank" href="https://github.com/JecyNside">
              #JecyNside
            </a>
          </p>
        </section>
      </main>
    </ReactLenis>
  );
}

export default App;

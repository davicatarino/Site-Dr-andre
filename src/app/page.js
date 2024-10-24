import NavBar from '@/components/navbar'
import FirstSection from '@/components/firstSection'
import SecondSection from '@/components/secondSection'
import ThirdSection from '@/components/ThirdSection'

import FifithSection from '@/components/fithSection'
import SixthSection from '@/components/sixthSection'
import NinethSection from '@/components/ninethSection'
import '../../public/styles.css'
import BackToTopButton from '@/components/subs/BackToTopButton'

/*
  import FourthSection from '@/components/fourthSection'
  import SeventhSection from '@/components/seventh'
   */

export default function Home() {
  return (
    <div className="scroll-smooth bg-[url('/assets/Sprinkle.svg')]">
      <NavBar />
      <section
        className="bg-[url('/assets/Cloudy2.svg')] bg-bottom sm:px-24"
        id="home"
      >
        <FirstSection />
      </section>
      {/*       <div className="custom-shape-divider-bottom-1721656622 mb-[-2px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <section className="sticky z-10 sm:px-24">
        <ThirdSection />
      </section>
      {/*   <div className="custom-shape-divider-top-1721744373 mt-[-2px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <section className="sm:px-24" id="trabalho">
        <SixthSection />
      </section>
      {/* <section className="sm:px-24" id="tratamento">
        <FourthSection />
      </section> */}
      <div className="custom-shape-divider-bottom-1721744926 mb-[-2px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="h-full bg-[#E59251] sm:px-24" id="mecs">
        <FifithSection />
      </section>
      <div className="custom-shape-divider-top-1721744373 mt-[-2px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="sm:px-24" id="quem">
        <SecondSection />
      </section>
      <div className="custom-shape-divider-bottom-1721744926 mb-[-5px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/*
      <section className="sm:px-24" id="FAQ">
        <SeventhSection />
      </section>
      */}
      <section>
        <NinethSection />
      </section>
      <BackToTopButton />
    </div>
  )
}

import Header from "../components/header";
import ContainerFold from "../components/container-fold";
import DownloadAppsSection from "../components/download-apps-section";

const Homepage = () => {
  return (
    <div className="relative bg-color-base w-full flex flex-col items-center justify-start text-center text-7xl text-colors-primary-white font-typography-button-large">
      <Header />
      <ContainerFold />
      <div className="self-stretch bg-color-base flex flex-col py-1 px-[78px] items-center justify-start md:pl-[30px] md:pr-[30px] md:box-border sm:pl-[15px] sm:pt-1 sm:pr-[15px] sm:box-border">
        <div className="self-stretch h-[705px] flex flex-col py-[50px] px-32 box-border items-center justify-start gap-[12px] md:pl-0 md:pr-0 md:box-border sm:items-center sm:justify-center sm:pl-0 sm:pr-0 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[4px] sm:items-start sm:justify-center">
            <b className="self-stretch relative leading-[34px]">
              A New Era of Excellence
            </b>
            <div className="self-stretch relative text-base leading-[24px] inline-block h-[35px] shrink-0">
              This powerhouse of an SUV is obsessively engineered to dial up
              adrenaline like never before.
            </div>
          </div>
          <video
            className="self-stretch relative h-[520px]"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/xuv700_debut on 14th august _ ready to feel the rush_.mp4" />
          </video>
        </div>
      </div>
      <DownloadAppsSection />
    </div>
  );
};

export default Homepage;

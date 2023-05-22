import { useCallback } from "react";
import TopNavContainer from "../components/top-nav-container";
import GrFloorContainer from "../components/gr-floor-container";
import { useRouter } from "next/router";

const DesktopOwnOnlineFinanceDea = () => {
  const router = useRouter();

  const onOutlineButtonClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online");
  }, [router]);

  return (
    <div className="relative bg-color-base w-full h-[768px] overflow-hidden text-left text-base text-colors-primary-white font-typography-button-large">
      <TopNavContainer
        serialNumber="/logo1.svg"
        productCode="/iconmenu1.svg"
        iconMenuBackgroundColor="#242424"
      />
      <b className="absolute top-[23.83%] left-[5.93%] text-7xl leading-[34px] [-webkit-text-stroke:1px_#fff]">
        XUV700
      </b>
      <b className="absolute top-[28.52%] left-[5.93%] text-xl leading-[28px] [-webkit-text-stroke:1px_#fff]">
        W8 • Diesel • Automatic • Sunburst Orange
      </b>
      <div className="absolute h-[2.6%] w-[11.51%] top-[19.66%] right-[82.56%] bottom-[77.73%] left-[5.93%] text-xs">
        <div className="absolute top-[0%] left-[69.34%] leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
          Pune
        </div>
        <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
          Ex-showroom price:
        </div>
        <img
          className="absolute h-4/5 w-[10.18%] top-[10%] right-[0%] bottom-[10%] left-[89.82%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/edit1.svg"
        />
      </div>
      <div className="absolute top-[235px] left-[693px] rounded-3xs bg-color-cards w-[592px] h-[136px]" />
      <div className="absolute top-[387px] left-[693px] rounded-3xs bg-color-cards w-[592px] h-[136px]" />
      <img
        className="absolute h-[2.34%] w-[1.32%] top-[33.2%] right-[46.78%] bottom-[64.45%] left-[51.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/success2.svg"
      />
      <div className="absolute top-[183px] left-[1101px] rounded-[5px] bg-color-cards w-[184px] h-9" />
      <b className="absolute top-[24.35%] left-[50.73%] text-xl leading-[28px] [-webkit-text-stroke:1px_#fff]">
        Select Dealer
      </b>
      <b className="absolute top-[32.68%] left-[54.39%] text-lg leading-[26px] [-webkit-text-stroke:1px_#fff]">{`Randhawa Motors `}</b>
      <b className="absolute top-[52.47%] left-[54.39%] text-lg leading-[26px] [-webkit-text-stroke:1px_#fff]">{`Randhawa Motors `}</b>
      <div className="absolute w-[35.87%] top-[39.97%] left-[54.39%] leading-[24px] inline-block [-webkit-text-stroke:1px_#fff]">
        Gr. Floor, Jaswant Landmark, Mehra Compound, Opp Basant Park, Near
        Hanuman Temple, 400070
      </div>
      <div className="absolute w-[35.87%] top-[59.77%] left-[54.39%] leading-[24px] inline-block [-webkit-text-stroke:1px_#fff]">
        Gr. Floor, Jaswant Landmark, Mehra Compound, Opp Basant Park, Near
        Hanuman Temple, 400070
      </div>
      <b className="absolute top-[36.33%] left-[54.39%] leading-[24px] [-webkit-text-stroke:1px_#fff]">
        LBS Marg, 400070
      </b>
      <b className="absolute top-[56.12%] left-[54.39%] leading-[24px] [-webkit-text-stroke:1px_#fff]">
        LBS Marg, 400070
      </b>
      <div className="absolute top-[24.74%] left-[81.19%] text-xs leading-[20px] text-colors-secondary-grey-2 opacity-[0.67]">{`Search By Pin Code `}</div>
      <img
        className="absolute h-[2.08%] w-[1.17%] top-[25.13%] right-[6.52%] bottom-[72.79%] left-[92.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon-awesomesearch.svg"
      />
      <img
        className="absolute h-[2.34%] w-[1.32%] top-[33.2%] right-[6.88%] bottom-[64.45%] left-[91.8%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/view-in-maps.svg"
      />
      <img
        className="absolute h-[2.34%] w-[1.32%] top-[52.99%] right-[6.88%] bottom-[44.66%] left-[91.8%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/view-in-maps1.svg"
      />
      <img
        className="absolute h-[2.34%] w-[1.32%] top-[52.99%] right-[46.78%] bottom-[44.66%] left-[51.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
      <GrFloorContainer />
      <GrFloorContainer propTop="691px" />
      <img
        className="absolute h-[9.11%] w-full top-[90.89%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <div className="absolute h-[5.73%] w-[24.16%] top-[92.84%] right-[37.92%] bottom-[1.43%] left-[37.92%]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[46.97%] top-[0%] right-[53.03%] bottom-[0%] left-[0%]"
          onClick={onOutlineButtonClick}
        >
          <img
            className="absolute h-[102.27%] w-[96.27%] top-[-1.14%] right-[4.13%] bottom-[-1.14%] left-[-0.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-48223.svg"
          />
          <img
            className="absolute h-[100.81%] w-[6.43%] top-[-0.41%] right-[-0.63%] bottom-[-0.41%] left-[94.2%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/line-1702.svg"
          />
          <b className="absolute top-[22.73%] left-[35.48%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-center">
            Back
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[46.97%] top-[0%] right-[0%] bottom-[0%] left-[53.03%]">
          <img
            className="absolute h-full w-[95.48%] top-[0%] right-[4.52%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/path-48224.svg"
          />
          <img
            className="absolute h-[100.81%] w-[6.43%] top-[-0.41%] right-[-0.63%] bottom-[-0.41%] left-[94.2%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/line-1702.svg"
          />
          <b className="absolute top-[22.73%] left-[24.52%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-center">
            Continue
          </b>
        </button>
      </div>
      <img
        className="absolute top-[251px] left-[110px] w-[511px] h-[343px] object-cover"
        alt=""
        src="/image-71@2x.png"
      />
      <div className="absolute h-[5.21%] w-[36.53%] top-[82.03%] right-[57.54%] bottom-[12.76%] left-[5.93%] text-xs">
        <b className="absolute top-[0%] left-[0%] leading-[20px]">
          Disclaimer:
        </b>
        <div className="absolute top-[0%] left-[13.23%] leading-[20px]">
          <p className="m-0">
            <span className="font-typography-button-large">{`The information presented on this website, including all pricing, loan & offer details `}</span>
          </p>
          <p className="m-0">
            <span className="font-typography-button-large">
              are made available solely for general information purposes.
            </span>
            <span className="font-medium font-typography-button-large">{` `}</span>
            <span className="font-medium font-typography-button-large">
              <span className="[text-decoration:underline]">Read More</span>
            </span>
          </p>
        </div>
      </div>
      <div className="absolute top-[88px] left-[523px] w-80 flex flex-row items-center justify-center text-center text-3xs">
        <div className="w-[50px] flex flex-col items-center justify-end gap-[5px]">
          <div className="self-stretch relative leading-[14px]">VEHICLE</div>
          <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center">
              <div className="self-stretch relative h-0" />
            </div>
            <div className="flex flex-row items-start justify-start">
              <img className="relative w-4 h-4" alt="" src="/group-7.svg" />
            </div>
            <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[11px] items-center justify-end">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
        </div>
        <div className="flex flex-col items-center justify-end gap-[5px] text-colors-primary-red">
          <div className="relative leading-[14px] flex items-end justify-center w-[50px]">
            DEALER
          </div>
          <div className="w-[50px] h-[22px] flex flex-row items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="relative w-[22px] h-[22px]"
                alt=""
                src="/group-4.svg"
              />
            </div>
            <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-[11px] items-center justify-end">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
        </div>
        <div className="w-[50px] flex flex-col items-center justify-end gap-[5px]">
          <div className="relative leading-[14px]">BOOK</div>
          <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
            </div>
            <div className="flex flex-row items-start justify-start">
              <img className="relative w-4 h-4" alt="" src="/ellipse-210.svg" />
            </div>
            <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
              <div className="self-stretch relative h-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOwnOnlineFinanceDea;

import { useCallback } from "react";
import VariantContainer from "../components/variant-container";
import MXGasolineContainer from "../components/m-x-gasoline-container";
import TopNavContainer from "../components/top-nav-container";
import { useRouter } from "next/router";

const DesktopOwnOnlineBuyOnline = () => {
  const router = useRouter();

  const onOutlineButtonClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onOutlineButton1Click = useCallback(() => {
    router.push("/desktop-own-online-finance-dea");
  }, [router]);

  return (
    <div className="relative bg-color-base w-full h-[768px] overflow-hidden text-center text-base text-colors-primary-white font-typography-button-large">
      <div className="absolute top-[373px] left-[693px] rounded-3xs bg-color-cards w-[592px] h-[74px]" />
      <img
        className="absolute h-[5.47%] w-[29.85%] top-[50.65%] right-[18.25%] bottom-[43.88%] left-[51.9%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-8304.svg"
      />
      <b className="absolute top-[61.33%] left-[50.73%] text-lg leading-[26px] text-left">
        Choose Variant (5)
      </b>
      <div className="absolute top-[62.89%] left-[69.84%] text-xs leading-[20px] text-left">
        Note: The waiting period for selected variant is 28 to 29 Weeks.
      </div>
      <VariantContainer />
      <MXGasolineContainer />
      <img
        className="absolute h-[2.34%] w-[1.32%] top-[90.43%] right-[46.82%] bottom-[7.23%] left-[51.87%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute top-[251px] left-[110px] w-[511px] h-[343px] object-cover"
        alt=""
        src="/image-71@2x.png"
      />
      <TopNavContainer
        serialNumber="/logo1.svg"
        productCode="/iconmenu1.svg"
        iconMenuBackgroundColor="#242424"
      />
      <b className="absolute top-[23.83%] left-[5.93%] text-7xl leading-[34px] text-left [-webkit-text-stroke:1px_#fff]">
        XUV700
      </b>
      <div className="absolute h-[2.6%] w-[11.65%] top-[19.66%] right-[82.42%] bottom-[77.73%] left-[5.93%] text-left text-xs">
        <div className="absolute top-[0%] left-[70.98%] leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
          Pune
        </div>
        <div className="absolute top-[0%] left-[0%] leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
          *Ex-showroom price:
        </div>
        <img
          className="absolute h-4/5 w-[10.05%] top-[10%] right-[0%] bottom-[10%] left-[89.95%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/edit1.svg"
        />
      </div>
      <div className="absolute top-[191px] left-[693px] rounded-3xs bg-color-cards w-[184px] h-[120px]" />
      <div className="absolute top-[191px] left-[897px] rounded-3xs bg-color-cards w-[184px] h-[120px]" />
      <div className="absolute top-[191px] left-[1101px] rounded-3xs bg-color-cards w-[184px] h-[120px]" />
      <b className="absolute top-[25.39%] left-[56.3%] leading-[24px]">Fuel</b>
      <b className="absolute top-[19.92%] left-[50.73%] text-lg leading-[26px] text-left">
        Choose Configuration
      </b>
      <b className="absolute top-[25.39%] left-[68.89%] leading-[24px]">
        Transmission
      </b>
      <b className="absolute top-[25.39%] left-[85.29%] leading-[24px]">
        Seating
      </b>
      <div className="absolute top-[35.81%] left-[55.86%] leading-[24px]">
        Diesel
      </div>
      <div className="absolute top-[35.81%] left-[69.69%] leading-[24px]">
        Automatic
      </div>
      <div className="absolute top-[231px] left-[701px] rounded-2xl bg-colors-light-background w-[168px] h-8" />
      <div className="absolute top-[231px] left-[905px] rounded-2xl bg-colors-light-background w-[168px] h-8" />
      <div className="absolute top-[247px] left-[1109px] rounded-2xl bg-colors-light-background w-[168px] h-8" />
      <div className="absolute top-[283px] left-[1109px] rounded-3xs bg-colors-light-background w-[168px] h-[120px]" />
      <div className="absolute top-[323px] left-[1109px] bg-colors-secondary-grey-4 w-[168px] h-10" />
      <div className="absolute top-[30.6%] left-[55.86%] leading-[24px] text-color-base">
        Petrol
      </div>
      <div className="absolute top-[30.6%] left-[70.5%] leading-[24px] text-color-base">
        Manual
      </div>
      <div className="absolute top-[32.68%] left-[85.21%] leading-[24px] text-color-base">
        5 Seater
      </div>
      <div className="absolute top-[37.89%] left-[85.21%] leading-[24px] text-color-base">
        6 Seater
      </div>
      <div className="absolute top-[43.1%] left-[85.21%] leading-[24px] text-color-base">
        7 Seater
      </div>
      <div className="absolute top-[48.31%] left-[85.21%] leading-[24px] text-color-base">
        7 Seater
      </div>
      <div className="absolute top-[222.5px] left-[692.5px] box-border w-[185px] h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
      <div className="absolute top-[222.5px] left-[896.5px] box-border w-[185px] h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
      <div className="absolute top-[222.5px] left-[1100.5px] box-border w-[185px] h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
      <div className="absolute top-[271px] left-[701px] rounded-2xl box-border w-[168px] h-8 border-[1px] border-solid border-colors-light-background" />
      <div className="absolute top-[271px] left-[905px] rounded-2xl box-border w-[168px] h-8 border-[1px] border-solid border-colors-light-background" />
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
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-full w-[46.97%] top-[0%] right-[0%] bottom-[0%] left-[53.03%]"
          onClick={onOutlineButton1Click}
        >
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
        className="absolute top-[254px] left-[1243px] w-[18px] h-[18px] overflow-hidden"
        alt=""
        src="/icondropdown2.svg"
      />
      <div className="absolute top-[322.5px] left-[1108.5px] box-border w-[169px] h-px border-t-[1px] border-solid border-colors-secondary-grey-4" />
      <div className="absolute top-[362.5px] left-[1108.5px] box-border w-[169px] h-px border-t-[1px] border-solid border-colors-secondary-grey-4" />
      <div className="absolute top-[43.62%] left-[50.73%] text-left text-lg">
        <b className="leading-[26px]">{`Choose Colour: `}</b>
        <span className="text-sm leading-[22px]">Sunburst Orange</span>
      </div>
      <img
        className="absolute h-[4.79%] w-[2.64%] top-[24.61%] right-[54.1%] bottom-[70.6%] left-[43.27%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-7892.svg"
      />
      <div className="absolute top-[85.68%] left-[5.93%] text-xs [text-decoration:underline] leading-[20px] font-medium text-left">
        *See Disclaimers
      </div>
      <div className="absolute top-[88px] left-[523px] w-80 flex flex-row items-center justify-center text-3xs">
        <div className="w-[50px] flex flex-col items-center justify-end gap-[5px] text-colors-primary-red">
          <div className="self-stretch relative leading-[14px]">VEHICLE</div>
          <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center">
              <div className="self-stretch relative h-0" />
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
        <div className="flex flex-col items-center justify-end gap-[5px]">
          <div className="relative leading-[14px] flex items-end justify-center w-[50px]">
            DEALER
          </div>
          <div className="w-[50px] h-[22px] flex flex-row items-center justify-center">
            <div className="self-stretch flex-1 flex flex-col items-center justify-center">
              <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
            </div>
            <div className="flex flex-row items-start justify-start">
              <img className="relative w-4 h-4" alt="" src="/ellipse-210.svg" />
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

export default DesktopOwnOnlineBuyOnline;

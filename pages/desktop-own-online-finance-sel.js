import TopNavContainer from "../components/top-nav-container";
import ContainerButton from "../components/container-button";

const DesktopOwnOnlineFinanceSel = () => {
  return (
    <div className="relative bg-color-base w-full h-[768px] overflow-hidden text-left text-base text-colors-primary-white font-typography-button-large">
      <div className="absolute top-[88px] left-[523px] w-80 flex flex-row items-center justify-center text-center text-3xs">
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
      <TopNavContainer
        serialNumber="/logo1.svg"
        productCode="/iconmenu1.svg"
        iconMenuBackgroundColor="#242424"
      />
      <b className="absolute top-[20.83%] left-[6%] text-xl leading-[28px] [-webkit-text-stroke:1px_#fff]">
        Select Your Configuration
      </b>
      <div className="absolute top-[217px] left-[81px] rounded-3xs bg-color-cards w-[1204px] h-[239px]" />
      <div className="absolute top-[476px] left-[81px] rounded-3xs bg-color-cards w-[1204px] h-[239px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[5.73%] w-[11.35%] top-[50.52%] right-[7.39%] bottom-[43.75%] left-[81.26%]">
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
        <b className="absolute top-[22.73%] left-[32.26%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-left">
          Select
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[5.73%] w-[11.35%] top-[84.24%] right-[7.39%] bottom-[10.03%] left-[81.26%]">
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
        <b className="absolute top-[22.73%] left-[32.26%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-left">
          Select
        </b>
      </button>
      <div className="absolute top-[37.63%] left-[28.48%] leading-[24px]">
        Dealer
      </div>
      <div className="absolute top-[71.35%] left-[28.48%] leading-[24px]">
        Dealer
      </div>
      <div className="absolute top-[37.63%] left-[50.73%] leading-[24px]">
        City of Registeration
      </div>
      <div className="absolute top-[71.35%] left-[50.73%] leading-[24px]">
        City of Registeration
      </div>
      <div className="absolute top-[37.63%] left-[73.13%] leading-[24px]">
        Ex-showroom Price
      </div>
      <div className="absolute top-[71.35%] left-[73.13%] leading-[24px]">
        Ex-showroom Price
      </div>
      <b className="absolute top-[41.02%] left-[28.48%] leading-[24px]">
        <p className="m-0">{`DealerRandhawa Motors `}</p>
        <p className="m-0">{`(A Div Of Randhawa `}</p>
      </b>
      <b className="absolute top-[74.74%] left-[28.48%] leading-[24px]">
        <p className="m-0">{`DealerRandhawa Motors `}</p>
        <p className="m-0">{`(A Div Of Randhawa `}</p>
      </b>
      <b className="absolute top-[41.02%] left-[50.73%] leading-[24px]">Pune</b>
      <b className="absolute top-[74.74%] left-[50.73%] leading-[24px]">Pune</b>
      <b className="absolute top-[41.02%] left-[73.13%] leading-[24px]">
        ₹11 90 000.00
      </b>
      <b className="absolute top-[74.74%] left-[73.13%] leading-[24px]">
        ₹11 90 000.00
      </b>
      <img
        className="absolute h-[0.13%] w-[64.28%] top-[36%] right-[7.39%] bottom-[63.87%] left-[28.33%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
        alt=""
        src="/line-489.svg"
      />
      <img
        className="absolute h-[0.13%] w-[64.28%] top-[69.73%] right-[7.39%] bottom-[30.14%] left-[28.33%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
        alt=""
        src="/line-489.svg"
      />
      <img
        className="absolute h-[0.13%] w-[64.28%] top-[48.76%] right-[7.39%] bottom-[51.11%] left-[28.33%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
        alt=""
        src="/line-489.svg"
      />
      <img
        className="absolute h-[0.13%] w-[64.28%] top-[82.49%] right-[7.39%] bottom-[17.38%] left-[28.33%] max-w-full overflow-hidden max-h-full opacity-[0.4]"
        alt=""
        src="/line-489.svg"
      />
      <b className="absolute top-[30.86%] left-[28.48%] text-lg leading-[26px]">
        Xuv700 • W8 • Petrol • Automatic • Sunburst Orange
      </b>
      <b className="absolute top-[64.58%] left-[28.48%] text-lg leading-[26px]">
        Xuv300 • W8 • Petrol • Automatic • Sunburst Orange
      </b>
      <div className="absolute top-[52.08%] left-[28.48%] text-xs leading-[20px] font-medium">
        Last Modified: 11/12/2021
      </div>
      <div className="absolute top-[85.81%] left-[28.48%] text-xs leading-[20px] font-medium">
        Last Modified: 11/12/2021
      </div>
      <img
        className="absolute h-[5.99%] w-[27.67%] top-[19.66%] right-[5.93%] bottom-[74.35%] left-[66.4%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-2099.svg"
      />
      <div className="absolute top-[21.22%] left-[67.57%] text-sm leading-[22px]">
        Connect to existing booking
      </div>
      <div className="absolute top-[152px] left-[1124px] flex flex-row items-center justify-start text-lg font-source-sans-pro">
        <div className="flex flex-row p-2.5 items-start justify-start">
          <div className="relative">Yes</div>
        </div>
        <div className="relative w-[57.48px] h-[40.72px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col p-2.5 box-border items-start justify-start">
            <img
              className="relative w-[37.48px] h-[20.72px]"
              alt=""
              src="/rectangle.svg"
            />
          </div>
          <div className="absolute h-[94.01%] w-[66.59%] top-[3%] right-[31.93%] bottom-[2.99%] left-[1.48%] shadow-[0px_1px_2px_rgba(101,_101,_101,_0.33)]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-row p-2.5 box-border items-start justify-start">
              <img
                className="relative w-[18.28px] h-[18.28px]"
                alt=""
                src="/oval-copy-3.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2.5 items-start justify-start">
          <div className="relative">No</div>
        </div>
      </div>
      <img
        className="absolute top-[243px] left-[82px] w-[289px] h-[194px] object-cover"
        alt=""
        src="/image-72@2x.png"
      />
      <img
        className="absolute top-[502px] left-[82px] w-[289px] h-[194px] object-cover"
        alt=""
        src="/image-72@2x.png"
      />
      <div className="absolute top-[42.32%] left-[58.42%] text-xs font-source-sans-pro text-yellow">
        <p className="m-0">{`city of registeration added `}</p>
        <p className="m-0">to the card</p>
      </div>
      <div className="absolute top-[75.91%] left-[57.83%] text-xs font-source-sans-pro text-yellow">
        <p className="m-0">{`city of registeration added `}</p>
        <p className="m-0">to the card</p>
      </div>
      <div className="absolute top-[21.61%] left-[55.42%] text-xs font-source-sans-pro text-yellow">
        toggle card style supdated
      </div>
      <div className="absolute top-[10.68%] left-[81.63%] text-xs font-source-sans-pro text-yellow">
        <p className="m-0">{`Text syles, component spacing and `}</p>
        <p className="m-0">dark theme colour updated for entire page</p>
      </div>
      <div className="absolute top-[10.42%] left-[62.74%] text-xs font-source-sans-pro text-yellow whitespace-pre-wrap">
        <p className="m-0">Top steppers copy</p>
        <p className="m-0"> and order updated</p>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-color-base w-[1366px] h-[768px] opacity-[0.9]" />
      <ContainerButton />
      <img
        className="absolute top-[0px] left-[0px] w-[1720px] h-[1134px]"
        alt=""
        src="/vector-1.svg"
      />
    </div>
  );
};

export default DesktopOwnOnlineFinanceSel;

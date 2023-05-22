import TopNavContainer from "../components/top-nav-container";
import BackSection from "../components/back-section";
import AvailContainer from "../components/avail-container";
import OTPContainer from "../components/o-t-p-container";

const DesktopOwnOnlineFinanceSum = () => {
  return (
    <div className="relative bg-color-base w-full h-[886px] overflow-hidden text-left text-xl text-colors-primary-white font-typography-button-large">
      <div className="absolute top-[0px] left-[-147px] bg-red w-[71px] h-[691px]" />
      <div className="absolute top-[0px] left-[0px] w-[1366px] h-[886px]">
        <TopNavContainer serialNumber="/logo.svg" productCode="/iconmenu.svg" />
        <b className="absolute top-[17.27%] left-[50.73%] leading-[28px] [-webkit-text-stroke:1px_#fff]">
          Booking Summary
        </b>
        <b className="absolute top-[31.49%] left-[50.73%] leading-[28px] [-webkit-text-stroke:1px_#fff]">
          Customise Your Quote
        </b>
        <div className="absolute h-[2.71%] w-[9.08%] top-[17.49%] right-[5.93%] bottom-[79.8%] left-[84.99%] text-xs">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <div className="absolute top-[12.5%] left-[25.81%] leading-[20px] font-medium">
              Download Quote
            </div>
            <img
              className="absolute h-full w-[19.35%] top-[0%] right-[80.65%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/download.svg"
            />
          </div>
        </div>
        <div className="absolute top-[26.64%] left-[5.93%] text-sm leading-[22px] whitespace-pre-wrap [-webkit-text-stroke:1px_#fff]">
          <p className="m-0">{`Dealer    `}</p>
          <p className="m-0">
            <b>
              Randhawa Motors (A Div Of Randhawa Automobile Engineering Pvt
              Ltd), 412115
            </b>
          </p>
        </div>
        <img
          className="absolute top-[298px] left-[96px] w-[511px] h-[343px] object-cover"
          alt=""
          src="/image-7@2x.png"
        />
        <BackSection />
        <b className="absolute top-[17.27%] left-[5.93%] text-7xl leading-[34px] [-webkit-text-stroke:1px_#fff]">
          XUV700
        </b>
        <b className="absolute top-[21.67%] left-[5.93%] leading-[28px] [-webkit-text-stroke:1px_#fff]">
          W8 • Diesel • Automatic • Sunburst Orange
        </b>
        <div className="absolute top-[195px] left-[693px] rounded-3xs bg-color-cards w-[592px] h-16" />
        <img
          className="absolute top-[210px] left-[709px] w-[34px] h-[34px]"
          alt=""
          src="/icosummary.svg"
        />
        <div className="absolute top-[561px] left-[693px] rounded-3xs bg-color-cards w-[592px] h-16" />
        <div className="absolute top-[641px] left-[693px] rounded-3xs bg-color-cards w-[592px] h-16" />
        <img
          className="absolute top-[215px] left-[1241px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icondropdown.svg"
        />
        <img
          className="absolute top-[581px] left-[1241px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icondropdown1.svg"
        />
        <img
          className="absolute top-[661px] left-[1241px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icondropdown1.svg"
        />
        <b className="absolute top-[24.15%] left-[55.27%] text-lg leading-[26px]">
          ₹11 90 000.00*
        </b>
        <b className="absolute top-[65.46%] left-[55.27%] text-lg leading-[26px]">
          Add-Ons
        </b>
        <b className="absolute top-[74.49%] left-[55.27%] text-lg leading-[26px]">
          Exclusive Benefits
        </b>
        <div className="absolute top-[24.49%] left-[64.86%] text-xs leading-[20px]">
          Ex-Showroom Pune
        </div>
        <img
          className="absolute h-[1.58%] w-[1.02%] top-[75.17%] right-[32.36%] bottom-[23.25%] left-[66.62%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/success.svg"
        />
        <img
          className="absolute h-[1.58%] w-[1.02%] top-[66.14%] right-[37.7%] bottom-[32.28%] left-[61.27%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/success.svg"
        />
        <b className="absolute top-[82.28%] left-[5.93%] text-xs leading-[20px]">
          Disclaimer:
        </b>
        <div className="absolute top-[82.28%] left-[10.54%]">
          <p className="m-0">
            <span className="text-xs leading-[20px]">{`*Cancellation charges to the tune of 10% of the Booking amount will be applicable on each `}</span>
          </p>
          <p className="m-0">
            <span className="text-xs leading-[20px]">
              and every cancellation (except Scorpio-N bookings). The Waiting
              Period For Your Selected
            </span>
          </p>
          <p className="m-0">
            <span className="text-xs leading-[20px]">
              {" "}
              Variant Is 4-6 Weeks
            </span>
            <span className="text-sm leading-[22px]">{` `}</span>
            <span className="text-xs [text-decoration:underline] leading-[20px]">
              Read More
            </span>
          </p>
        </div>
        <AvailContainer
          accessoryFinanceText="Accessories"
          accessoryFinanceImageUrl="/icoaccessories.svg"
        />
        <AvailContainer
          accessoryFinanceText="Finance Your Vehicle"
          accessoryFinanceImageUrl="/icofinance.svg"
          propTop="321px"
        />
        <AvailContainer
          accessoryFinanceText="Get Insurance Quote"
          accessoryFinanceImageUrl="/icosummary1.svg"
          propTop="401px"
        />
        <img
          className="absolute top-[576px] left-[709px] w-[34px] h-[34px]"
          alt=""
          src="/icoaddons.svg"
        />
        <div className="absolute top-[656px] left-[709px] w-[34px] h-[34px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
          <img
            className="absolute h-[76.59%] w-[80.41%] top-[7.8%] right-[9.8%] bottom-[15.61%] left-[9.8%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/star-2-stroke.svg"
          />
        </div>
        <div className="absolute top-[87.5px] left-[523px] w-80 flex flex-row items-center justify-center text-center text-3xs">
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
          <div className="flex flex-col items-center justify-end gap-[5px]">
            <div className="relative leading-[14px] flex items-end justify-center w-[50px]">
              DEALER
            </div>
            <div className="w-[50px] h-[22px] flex flex-row items-center justify-center">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-secondary-grey-3" />
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
          <div className="w-[50px] flex flex-col items-center justify-end gap-[5px] text-colors-primary-red">
            <div className="relative leading-[14px]">BOOK</div>
            <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
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
                <div className="self-stretch relative h-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1.5px] left-[0px] bg-color-base w-[1366px] h-[885px] opacity-[0.9]" />
      <OTPContainer />
    </div>
  );
};

export default DesktopOwnOnlineFinanceSum;

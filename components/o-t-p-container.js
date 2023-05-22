import { useCallback } from "react";
import { useRouter } from "next/router";

const OTPContainer = () => {
  const router = useRouter();

  const onCloseNewClick = useCallback(() => {
    router.push("/desktop-own-online-finance-dea");
  }, [router]);

  return (
    <div className="absolute top-[316.5px] left-[489px] w-[388px] h-[254px] text-left text-xs text-colors-primary-white font-typography-button-large">
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-color-cards w-[388px] h-[254px]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[17.32%] w-[39.95%] top-[74.8%] right-[30.15%] bottom-[7.87%] left-[29.9%]">
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
        <b className="absolute top-[22.73%] left-[23.23%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-center">
          Send OTP
        </b>
      </button>
      <b className="absolute top-[7.87%] left-[5.15%] text-xl leading-[28px]">
        Enter Your Mobile Number
      </b>
      <div className="absolute top-[25.2%] left-[5.15%] leading-[20px] font-medium text-colors-primary-red">
        <span>*</span>
        <span className="text-colors-primary-white">Mandatory fields</span>
      </div>
      <div className="absolute top-[61.42%] left-[4.9%] leading-[20px] text-colors-secondary-grey-4">
        Enter your 10 digit mobile number and click below to continue
      </div>
      <div className="absolute top-[96px] left-[20px] rounded-3xs bg-colors-light-background w-[348px] h-[52px]" />
      <div className="absolute top-[44.09%] left-[9.02%] leading-[20px] font-medium text-colors-secondary-grey-3">
        <span>Enter Mobile Number</span>
        <span className="text-colors-primary-red">*</span>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[9.45%] w-[6.19%] top-[7.87%] right-[5.15%] bottom-[82.68%] left-[88.66%]"
        onClick={onCloseNewClick}
      >
        <img
          className="absolute h-full w-full top-[1402.08%] right-[-3470.83%] bottom-[-1402.08%] left-[3470.83%] max-w-full overflow-hidden max-h-full"
          alt=""
        />
        <img
          className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/closenew.svg"
        />
      </button>
    </div>
  );
};

export default OTPContainer;

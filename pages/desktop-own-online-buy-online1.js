import { useCallback } from "react";
import { useRouter } from "next/router";
import MainHeader from "../components/main-header";
import VehicleSelectContainer from "../components/vehicle-select-container";
import XUV700Container from "../components/x-u-v700-container";

const DesktopOwnOnlineBuyOnline11 = () => {
  const router = useRouter();

  const onOutlineButtonClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onOutlineButton1Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onOutlineButton2Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  return (
    <div className="relative bg-color-base w-full h-[1004px] text-center text-3xs text-colors-primary-white font-typography-button-large">
      <div className="absolute top-[0px] left-[calc(50%_-_680px)] flex flex-col items-center justify-start">
        <MainHeader
          productId="/vector41.svg"
          productDimensions="/iconmenu21.svg"
          logoWidth="unset"
          logoAlignSelf="stretch"
        />
        <div className="bg-color-base flex flex-col py-5 px-[78px] items-center justify-start gap-[19px]">
          <div className="flex flex-col p-1 items-start justify-start">
            <div className="w-80 flex flex-row items-center justify-center">
              <div className="w-[50px] flex flex-col items-center justify-end gap-[5px] text-colors-primary-red">
                <div className="self-stretch relative leading-[14px]">
                  VEHICLE
                </div>
                <div className="self-stretch h-[22px] flex flex-row items-center justify-center">
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                    <div className="self-stretch relative h-0" />
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <img
                      className="relative w-[22px] h-[22px]"
                      alt=""
                      src="/group-41.svg"
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
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/ellipse-2101.svg"
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
                    <img
                      className="relative w-4 h-4"
                      alt=""
                      src="/ellipse-2101.svg"
                    />
                  </div>
                  <div className="self-stretch flex-1 flex flex-col py-2.5 px-0 items-center justify-center">
                    <div className="self-stretch relative h-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1204px] flex flex-row items-center justify-start gap-[3px] text-left text-xs text-colors-primary-red">
            <div className="relative leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
              <span>*</span>
              <span className="text-colors-primary-white">
                Ex-showroom price:
              </span>
            </div>
            <div className="relative leading-[20px] font-medium text-colors-primary-white [-webkit-text-stroke:1px_#fff]">
              Pune
            </div>
            <img className="relative w-4 h-4" alt="" src="/edit2.svg" />
          </div>
          <div className="flex flex-row items-start justify-start text-lg">
            <div className="flex flex-row py-0 px-8 items-center justify-center relative gap-[2px]">
              <b className="relative leading-[26px] z-[0]">SUVs</b>
              <div className="absolute my-0 mx-[!important] w-[calc(100%_+_2px)] top-[27px] right-[-1px] left-[-1px] box-border h-0.5 z-[1] border-t-[2px] border-solid border-colors-primary-red" />
            </div>
            <div className="flex flex-row py-0 px-8 items-center justify-center relative gap-[2px]">
              <div className="relative leading-[26px] z-[0]">Pick-Ups</div>
              <div className="absolute my-0 mx-[!important] w-[calc(100%_+_1px)] top-[27px] right-[0px] left-[-1px] box-border h-0.5 opacity-[0.2] z-[1] border-t-[2px] border-solid border-colors-primary-red" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[20px] text-left text-7xl">
            <b className="relative leading-[34px] [-webkit-text-stroke:1px_#fff]">
              Select Vehicle
            </b>
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <VehicleSelectContainer
                  onOutlineButtonClick={onOutlineButtonClick}
                />
                <VehicleSelectContainer
                  onOutlineButtonClick={onOutlineButton1Click}
                />
                <VehicleSelectContainer
                  onOutlineButtonClick={onOutlineButton2Click}
                />
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <XUV700Container />
                <XUV700Container />
                <XUV700Container />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopOwnOnlineBuyOnline11;

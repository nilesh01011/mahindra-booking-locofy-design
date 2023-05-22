import { useMemo } from "react";

const FuelContainer = ({
  fuelType,
  transmissionType,
  fuelTypeDiesel,
  propAlignSelf,
  propWidth,
}) => {
  const petrolStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className="flex-1 rounded-3xs bg-color-cards flex flex-col pt-1 px-0 pb-0 items-center justify-start gap-[4px] text-center text-base text-colors-primary-white font-typography-button-large">
      <b className="relative leading-[24px]">{fuelType}</b>
      <div className="rounded-t-none rounded-b-3xs bg-color-cards flex flex-col p-2 items-start justify-start gap-[8px] border-t-[1px] border-solid border-colors-secondary-grey-3">
        <div
          className="self-stretch rounded-2xl bg-colors-light-background h-8 flex flex-row p-1 box-border items-start justify-center"
          style={petrolStyle}
        >
          <div className="relative leading-[24px] [-webkit-text-stroke:1px_#0b0b0c]">
            {transmissionType}
          </div>
        </div>
        <div className="rounded-2xl box-border w-[168px] h-8 flex flex-row p-1 items-start justify-center border-[1px] border-solid border-colors-light-background">
          <div className="relative leading-[24px] [-webkit-text-stroke:1px_#fff]">
            {fuelTypeDiesel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelContainer;

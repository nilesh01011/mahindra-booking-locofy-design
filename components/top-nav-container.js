import { useMemo } from "react";

const TopNavContainer = ({
  serialNumber,
  productCode,
  iconMenuBackgroundColor,
}) => {
  const topNavStyle = useMemo(() => {
    return {
      backgroundColor: iconMenuBackgroundColor,
    };
  }, [iconMenuBackgroundColor]);

  return (
    <div
      className="absolute top-[0px] left-[0px] bg-gray w-[1366px] h-16 flex flex-row py-4 px-[81px] box-border items-center justify-start gap-[20px] text-right text-xs text-colors-primary-white font-typography-button-large"
      style={topNavStyle}
    >
      <img
        className="relative w-[102px] h-3 overflow-hidden shrink-0"
        alt=""
        src={serialNumber}
      />
      <div className="relative leading-[20px] font-medium inline-block w-[1032px] h-5 shrink-0">
        Buy Online
      </div>
      <img className="relative w-8 h-8" alt="" src={productCode} />
    </div>
  );
};

export default TopNavContainer;

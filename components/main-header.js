import { useMemo } from "react";

const MainHeader = ({
  productId,
  productDimensions,
  logoWidth,
  logoAlignSelf,
}) => {
  const topNav1Style = useMemo(() => {
    return {
      width: logoWidth,
      alignSelf: logoAlignSelf,
    };
  }, [logoWidth, logoAlignSelf]);

  return (
    <div
      className="bg-color-cards w-[1360px] h-16 flex flex-row py-4 px-[81px] box-border items-center justify-start text-right text-xs text-colors-primary-white font-typography-button-large lg:items-center lg:justify-center lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-[30px] md:pr-[30px] md:box-border sm:pl-5 sm:pr-5 sm:box-border"
      style={topNav1Style}
    >
      <div className="flex-1 flex flex-row items-center justify-between">
        <div className="overflow-hidden flex flex-col items-start justify-center">
          <img
            className="relative w-[101.92px] h-[11.91px]"
            alt=""
            src={productId}
          />
        </div>
        <div className="w-[111px] flex flex-row items-center justify-between">
          <div className="relative leading-[20px] font-medium">Buy Online</div>
          <img className="relative w-8 h-8" alt="" src={productDimensions} />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

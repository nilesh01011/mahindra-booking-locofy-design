const LeftXUV700Container = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[30px] text-left text-xs text-colors-primary-red font-typography-button-large">
      <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
        <div className="self-stretch flex flex-row items-center justify-start gap-[3px]">
          <div className="flex flex-row items-start justify-start gap-[2px]">
            <div className="relative leading-[20px] font-medium [-webkit-text-stroke:1px_#fff]">
              <span>*</span>
              <span className="text-colors-primary-white">
                Ex-showroom price:
              </span>
            </div>
            <div className="relative leading-[20px] font-medium text-colors-primary-white [-webkit-text-stroke:1px_#fff]">
              Pune
            </div>
          </div>
          <img className="relative w-4 h-4" alt="" src="/iconedit.svg" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[110px] text-7xl text-colors-primary-white">
          <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
            <b className="self-stretch relative leading-[34px] [-webkit-text-stroke:1px_#fff]">
              XUV700
            </b>
            <b className="self-stretch relative text-xl leading-[28px] hidden [-webkit-text-stroke:1px_#fff]">
              W8 • Diesel • Automatic • Sunburst Orange
            </b>
          </div>
          <img
            className="relative w-10 h-[36.77px]"
            alt=""
            src="/icon360.svg"
          />
        </div>
      </div>
      <div className="w-[540px] h-[349px] overflow-hidden shrink-0 flex flex-col py-[3px] px-0 box-border items-start justify-start sm:w-[340px] sm:h-[216px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover sm:w-[340px] sm:h-[216px]"
          alt=""
          src="/xuv700@2x.png"
        />
      </div>
      <div className="relative [text-decoration:underline] leading-[20px] font-medium text-colors-primary-white">
        *See Disclaimers
      </div>
    </div>
  );
};

export default LeftXUV700Container;

import { useMemo } from "react";

const AvailContainer = ({
  accessoryFinanceText,
  accessoryFinanceImageUrl,
  propTop,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[481px] left-[693px] w-[592px] h-16 text-left text-base text-colors-primary-white font-source-sans-pro"
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-color-cards w-[592px] h-16" />
      <div className="absolute h-[68.75%] w-[26.18%] top-[15.63%] right-[3.38%] bottom-[15.63%] left-[70.44%]">
        <img
          className="absolute h-[101.15%] w-[95.96%] top-[-0.01%] right-[4.43%] bottom-[-1.14%] left-[-0.4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-48222.svg"
        />
        <img
          className="absolute h-[99.7%] w-[6.41%] top-[-0.41%] right-[-0.63%] bottom-[0.71%] left-[94.22%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/line-1701.svg"
        />
        <b className="absolute h-[51.69%] w-[22.51%] top-[24.72%] left-[36.98%] inline-block">
          Avail
        </b>
      </div>
      <b className="absolute top-[29.69%] left-[10.47%] text-lg leading-[26px] font-typography-button-large">
        {accessoryFinanceText}
      </b>
      <img
        className="absolute top-[15px] left-[16px] w-[34px] h-[34px]"
        alt=""
        src={accessoryFinanceImageUrl}
      />
    </div>
  );
};

export default AvailContainer;

import { useMemo } from "react";

const GrFloorContainer = ({ propTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[539px] left-[693px] w-[592px] h-[136px] text-left text-base text-colors-primary-white font-typography-button-large"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-color-cards w-[592px] h-[136px]" />
      <b className="absolute top-[11.76%] left-[8.45%] text-lg leading-[26px] [-webkit-text-stroke:1px_#fff]">{`Randhawa Motors `}</b>
      <div className="absolute w-[82.77%] top-[52.94%] left-[8.45%] leading-[24px] inline-block [-webkit-text-stroke:1px_#fff]">
        Gr. Floor, Jaswant Landmark, Mehra Compound, Opp Basant Park, Near
        Hanuman Temple, 400070
      </div>
      <b className="absolute top-[32.35%] left-[8.45%] leading-[24px] [-webkit-text-stroke:1px_#fff]">
        LBS Marg, 400070
      </b>
      <img
        className="absolute h-[13.24%] w-[3.04%] top-[14.71%] right-[2.2%] bottom-[72.06%] left-[94.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/view-in-maps2.svg"
      />
      <img
        className="absolute h-[13.24%] w-[3.04%] top-[14.71%] right-[94.26%] bottom-[72.06%] left-[2.7%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector3.svg"
      />
    </div>
  );
};

export default GrFloorContainer;

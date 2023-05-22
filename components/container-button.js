import { useCallback } from "react";
import { useRouter } from "next/router";

const ContainerButton = () => {
  const router = useRouter();

  const onOutlineButton2Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  const onOutlineButton3Click = useCallback(() => {
    router.push("/desktop-own-online-buy-online");
  }, [router]);

  const onCloseNewClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online2");
  }, [router]);

  return (
    <div className="absolute top-[248px] left-[489px] w-[388px] h-[272px] text-center text-xl text-colors-primary-white font-typography-button-large">
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-color-cards w-[388px] h-[272px]" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[16.18%] w-[42.27%] top-[69.12%] right-[52.58%] bottom-[14.71%] left-[5.15%]"
        onClick={onOutlineButton2Click}
      >
        <img
          className="absolute h-[102.27%] w-[96.47%] top-[-1.14%] right-[3.9%] bottom-[-1.14%] left-[-0.37%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-48225.svg"
        />
        <img
          className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/line-1702.svg"
        />
        <b className="absolute top-[22.73%] left-[43.29%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-center">
          No
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[16.18%] w-[42.27%] top-[69.12%] right-[5.15%] bottom-[14.71%] left-[52.58%]"
        onClick={onOutlineButton3Click}
      >
        <img
          className="absolute h-full w-[95.73%] top-[0%] right-[4.27%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/path-48226.svg"
        />
        <img
          className="absolute h-[100.81%] w-[6.08%] top-[-0.41%] right-[-0.6%] bottom-[-0.41%] left-[94.52%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/line-1702.svg"
        />
        <b className="absolute top-[22.73%] left-[28.66%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-center">
          Continue
        </b>
      </button>
      <b className="absolute top-[17.65%] left-[14.18%] leading-[28px]">
        <p className="m-0">Do you want to go ahead with a</p>
        <p className="m-0">new model selection?</p>
      </b>
      <div className="absolute top-[41.18%] left-[12.11%] text-base leading-[24px]">
        <p className="m-0">{`Existing selection will be lost, if you make `}</p>
        <p className="m-0">a new selection.</p>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[8.82%] w-[6.19%] top-[7.35%] right-[5.15%] bottom-[83.82%] left-[88.66%]"
        onClick={onCloseNewClick}
      >
        <img
          className="absolute h-full w-full top-[1116.67%] right-[-3470.83%] bottom-[-1116.67%] left-[3470.83%] max-w-full overflow-hidden max-h-full"
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

export default ContainerButton;

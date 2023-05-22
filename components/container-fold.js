import { useCallback } from "react";
import { useRouter } from "next/router";

const ContainerFold = () => {
  const router = useRouter();

  const onBookNowClick = useCallback(() => {
    router.push("/desktop-own-online-buy-online1");
  }, [router]);

  return (
    <div className="self-stretch [background:linear-gradient(180deg,_#110820,_#503273_40.63%,_#1a0333_89.07%)] overflow-hidden flex flex-col py-[72px] px-[78px] items-center justify-start text-left text-29xl text-colors-primary-white font-typography-button-large sm:pl-[78px] sm:box-border">
      <div className="self-stretch flex flex-row items-center justify-between md:flex-col">
        <img
          className="relative w-[598px] h-auto object-cover sm:w-80"
          alt=""
          src="/car111-1@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[36px] md:flex-col md:items-center md:justify-center">
          <b className="flex-1 relative tracking-[-0.25px] leading-[74px] uppercase inline-block w-[577px] md:text-13xl md:leading-[48px] md:text-center md:w-[900px] md:flex-1 sm:text-5xl sm:leading-[36px] sm:text-center sm:w-[330px] sm:flex-1">
            Mahindra Further deLights custormers
          </b>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[205.5px] h-[50px] flex flex-row items-center justify-start"
            onClick={onBookNowClick}
          >
            <a className="[text-decoration:none] relative w-[198px] h-[49.5px]">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/outline.svg"
              />
              <b className="absolute top-[26.26%] left-[30.3%] text-base tracking-[0.5px] leading-[24px] font-typography-button-large text-colors-primary-white text-left">
                Book Now
              </b>
            </a>
            <img
              className="relative w-[9.97px] h-[49.82px]"
              alt=""
              src="/line.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerFold;

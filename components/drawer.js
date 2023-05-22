import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Drawer = ({ onClose }) => {
  const router = useRouter();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onIconCloseClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className="relative [background:linear-gradient(rgba(11,_11,_12,_0.9),_rgba(11,_11,_12,_0.9)),_linear-gradient(rgba(11,_11,_12,_0.9),_rgba(11,_11,_12,_0.9)),_#0b0b0c] w-[360px] h-full overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] max-w-[90%] text-left text-base text-colors-primary-white font-typography-button-large"
      data-animate-on-scroll
    >
      <div className="absolute top-[87px] left-[30px] h-[480px] flex flex-col items-start justify-between">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px]">Test Drive</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px]">Locate Us</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px]">Search</div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px]">Login</div>
          </div>
        </div>
        <img className="relative w-[102px] h-[15px]" alt="" src="/logo21.svg" />
      </div>
      <img
        className="absolute top-[20px] left-[308px] w-8 h-8 cursor-pointer"
        alt=""
        src="/iconclose.svg"
        onClick={onIconCloseClick}
      />
    </div>
  );
};

export default Drawer;

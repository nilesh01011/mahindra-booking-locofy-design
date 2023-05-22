import { useState, useCallback } from "react";
import Drawer from "./drawer";
import PortalDrawer from "./portal-drawer";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <header className="self-stretch bg-color-base shadow-[0px_6px_4px_rgba(197,_197,_197,_0.5)] box-border h-[98px] flex flex-row py-5 px-[78px] items-center justify-center text-left text-base text-colors-primary-white font-typography-button-large border-t-[1px] border-solid border-colors-secondary-grey-3 lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-[30px] md:pr-[30px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="flex-1 h-[58px] flex flex-row items-center justify-between lg:flex-row md:flex-row md:gap-[100px] sm:flex-row">
          <div className="flex flex-col items-start justify-center">
            <img
              className="relative w-[100px] h-[57.21px] overflow-hidden shrink-0"
              alt=""
              src="/24-1.svg"
            />
          </div>
          <div className="w-[515px] flex flex-row items-center justify-between md:hidden sm:flex-col sm:gap-[100px] sm:items-start sm:justify-center">
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
            <img
              className="relative w-[102px] h-[15px]"
              alt=""
              src="/logo3.svg"
            />
          </div>
          <img
            className="relative w-8 h-8 hidden cursor-pointer md:flex"
            alt=""
            src="/iconmenu3.svg"
            onClick={openDrawer}
          />
        </div>
      </header>
      {isDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawer}
        >
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Header;

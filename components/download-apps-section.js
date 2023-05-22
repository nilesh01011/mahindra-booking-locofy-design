const DownloadAppsSection = () => {
  return (
    <div className="self-stretch bg-color-base flex flex-col p-[78px] items-start justify-start text-left text-lg text-colors-primary-white font-typography-button-large border-t-[1px] border-solid border-colors-secondary-grey-3 lg:pl-[60px] lg:pr-[60px] lg:box-border md:pl-[30px] md:pr-[30px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
      <div className="self-stretch flex flex-row items-start justify-between lg:flex-row md:flex-col md:gap-[100px]">
        <div className="flex flex-col items-start justify-center gap-[24px]">
          <div className="flex flex-row items-start justify-start gap-[14px]">
            <img className="relative w-6 h-6" alt="" src="/fb.svg" />
            <img className="relative w-6 h-6" alt="" src="/group-4892.svg" />
            <img className="relative w-6 h-6" alt="" src="/linkedin.svg" />
            <img className="relative w-6 h-6" alt="" src="/youtube.svg" />
            <img className="relative w-6 h-6" alt="" src="/insta.svg" />
          </div>
          <b className="relative">Download Apps</b>
        </div>
        <div className="w-[781px] flex flex-row items-start justify-between text-sm sm:flex-col sm:gap-[100px] sm:items-start sm:justify-center">
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <b className="relative">Mahindra Auto</b>
            <div className="relative">About Company</div>
            <div className="relative">Global Presence</div>
            <div className="relative">Our Heritage</div>
            <div className="relative">Design @Mahindra</div>
            <div className="relative">{`CSR & Sustainability`}</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <b className="relative">Newsroom</b>
            <div className="relative">View Events</div>
            <div className="relative">Articles / Blogs</div>
            <div className="relative">{`News & Media`}</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <b className="relative">Media Relations</b>
            <div className="relative">Media Kit</div>
            <div className="relative">Press Releases</div>
            <div className="relative">Key Contacts</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px] font-source-sans-pro">
            <div className="relative font-semibold">Investor Relations</div>
            <div className="relative">Overview</div>
            <div className="relative">Performance Highlights</div>
            <div className="relative">{`Reports & Filings`}</div>
            <div className="relative">Directors</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppsSection;

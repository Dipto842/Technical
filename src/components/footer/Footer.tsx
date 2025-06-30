const Footer = () => {
  return (
    <div className="bg-[#141414] lg:h-[600px] text-center lg:text-left text-white lg:w-[1410px] rounded-[40px] mx-auto mt-12 px-4 py-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 pt-10">
          <h1 className="text-2xl text-[#C5FF41]">devlop.me</h1>
          <h1 className="text-3xl lg:text-4xl">As You Can</h1>
        </div>

        {/* Footer Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 justify-center lg:ml-[700px]">
          {/* Say Hello */}
          <div>
            <div className="mb-9">
              <h1 className="text-[#757575] mb-3">Say hello</h1>
              <p className="text-[14px] mb-1">HELLO@DEVLOP.ME.COM</p>
              <p className="text-[14px]">MAHBUBUL@ME.COM</p>
            </div>
            <div>
              <h1 className="text-[#757575] mb-3">Call</h1>
              <p className="text-[14px]">
                +784549 4981 00
                <br />
                +8845 0100 211
              </p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h1 className="text-[#757575] mb-3">Menu</h1>
            <p className="text-[14px] mb-1">HOME</p>
            <p className="text-[14px] mb-1">ABOUT</p>
            <p className="text-[14px] mb-1">PORTFOLIO</p>
            <p className="text-[14px] mb-1">BLOG</p>
          </div>

          {/* Social */}
          <div>
            <h1 className="text-[#757575] mb-3">Social</h1>
            <p className="text-[14px] mb-1">TWITTER</p>
            <p className="text-[14px] mb-1">INSTAGRAM</p>
            <p className="text-[14px] mb-1">FACEBOOK</p>
            <p className="text-[14px] mb-1">BEHANCE</p>
            <p className="text-[14px] mb-1">DRIBBBLE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

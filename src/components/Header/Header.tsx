import { HeaderContentMobile } from "./HeaderContentMobile/HeaderContentMobile";
import { HeaderContentDesktop } from "./HeaderContentDesktop/HeaderContentDesktop";

export function Header() {
  return (
    <header className="container-layout fixed top-0 right-0 left-0 z-40">
      <div className="relative bg-background/85 my-[8px] tablet:my-[16px] shadow-[0_0_16px_8px_#00000014] backdrop-blur-[64px] rounded-[32px] py-[8px] tablet:py-[12px] max-tablet:px-[16px] tablet:pl-[20px] tablet:pr-[12px] items-center">
        <HeaderContentDesktop />
        <HeaderContentMobile />
      </div>
    </header>
  );
}

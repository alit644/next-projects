import Logo from "./Logo";
import { Nav } from "./nav";
import { ModeToggle } from "./toggle-mode";
import SearchInput from "./SearchInput";
import MobilNav from "./MobilNav";

const Header = () => {
  return (
    <div className="bg-[#181D24] flex items-center justify-between p-4 rounded-b-xl">
      <Logo />
      <Nav />
      <div className="flex items-center gap-2">
        <SearchInput />
        <ModeToggle />
        <MobilNav />
      </div>
    </div>
  );
};

export default Header;

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const MobilNav = () => {
  return (
    <div className="md:hidden">
      <Drawer direction="right" >
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="w-4 h-4 " />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="w-full">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobilNav;

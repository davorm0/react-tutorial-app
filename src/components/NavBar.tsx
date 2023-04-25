import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
  searchText: string;
  onSearch: (searchValue: string) => void;
}

const NavBar = ({ searchText, onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <Search searchText={searchText} onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

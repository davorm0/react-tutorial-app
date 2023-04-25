import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrderBy: string;
  onSelectOrderBy: (orderBy: string) => void;
}

const SortSelector = ({ selectedOrderBy, onSelectOrderBy }: Props) => {
  const orderByMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By:{" "}
        {orderByMap.find((o) => o.value === selectedOrderBy)?.label ??
          "Relevance"}
      </MenuButton>
      <MenuList>
        {orderByMap.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectOrderBy(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

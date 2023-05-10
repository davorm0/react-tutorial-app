import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const orderByMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedOrderBy = useGameQueryStore((g) => g.gameQuery.orderBy);
  const selectOrderBy = useGameQueryStore((g) => g.setOrderBy);

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
            onClick={() => selectOrderBy(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

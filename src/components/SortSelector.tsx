import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

export const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-created", label: "Creation date" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const selectSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectSortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} fontSize="sm" rightIcon={<BsChevronDown />}>
        Order by :<br /> {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

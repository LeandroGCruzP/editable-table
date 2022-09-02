import { IconButton, Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { IconChevronDown, IconDelete, IconPencil } from "../assets/icons"

export const Menu = () => {
  return(
  <ChakraMenu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<IconChevronDown fontSize='1.3rem' />}
      variant='outline'
    />

    <MenuList>
      <MenuItem icon={<IconPencil fontSize='1.3rem' />}>
        Edit
      </MenuItem>
      <MenuItem icon={<IconDelete fontSize='1.3rem' />}>
        Delete
      </MenuItem>
    </MenuList>
  </ChakraMenu>
  )
}

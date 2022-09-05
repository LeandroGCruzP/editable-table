import { IconButton, Menu as ChakraMenu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { Icons } from "../assets/icons"

export const Menu = () => {
  return(
  <ChakraMenu>
    <MenuButton
      as={IconButton}
      aria-label='Options'
      icon={<Icons.ChevronDown fontSize='1.3rem' />}
      variant='outline'
    />

    <MenuList>
      <MenuItem icon={<Icons.Pencil fontSize='1.3rem' />}>
        Edit
      </MenuItem>
      <MenuItem icon={<Icons.Delete fontSize='1.3rem' />}>
        Delete
      </MenuItem>
    </MenuList>
  </ChakraMenu>
  )
}

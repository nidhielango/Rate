import { ChevronDownIcon } from '@chakra-ui/icons';
import { Text, Menu, MenuButton, MenuList, Flex, Icon} from '@chakra-ui/react';
import { TiHome } from "react-icons/ti";
import Companies from './Companies';

const  UserMenu:React.FC = () => {
    return (
        <Menu isOpen={false} >
            <MenuButton cursor="pointer"
                padding="0px 6px"
                borderRadius="4px"
                mr={2}
                ml={{base:0,md:2}}
                _hover={{ outline: "1px solid", outlineColor: "gray.200" }}>
                <Flex align="center" justify="space-between" width={{base: "auto", lg: "200px"}}>
                <Flex align="center">
                    <Icon fontSize={24} mr={{base:1, md: 2}} as={TiHome}/>
                    <Flex display={{base: "none", lg: "flex"}}> <Text fontWeight={600} fontSize="10pt">Home</Text> </Flex>
                </Flex>
                <ChevronDownIcon/>
                </Flex>
            </MenuButton>
            <MenuList>
                <Companies/>
            </MenuList>
        </Menu>
    )
}
export default UserMenu;
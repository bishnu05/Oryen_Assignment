
import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Button,
  ListIcon,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  
} from 'react-icons/fi';
import {FaExchangeAlt,} from 'react-icons/fa';
import {BsFillCalculatorFill} from "react-icons/bs";
import {RiAccountPinBoxFill} from "react-icons/ri";
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import {AiFillContacts} from 'react-icons/ai';
import { Home } from './Home';
import {FcDocument} from "react-icons/fc";
import {FcFaq} from 'react-icons/fc';
interface LinkItemProps {
  name: string;
  icon: IconType;
}

const dashboard =[
  {
    name:"Marketcap",
    price: "$11.97M",
  },
  {
    name:"Circulating Supply",
    price: "38.35B",
  },
  {
    name:"Holders",
    price: "82K",
  },
  {
    name:"Oryen Price",
    price: "$0.0003",
  }
]

const mydata=[
  {
    name:"Fixed APY",
    price: "102483.58%",
    title:"A Simple Buy-Hold_Earn System",
    img:"oryen/circle.png",
  }
]
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiHome },
  { name: 'Exchange', icon: FaExchangeAlt },
  { name: 'Calculator', icon: BsFillCalculatorFill },
  { name: 'Account', icon: RiAccountPinBoxFill },
  { name: 'ABOUT'},
  { name: 'Contact', icon: AiFillContacts },
  { name: 'Community', icon: AiFillContacts },
  { name: 'Oryen Taken', icon: AiFillContacts },
  {name: "HELP"},
  { name: 'Documentation', icon: FcDocument },
  { name: 'FAQ', icon: FcFaq },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Home data={dashboard}/>
        <Flex justifyContent={"space-between"} py="4" gap="8">
          <Box w="50%" >
             <Flex justifyContent={"space-between"} border="1px solid teal" p="20px" >
              <Box>
                <Text>Liquidity</Text>
                <Text>$1.61M</Text>
              </Box>
              <Box>-0.33%</Box>
             </Flex>
          </Box>
          <Box m="auto" ml="0px" pr="12px" w="50%">
             <Flex gap="9"  justifyContent={"space-between"} border={"1px solid teal"}  p="20px" >
              <Box >
                <Text>Liquidity</Text>
                <Text>$1.61M</Text>
              </Box>
              <Box>-0.33%</Box>
             </Flex>
          </Box>
        </Flex>
        <Home data={mydata}/>
        <Flex justifyContent={"space-between"} py="4">
          <Box m="auto" ml="0px" pr="12px" w="50%">
             <Flex gap="8" border="1px solid teal" p="20px" >
              <Box >
                <Image w="5rem" src="oryen/logo_icon.png"/>
              </Box>
              <Box>
                <Box>Still got question?</Box>
              <Button color={"white"} bg="teal" mt="8px">More Details</Button>
              </Box>
             </Flex>
          </Box>
          <Box m="auto" ml="0px" pr="12px" w="50%">
             <Flex  border={"1px solid teal"}  p="50px">
              <Box >
                <Text>Connect with us</Text>
              </Box>
             </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Image src='../oryen/Oryen_Logo-01.png'/>
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="#26e2b3"
        // _hover={{
        //   bg: 'cyan.400',
        //   color: 'white',
        // }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Image w="12rem" src='../oryen/Oryen_Logo-01.png'/>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={"center"} gap="2">
          <Image src={"oryen/logo_icon.png"} w="1rem" />
          <Text>$0.003</Text>
        </Flex>
        <Flex alignItems={'center'}>
                <Button
                  size={'sm'} colorScheme="teal">
                    CONNECT WALLET
                  </Button>
        </Flex>
      </HStack>
    </Flex>
  );
};
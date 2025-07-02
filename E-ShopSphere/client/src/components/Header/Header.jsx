import { useState, useContext } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled, Switch } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { ColorModeContext } from '../../core/context/ThemeContext';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://via.placeholder.com/10x10/FF6F00/FFFFFF?text=+';

    const [open, setOpen] = useState(false);
    const { toggleColorMode } = useContext(ColorModeContext);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} alt="E-ShopSphere Logo" />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Discover&nbsp;
                            <Box component="span" style={{color:'#FFD700'}}>
                                Premium
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="Plus Icon" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
                <Switch onChange={toggleColorMode} color="default" />
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
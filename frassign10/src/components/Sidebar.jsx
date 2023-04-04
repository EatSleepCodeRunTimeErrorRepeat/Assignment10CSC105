import { List, ListItem, ListItemIcon } from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Sidebar() {

    return (
        <Box>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                        Homepage
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ArticleIcon />
                        Pages
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <GroupsIcon />
                        Groups
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <StorefrontIcon />
                        Marketplace
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                        Friends
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                        Settings
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxIcon />
                        Profile
                    </ListItemIcon>
                </ListItem>

            </List>

        </Box>

    );
}
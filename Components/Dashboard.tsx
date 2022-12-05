import {Link} from "react-router-dom"
import { AppBar, Box, Divider, Drawer, Grid, IconButton,  List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react';

type Anchor = 'left'

export default function Dashboard() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer =
        (anchor: 'left', open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
          ) {
            return;
          }
    
          setState({ ...state, [anchor]: open });
        };

        const list = (anchor: Anchor) => {
            const sectionOne = [
                {
                    name: 'Home',
                    link: '/Home',
                    key: "one",
                },               
            ]
            const sectionTwo = [
                {
                    name: "Toge",
                    link: '/Toge',
                    key: "two",
                },
                {
                  name: "Kachou Fuugetsu",
                  link: '/KachouFuugetsu',
                  key: "two",
                },
                {
                  name: "Opposite World",
                  link: '/OppositeWorld',
                  key: "two",
                },

            ]
            const sectionThree = [
              {
                name: "Memento of an Avaricious Beast",
                link: '/MementoOfAnAvariciousBeast',
                key: "three",
              },
              {
                name: "Memento of All Organisms",
                link: '/MementoOfAllOrganisms',
                key: "three",
              },
            ]
            

        return (
            <Box
              sx={{width: 250}}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {sectionOne.map((item, index) => (
                  <Link className="navigationLink" to={item.link} key={`sectionOne-${index}`}>
                    <ListItem button>
                      <ListItemIcon>
                      </ListItemIcon>
                          <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography> Song Translations </Typography>
                </ListItem>
                {sectionTwo.map((item, index) => (
                  <Link className="navigationLink" to={item.link} key={`sectionTwo-${index}`}>
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
              <Divider />
              <List>
                <ListItem>
                  <Typography> Text Translations </Typography>
                </ListItem>
                {sectionThree.map((item, index) => (
                  <Link className="navigationLink" to={item.link} key={`sectionTwo-${index}`}>
                    <ListItem>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          )};
        

  return (
    <AppBar position="sticky" className="DashboardContainer">
        <Grid container item className="DashboardButtonHolder" justifyContent="space-between">
            <Toolbar variant="dense">
                <IconButton edge="start" onClick={toggleDrawer('left', true)}
                    color="inherit" 
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Translations
                </Typography>
            </Toolbar>
            <Drawer
            anchor="left"
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            >
                {list("left")}
            </Drawer>
        </Grid>
    </AppBar>
  );
}

import React from 'react'
import MenuRoll from '../MenuRoll.js'
import Armado from '../Surveys/Armado.js'
import Garantias from '../Surveys/Garantias.js'
import NoGarantias from '../Surveys/NoGarantias.js'
import Tienda from '../Surveys/Tienda.js'
import Transporte from '../Surveys/Transporte.js'
import Transporteyarmado from '../Surveys/Transporte&Armado.js'
import Web from '../Surveys/Web.js'
import '../../StyleSheets/Surveys/Surveys.scss'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = index => {
      setValue(index)
    }

    return (
      <div>
        <MenuRoll />
      <div className={classes.root}>
        <AppBar position="static" color="default">
        <Tabs
        id="rush"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Web" {...a11yProps(0)} />
          <Tab label="Tienda" {...a11yProps(1)} />
          <Tab label="Transporte" {...a11yProps(2)} />
          <Tab label="Transporte y Armado" {...a11yProps(3)} />
          <Tab label="Armado" {...a11yProps(4)} />
          <Tab label="Garantias" {...a11yProps(5)} />
          <Tab label="NoGarantias" {...a11yProps(6)} />
        </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          >
        <TabPanel value={value} index={0}>
          <Web />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tienda />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Transporte />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Transporteyarmado />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Armado />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Garantias />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <NoGarantias />
        </TabPanel>
        </SwipeableViews>
      </div>
      </div>
    );
  }

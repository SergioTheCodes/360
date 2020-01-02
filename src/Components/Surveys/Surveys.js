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
import { makeStyles } from '@material-ui/core/styles';
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
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  
  export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
      <div>
        <MenuRoll />
      <div className={classes.root}>
        <Tabs
        id="rush"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Web" {...a11yProps(0)} />
          <Tab label="Tienda" {...a11yProps(1)} />
          <Tab label="Transporte" {...a11yProps(2)} />
          <Tab label="Transporte y Armado" {...a11yProps(3)} />
          <Tab label="Armado" {...a11yProps(4)} />
          <Tab label="Garantias" {...a11yProps(5)} />
          <Tab label="NoGarantias" {...a11yProps(6)} />
        </Tabs>
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
      </div>
      </div>
    );
  }

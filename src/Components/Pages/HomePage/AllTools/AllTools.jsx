import React from "react";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DoneIcon from '@mui/icons-material/Done';
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { AppBar, Tabs, Tab } from "@mui/material";
import FeatureImg from './../../../../assets/Images/features-img1.png'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function AllTools() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <section className="bg-[#F9FAFC] relative">
      <Box className="container">
        <SectionTitle
          title=" ابزار برای همه"
          subtitle="موارد متفاوت در ابزارها وجود دارد که می تواند نیازهای شما را برآورده نمایید"
          titleStyle="main"
        />
        <Box className="bg-white rounded-lg shadow-lg min-h-24 my-8 p-2">
          {/* Tab */}
          <Box className="w-full flex justify-evenly items-center">
            <Box className="w-full" sx={{ bgcolor: "background.paper" }}>
              <AppBar position="static" className="bg-transparent shadow-none">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
    
                  <Tab {...a11yProps(0)} className="text-zinc-800 font-extrabold text-xl opacity-100" icon={<div className="bg-purple-100 flex-center rounded-full size-20"><AnalyticsIcon className="text-purple-800 size-12"/></div>} label="داشبورد"/> 
                
              
                  <Tab {...a11yProps(1)} className="text-zinc-800 font-extrabold text-xl opacity-100" icon={<div className="bg-purple-100 flex-center rounded-full size-20"><MoveToInboxIcon className="text-purple-800 size-12"/></div>} label="صندوق ورودی"/>
                   
                  <Tab {...a11yProps(2)} className="text-zinc-800 font-extrabold text-xl opacity-100" icon={<div className="bg-purple-100 flex-center rounded-full size-20"><CalendarMonthIcon className="text-purple-800 size-12"/></div>} label=" تقویم"/>

                  <Tab {...a11yProps(3)} className="text-zinc-800 font-extrabold text-xl opacity-100" icon={<div className="bg-purple-100 flex-center rounded-full size-20"><ReceiptLongIcon className="text-purple-800 size-12"/></div>} label=" صورتحساب"/>
                  <Tab {...a11yProps(4)} className="text-zinc-800 font-extrabold text-xl opacity-100" icon={<div className="bg-purple-100 flex-center rounded-full size-20"><ReceiptLongIcon className="text-purple-800 size-12"/></div>} label=" گزارش نویسی"/>
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                <TabPanelContent title="" />
                  
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                صندوق ورودی
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                تقویم             
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                صورتحساب             
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                گزارش نویسی             
                    </TabPanel>
              </SwipeableViews>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default AllTools;

const ToolsName = ({ icon}) => {
  return (
    <Box className="flex flex-col gap-8">
      <Typography className="flex-center size-16 rounded-full bg-purple-100 text-purple-800">
        {icon}
      </Typography>
    </Box>
  );
};
export { ToolsName };


const TabPanelContent = ({title , description , liOne , liTwo , liThree , liFour , img}) => {
  return (
    <Box className="flex-between my-8">
    <Box className="flex flex-1 flex-col">
      <Typography className="font-DanaBold text-xl mb-5">{title}</Typography>
      <Typography className="text-gray-500">
      {description}
      </Typography>
        <ul className="text-gray-500 my-4">
          <li className="flex items-center gap-2">
           <DoneIcon className="text-emerald-500"/>
           <span>{liOne} </span>
          </li>
          <li className="flex items-center gap-2">
           <DoneIcon className="text-emerald-500"/>
           <span>{liTwo}  </span>
          </li>
          <li className="flex items-center gap-2">
           <DoneIcon className="text-emerald-500"/>
           <span> {liThree}  </span>
          </li>
          <li className="flex items-center gap-2">
           <DoneIcon className="text-emerald-500"/>
           <span> {liFour} </span>
          </li>
        </ul>
      </Box>
    <Box className="flex flex-1">
      <img src={img} alt="ghorbani-dev.ir" className="object-fill w-[500px] mx-auto" />
    </Box>
    </Box>
  )
}

export {TabPanelContent}
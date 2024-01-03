import React from "react";
import SectionTitle from "../../../common/SectionTitle/SectionTitle";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
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
    <section className="bg-slate-50 relative pb-24 z-20">
      <Box className="container">
        <SectionTitle
          title=" ابزار برای همه"
          subtitle="موارد متفاوت در ابزارها وجود دارد که می تواند نیازهای شما را برآورده نمایید"
          titleStyle="main"
        />
        <Box className="bg-white rounded-lg shadow-lg min-h-24 my-25 p-2">
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
                  <Tab {...a11yProps(4)} className="text-zinc-800 font-extrabold text-xl opacity-100" icon={<div className="bg-purple-100 flex-center rounded-full size-20"><StickyNote2Icon className="text-purple-800 size-12"/></div>} label=" گزارش نویسی"/>
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                <TabPanelContent title="داشبورد" description="داشبوردی با استانداردهای طراحی و کاربر پسند با دسترسی حرفه ای و کلیه امکانات مورد نیاز اولیه جهت دسترسی به امکانات وب اپلیکیشن می باشد که خواسته های شما را اجرایی می سازد" liOne="طراحی خلاقانه" liTwo="رتینا آماده" liThree=" طراحی مدرن" liFour="بازاریابی دیجیتال و نام تجاری" img={FeatureImg} />
                  
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <TabPanelContent title="صندوق ورودی" description="صندوق ورودی با استانداردهای طراحی و کاربر پسند با دسترسی حرفه ای و کلیه امکانات مورد نیاز اولیه جهت دسترسی به امکانات وب اپلیکیشن می باشد که خواسته های شما را اجرایی می سازد" liOne=" سرعت بالا" liTwo=" امنیت مناسب" liThree="  فضای ذخیره سازی" liFour="طراحی حرفه ای" img={FeatureImg} />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                <TabPanelContent title="تقویم" description="تقویم فارسی  با استانداردهای طراحی و کاربر پسند با دسترسی حرفه ای و کلیه امکانات مورد نیاز اولیه جهت دسترسی به امکانات وب اپلیکیشن می باشد که خواسته های شما را اجرایی می سازد" liOne="  فارسی شده" liTwo="  ذخیره تاریخ آینده" liThree=" ثبت قرار ملاقات" liFour="  یادآور حرفه ای" img={FeatureImg} />             
                    </TabPanel>
                    <TabPanel value={value} index={3} dir={theme.direction}>
                    <TabPanelContent title="صورتحساب" description=" صورتحساب با فونت فارسی با استانداردهای طراحی و کاربر پسند با دسترسی حرفه ای و کلیه امکانات مورد نیاز اولیه جهت دسترسی به امکانات وب اپلیکیشن می باشد که خواسته های شما را اجرایی می سازد" liOne="   انتخاب فونت" liTwo="    استاندارد پرینتر حرارتی" liThree=" تغییر قالب چاپ  " liFour="    ثبت لوگوی کسب و کار" img={FeatureImg} />   
                    </TabPanel>
                    <TabPanel value={value} index={4} dir={theme.direction}>
                    <TabPanelContent title=" گزارش نویسی  " description=" گزارش نویسی با فونت فارسی با استانداردهای طراحی و کاربر پسند با دسترسی حرفه ای و کلیه امکانات مورد نیاز اولیه جهت دسترسی به امکانات وب اپلیکیشن می باشد که خواسته های شما را اجرایی می سازد" liOne="    فونت متفاوت" liTwo="    قالب آماده گزارش  " liThree=" ورود و خروج دیتا " liFour="    تولید گزارش بر اساس نمودار "  img={FeatureImg} />                         
                    </TabPanel>
              </SwipeableViews>
            </Box>
          </Box>
        </Box>
        {/* Bubbles */}
        <div className="bubble-animate z-20">
                <div className="circle small square1"></div>
                <div className="circle small square2"></div>
                <div className="circle small square3"></div>
                <div className="circle small square4"></div>
                <div className="circle small square5"></div>
                <div className="circle medium square1"></div>
                <div className="circle medium square2"></div>
                <div className="circle medium square3"></div>
                <div className="circle medium square4"></div>
                <div className="circle medium square5"></div>
                <div className="circle large square1"></div>
                <div className="circle large square2"></div>
                <div className="circle large square3"></div>
                <div className="circle large square4"></div>
            </div>
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
        <ul className="text-gray-500 my-4 space-y-3">
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
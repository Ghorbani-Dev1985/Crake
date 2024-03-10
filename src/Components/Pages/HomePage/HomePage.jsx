import OurFeatures from "../../OurFeatures/OurFeatures";
import PanelServices from "../../PanelServices/PanelServices";
import MoreFeatures from "../../MoreFeatures/MoreFeatures";
import JoinUS from "../../JoinUS/JoinUS";
import UserCTA from "../../UserCTA/UserCTA";
import RegisterForm from "../../RegisterForm/RegisterForm";
import AllTools from "../../AllTools/AllTools";
import Counts from "../../Counts/Counts";
import UserFriendly from '../../UserFriendly/UserFriendly'
import Process from "../../Process/Process";
import PricingPlan from "../../PricingPlan/PricingPlan";
import OurCustomer from "../../OurCustomer/OurCustomer";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";


function HomePage() {
  return (
    <>
     <Header />
      <OurFeatures />
        <PanelServices />
    <MoreFeatures />
    <JoinUS />
    <UserCTA />
    <AllTools />
    <Counts />
    <UserFriendly />
    <Process />
    <PricingPlan />
    <RegisterForm />
    <OurCustomer />
    <Footer />
    </>
  );
}

export default HomePage;

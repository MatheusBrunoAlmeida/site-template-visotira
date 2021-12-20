import Banner from "../components/banner/Banner";
import BannerComponent from "../components/custom/sections/bannercomponent";
import TestimonialComponent from "../components/custom/sections/testimonialcomponent";
import VistoriaSection from "../components/custom/sections/vistoriasection";
import Find2dLocation from "../components/findLocation";
import GarantyList from "../components/garantyList";
import ListIcon from "../components/list";


export default function Teste() {
  return (
    <div>
        <Banner />
        <ListIcon />
        <VistoriaSection />
        <GarantyList />
        <TestimonialComponent />
        <Find2dLocation />
    </div>
  )
}
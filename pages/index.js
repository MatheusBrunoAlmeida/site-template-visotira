import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import Banner from "../components/banner/Banner";
import BannerComponent from "../components/custom/sections/bannercomponent";
import TestimonialComponent from "../components/custom/sections/testimonialcomponent";
import VistoriaSection from "../components/custom/sections/vistoriasection";
import Find2dLocation from "../components/findLocation";
import GarantyList from "../components/garantyList";
import ListIcon from "../components/list";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJs UI kit | Free UI kit built with bootstrap</title>
        <meta
          name="description"
          content="NextJs UI kit | Free UI kit built with bootstrap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Banner />
        <ListIcon />
        <VistoriaSection />
        <GarantyList />
        <TestimonialComponent />
        <Find2dLocation />
    </div>
  );
}

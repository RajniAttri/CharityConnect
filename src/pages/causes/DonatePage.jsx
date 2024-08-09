import React from 'react'
import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import GeneralHero from '../../components/layout/GeneralHero'
import image from "../../assets/images/Rectangle 2.png";
import DonateForm from './components/DonateForm';

function DonatePage() {
  return (
    <>

<Header  outerCircle=""></Header>

   <GeneralHero title="Causes" subTitle="Donate Form" image={image}></GeneralHero>
<DonateForm></DonateForm>
    <Footer>

    </Footer>
    </>
  )
}

export default DonatePage

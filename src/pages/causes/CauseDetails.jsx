import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../../src/components/Button";
import image from "/assets/images/Rectangle_2.png";
import Footer from "../../components/layout/Footer";
import GeneralHero from "../../components/layout/GeneralHero";
import Header from "../../components/layout/Header";
import StatisticsSection from "../../components/layout/StatisticsSection";
import { donations } from "../causes/data/data";

function CauseDetails() {
  const id = useParams().id;
  // Fetch cause data from an data store using the id parameter.
  const cause = donations.find((donation) => donation.id == id);

  return (
    <>
      <Header outerCircle=""></Header>
      <GeneralHero
        title="Causes"
        subTitle={cause?.title || "no title"}
        image={image}
      ></GeneralHero>
      <div className="flex flex-col md:flex-row  mx-6 md:mx-32   my-20 gap-10">
        <section className="flex flex-col w-full md:w-1/2 gap-5">
          <div className=" flex flex-col gap-6">
            <p className=" text-2xl md:text-3xl font-bold ">Causes Category</p>
            <div className="flex flex-row justify-between">
              <p>Water</p>
              <p>(01)</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Education </p>
              <p>(05)</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Water</p>
              <p>(01)</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Education </p>
              <p>(05)</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className=" text-2xl mb-3 md:text-3xl font-bold ">
              Urgent Causes
            </p>
            <div className="flex flex-col gap-4 w-full">
              <img src={image} alt={cause?.title} />

              <div className="p-4 flex flex-col gap-5">
                <div className="flex flex-col">
                  <p className="font-bold text-xl p-0 m-0">
                    Children education need for the change the world{" "}
                  </p>
                  <p className="m-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fugiat exercitationem quod incidunt placeat laborum.
                    Repellendus, repudiandae error, quae nam esse possimus est
                    illum, autem nisi voluptatum molestiae dolores doloremque
                    inventore.
                  </p>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="font-medium text-xl text-primary-color">
                      $1000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="font-medium text-xl text-primary-color">
                      $1000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="font-medium text-xl text-primary-color">
                      $1000
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-row justify-between ">
                  <div className="border border-primary-color py-2 px-6 h-fit">
                    {" "}
                    $20
                  </div>
                  <div className="border border-primary-color py-2 px-6 h-fit">
                    {" "}
                    $50
                  </div>
                  <div className="border border-primary-color py-2 px-6 h-fit">
                    {" "}
                    $200
                  </div>
                  <div className="border border-primary-color py-2 px-6 h-fit">
                    {" "}
                    $200
                  </div>
                  <div className="border border-primary-color  py-2 px-6 h-fit">
                    {" "}
                    Custom
                  </div>
                </div>
                <Button
                  className="flex justify-center items-center w-full"
                  type="primary-link"
                  text="Donate Now"
                  icon={<i className="fa fa-angle-right"></i>}
                  href={`/donate`}
                  style={{ width: "100%" }}
                ></Button>
              </div>
            </div>
          </div>
        </section>

        {/* right section  */}
        <section className="flex flex-col gap-6 w-full  md:w-1/2 ">
          <img src={cause?.image} alt={cause?.title} className="w-full" />
          <div>
            <p className=" text-2xl md:text-3xl font-bold ">{cause?.title}</p>
            <p>{cause?.description}</p>
          </div>
          <div>
            <p className=" text-2xl md:text-3xl font-bold ">Cause Challenge</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A eius,
              obcaecati pariatur culpa sapiente aut ratione voluptates voluptas
              officiis minima saepe dignissimos labore vel autem eveniet debitis
              repudiandae delectus inventore. Culpa accusantium amet provident
              hic quis voluptate, autem voluptatem magni quos eos quisquam omnis
              quae rem, repellendus nihil sit saepe, impedit perspiciatis.
            </p>
          </div>
          <div className="flex justify-end">
            <Button
              className="w-full"
              type="primary-link"
              text="Donate Now"
              icon={<i className="fa fa-angle-right"></i>}
              href={`/donate`}
            ></Button>
          </div>
        </section>
      </div>
      <StatisticsSection></StatisticsSection>
      <Footer></Footer>
    </>
  );
}

export default CauseDetails;

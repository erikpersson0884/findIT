import type { NextPage } from "next";
import Head from "next/head";

import CategoryList from "../components/elements/Categorylist";
import ServiceCard from "../components/views/ServiceCard";
import { Category } from "../data/category";
import { Service } from "../data/service";
import data from "../data/service.json";

const Home: NextPage = () => {
  const services: Category[] = data;

  return (
    <div>
      <Head>
        <title>FindIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {services.map((service: Category) => (
          <CategoryList services={service} key={service.category} />
        ))}
      </main>
    </div>
  );
};

export default Home;

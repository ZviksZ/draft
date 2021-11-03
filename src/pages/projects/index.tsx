import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "components/hoc/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="tw-w-full wt-h-full">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        Projects
      </div>
    </MainLayout>
  );
};

export default Home;

import React from "react";
import Layout from "../Coponents/Layouy";
import Seo from "../Coponents/Seo";

export default function No() {
  return (
    <Layout title="About us">
      <p>We are the happies sticker store.</p>
    </Layout>
  );
}
export const Head = () => <Seo title="About us" />;

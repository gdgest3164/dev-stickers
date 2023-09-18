import React from "react";
import Layout from "../../Coponents/Laouy";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProductDetail({ data }: PageProps<Queries.ProductQuery>) {
  const image = getImage(data.contentfulStickerPack?.preview?.gatsbyImageData!);
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <GatsbyImage image={image!} alt={data.contentfulStickerPack?.name!} />
      <h2>${data.contentfulStickerPack?.name}</h2>
      <h4>${data.contentfulStickerPack?.price}</h4>
    </Layout>
  );
}

export const data = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      price
      preview {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

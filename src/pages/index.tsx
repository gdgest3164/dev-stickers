import * as React from "react";
import Layout from "../Coponents/Layouy";
import Seo from "../Coponents/Seo";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { Link, PageProps, graphql } from "gatsby";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Hello World">
      <StaticImage
        height={200}
        src="https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="image test"
      />

      {data.allContentfulStickerPack.nodes.map((sticker) => (
        <article>
          <GatsbyImage image={getImage(sticker.preview?.gatsbyImageData!)!} alt={sticker.name!} />
          <Link to={`/products/${sticker.id}`}>
            <h2>{sticker.name}</h2>
            <h4>{sticker.price}</h4>
          </Link>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 300)
        }
      }
    }
  }
`;
export const Head = () => <Seo title="Home" />;

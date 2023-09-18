import * as React from "react";
import Layout from "../../Coponents/Laouy";
import Seo from "../../Coponents/Seo";
import { Link, PageProps, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        <div className="grid">
          {data.allMdx.nodes.map((file, index) => (
            <article key={index}>
              <Link to={`/blog/${file.frontmatter?.slug}`}>
                <h3>{file.frontmatter?.title}</h3>
                <h5>
                  {file.frontmatter?.author} in: {file.frontmatter?.category}
                </h5>
                <h6>{file.frontmatter?.date}</h6>
                <hr />
                <p>{file.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "YYYY.MM.DD")
          title
          slug
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;

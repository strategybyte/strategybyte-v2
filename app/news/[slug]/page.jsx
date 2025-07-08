/* eslint-disable @next/next/no-img-element */
"use client";

import client from "@/lib/contnetful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Link from "next/link";
import { useState, useEffect } from "react";

const NewsDetails = ({ params: { slug } }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "news",
          "fields.slug": slug,
          limit: 1,
        });

        const newsDetails = response.items[0];

        setContent(newsDetails.fields);
      } catch (error) {
        console.error("Error fetching privacy policy:", error);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    preserveWhitespace: true,
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p className="mb-5 text-lg text-gray-50">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <h1 className="text-5xl mb-8 text-gray-100">{children}</h1>
      ),

      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              height={600}
              width="100%"
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen={true}
              className="mb-12"
            />
          );
        }
      },

      [BLOCKS.TABLE]: (node) => {
        return (
          <table className="mb-8 w-full border border-gray-300">
            <tbody>
              {node.content.map((row, i) => (
                <tr key={i}>
                  {row.content.map((cell, j) => (
                    <td
                      key={j}
                      className="border border-gray-300 p-3 text-left align-top"
                    >
                      {documentToReactComponents(cell, options)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      },

      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="text-4xl mb-8 text-gray-100">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="text-3xl mb-8 text-gray-100">{children}</h3>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="ml-10 list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="ml-10 list-decimal">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (_node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <div>
          <img
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
            src={`https:${node.data.target.fields.file.url}`}
            alt={node.data.target.fields.title}
            className="w-full rounded-xl"
          />
          <p className="mb-10 mt-3 text-sm text-gray-400 italic text-center max-w-[90%] mx-auto">
            {node.data.target.fields.description}
          </p>
        </div>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:underline"
        >
          {children}
        </Link>
      ),
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <Link
          href={node.data.target.fields.slug}
          className="text-secondary hover:underline"
        >
          {children}
        </Link>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => (
        <Link
          href={node.data.target.fields.file.url}
          className="text-secondary hover:underline"
        >
          {children}
        </Link>
      ),
    },
  };

  return (
    <div className="container mx-auto px-4">
      <div className="!prose !px-0">
        {content ? (
          <>
            <img
              src={`https:${content.thumbnail.fields.file.url}`}
              width={1200}
              height={600}
              alt={content.title}
              className="mb-16 rounded-2xl"
            />

            <h1 className="text-5xl mb-12 text-gray-100 font-bold">
              {content.title}
            </h1>

            {documentToReactComponents(content.bodyText, options)}
          </>
        ) : (
          <div className="max-w-4xl mx-auto px-4 py-8 animate-pulse space-y-6 min-h-screen">
            {/* Banner Image */}
            <div className="w-full h-[300px] bg-muted-foreground/20 rounded-lg" />

            {/* Metadata */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-4 w-4 rounded-full bg-muted-foreground/30" />
              <div className="h-4 w-24 rounded bg-muted-foreground/30" />
            </div>

            {/* Title */}
            <div className="h-8 w-3/4 rounded bg-muted-foreground/30" />
            <div className="h-8 w-1/2 rounded bg-muted-foreground/30" />

            {/* Body Content */}
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full rounded bg-muted-foreground/20"
                />
              ))}
              <div className="h-4 w-2/3 rounded bg-muted-foreground/20" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetails;

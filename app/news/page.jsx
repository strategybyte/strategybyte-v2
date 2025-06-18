"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import client from "@/lib/contnetful";

const ITEMS_PER_PAGE = 8;

const NewsPage = () => {
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async (page = 1) => {
    setLoading(true);
    const skip = (page - 1) * ITEMS_PER_PAGE;

    try {
      const newsEntries = await client.getEntries({
        content_type: "news",
        order: "-sys.createdAt",
        limit: ITEMS_PER_PAGE,
        skip,
      });

      setContent(newsEntries?.items || []);
      setTotalItems(newsEntries?.total || 0);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-6 px-4 container mx-auto">
      <div className="space-y-2 mb-8">
        <ht className="text-3xl md:text-4xl text-white font-semibold">
          Latest News
        </ht>
        <p className="text-muted-foreground max-w-[700px]">
          Stay updated with the latest insights, trends, and announcements from
          StrategyByte
        </p>
      </div>

      {loading ? (
        <div className="grid gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="flex flex-col md:flex-row gap-6 p-4 rounded-lg border ">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-white" />
                    <div className="h-4 w-24 rounded bg-white" />
                  </div>
                  <div className="h-7 w-3/4 rounded bg-white" />
                  <div className="h-4 w-full rounded bg-white" />
                  <div className="h-4 w-5/6 rounded bg-white" />
                </div>
                <div className="md:w-1/3 h-[200px] rounded-lg overflow-hidden bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid gap-8">
            {content.map((item) => (
              <div key={item.fields.slug} className="group">
                <Link href={`/news/${item.fields.slug}`}>
                  <div className="flex flex-col md:flex-row gap-6 p-4 bg-card hover:bg-accent/10 transition-colors bg-white/15 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 hover:border-white/30 group shadow-lg">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <time dateTime={item.sys.createdAt}>
                          {formatDistanceToNow(item.sys.createdAt, {
                            addSuffix: true,
                          })}
                        </time>
                      </div>

                      <h2 className="text-2xl font-semibold group-hover:text-secondary transition-colors">
                        {item.fields.title}
                      </h2>

                      <p className="text-muted-foreground line-clamp-2">
                        {item.fields.description}
                      </p>
                    </div>

                    <div className="md:w-1/3 h-[200px] relative rounded-lg overflow-hidden">
                      <img
                        src={`https:${item.fields.thumbnail.fields.file.url}`}
                        alt={item.fields.title}
                        className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col items-center justify-center gap-2 mt-10 pt-5">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsPage;

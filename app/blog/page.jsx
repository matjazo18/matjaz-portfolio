"use client";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState(0);
  let blogs1 = [];
  async function GetNews() {
    try {
      let response = await fetch(
        "https://newsdata.io/api/1/news?apikey=pub_8432949097cbb6dc5397906b1c280d8ea8c9b&q=technology"
      );
      let data = await response.json();
      for (let i = 0; i < data.results.length; i++) {
        blogs1.push({
          name: data.results[i].title,
          description: data.results[i].description,
        });
      }
      setBlogs(blogs1);

      console.log(blogs);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {!blogs ? (
        <>
          <button onClick={GetNews}>click me</button>
        </>
      ) : (
        <motion.section className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
          <div className="container mx-auto ">
            <h1 className="text-2xl xl:text-4xl text-accent mb-8 text-center xl:text-left">
              BLOG<span className="text-white ">PAGE</span>
            </h1>
            <button onClick={GetNews}>click me</button>
            <Tabs
              defaultValue={blogs.name}
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              <ScrollArea className="h-[200px] xl:h-[400px]">
                <TabsList className="flex flex-col w-full max-w-[380px]  mx-auto xl:mx-0 gap-6 justify-center items-center">
                  {blogs.map((item, index) => (
                    <TabsTrigger
                      value={item.name}
                      key={index}
                      className="w-[300px]"
                    >
                      {item.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>

              <div className="xl:min-h-[70vh]  w-full">
                {blogs.map((item, index) => (
                  <TabsContent
                    key={index}
                    value={item.name}
                    className="text-white w-full"
                  >
                    <h3 className="text-accent text-3xl xl:text-5xl font-extrabold ">
                      {item.name}
                    </h3>
                    <h2 className="text-white/60 text-[15px] font-light my-2">
                      {item.description}
                    </h2>
                    {item.content}
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Blog;

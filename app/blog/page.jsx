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
const Blog = () => {
  const blogs = [
    {
      name: "Top 5 LLM Models of 2024",
      description: "The world is surrounded by LLMs",
      content:
        "The British company called Prime has recently launched their new LLM model, joining the ranks of OpenAI, Anthropic, and Google DeepMind. This article explores the latest advancements in large language models.",
    },
    {
      name: "How to Build a Neural Network from Scratch",
      description: "A beginner-friendly guide to AI development",
      content:
        "Learn the fundamentals of neural networks by coding one in Python. This tutorial covers forward propagation, backpropagation, and gradient descent with practical examples.",
    },
    {
      name: "The Future of AI in Software Engineering",
      description: "Will AI replace programmers?",
      content:
        "With tools like GitHub Copilot and ChatGPT, AI is transforming how we write code. This blog discusses the impact of AI on software development jobs and skills.",
    },
    {
      name: "Python vs. Rust for AI Development",
      description: "Which language should you learn in 2024?",
      content:
        "Python dominates AI research, but Rust is gaining traction for performance-critical applications. We compare their strengths, weaknesses, and use cases in machine learning.",
    },
    {
      name: "Ethical AI: Bias and Fairness in Machine Learning",
      description: "How to build responsible AI systems",
      content:
        "AI models can inherit biases from training data. This post explores techniques for detecting and mitigating bias in datasets and algorithms.",
    },
  ];
  return (
    <motion.section>
      <div className="container mx-auto ">
        <div className="flex justify-start">
          <h1 className="text-2xl xl:text-4xl text-accent mb-8">
            BLOG <span className="text-white ">PAGE</span>
          </h1>
        </div>
        <Tabs
          defaultValue={blogs[0].name}
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <ScrollArea className="max-h-[20vh] xl:max-h-[50vh]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 justify-center items-center">
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

          <div className="min-h-[70vh] w-full">
            {blogs.map((item, index) => (
              <TabsContent
                key={index}
                value={item.name}
                className="text-white w-full"
              >
                <h3 className="text-accent text-3xl mb-2">{item.name}</h3>
                {item.content}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Blog;

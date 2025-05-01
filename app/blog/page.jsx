"use client";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {blogs.map((item, index) => {
              return (
                <div className="flex">
                  <div>
                    <TabsTrigger value={item.name} key={index}>
                      {item.name}
                    </TabsTrigger>
                  </div>
                </div>
              );
            })}
            <div>
              {blogs.map((item, index) => {
                return (
                  <>
                    <TabsContent
                      value={item.name + 1}
                      key={index}
                      className="text-white"
                    >
                      {item.description}
                    </TabsContent>
                  </>
                );
              })}
            </div>
          </TabsList>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Blog;

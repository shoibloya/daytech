// lib/tasks.ts
export type Task = {
  id: number
  title: string
  description: string
  date: string
  completed?: boolean
  location?: string
  tags?: string[]
  colorIndex?: number
}
  
  export const tasks: Task[] = [
    {
      id: 1,
      title: "Website Analysed",
      description: "Nuggt team analysed the website and created the blog strategy.",
      date: "2025-03-28T00:00:00Z",
      colorIndex: 4,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true, 
    },
    {
      id: 2,
      title: "Client Onboarded",
      description: "Start of Subscription",
      date: "2025-03-24T00:00:00Z",
      colorIndex: 3,
      //location: "Conference Room A",
      tags: ["Admin"],
      completed: true,
    },
    {
        id: 3,
        title: "First Blog Post",
        description: "Blog that serves a guide to: sustainable corporate gifts in Singapore/eco friendly corporate gifts in Singapore",
        date: "2025-04-04T00:00:00Z",
        colorIndex: 2,
        //location: "Conference Room A",
        tags: ["Blog"],
        completed: false,
    },
    
    {
      id: 4,
      title: "Second Blog Post",
      description: "Daytech already has a blog post on door gifts. But it's ranked 11th and above. We want to try writing an article on door gifts using our methodolgy to see if we can do better.",
      date: "2025-04-11T00:00:00Z",
      colorIndex: 2,
      //location: "Zoom",
      tags: ["Blog"],
      completed: false,
    },
    {
        id: 5,
        title: "Third Blogpost",
        description: "So far most of the blog posts on Daytech directly targets corporate gifts. We want to start a new category of blog posts target employee engagement ideas, employee engagement activities, workplace improvement ideas. People searching for these topics have a similar intent and purchase mindset. A simple call to action can convert them into paying customers.",
        date: "2025-04-18T00:00:00Z",
        colorIndex: 2,
        //location: "Zoom",
        tags: ["Blog"],
        completed: false,
      },
    {
      id: 6,
      title: "Fourth Blog Post",
      description: "Daytech already has articles targeting corporate gifts for clients. But it's ranked 20th and above. We want to try writing an article on corporate gifts for clients using our methodolgy to see if we can do better.",
      date: "2025-04-23T00:00:00Z",
      colorIndex: 2,
      //location: "Production",
      tags: ["Blog"],
      completed: false,
    },
    {
      id: 7,
      title: "Monthly Report",
      description: "Report on everything that happened in this month of subscription. Going through each article we posted and how they are performing as of 23rd March.",
      date: "2025-04-23T00:00:00Z",
      colorIndex: 4,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },


    {
      id: 8,
      title: "Subscription Renewable",
      description: "Subscription Renew Date.",
      date: "2025-04-24T00:00:00Z",
      colorIndex: 3,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },


    {
      id: 9,
      title: "On Page SEO Changes",
      description: "Webpage SEO Optimisation",
      date: "2025-04-05T00:00:00Z",
      colorIndex: 3,
      //location: "Production",
      tags: ["Admin"],
      completed: false,
    },
  ];
  
import React from "react";
import styles from "./ProjectsPage.module.css";
import { Carousel } from "antd";
import { ProjectItem } from "../../components/ProjectItem/ProjectItem";
import { AnimatedComponentWrapper } from "../../components/AnimatedComponentWrapper/AnimatedComponentWrapper";
import styled from "styled-components";

export const ProjectsPage = () => {
  const projects = [
    {
      title: "Witch's House",
      description: `Free spiritual toolkit including tarot readings, natal charts, and compatibility calculator. All explained in detail and free to use.`,
      imgPath: "./witchshouse.png",
      link: "https://witchs-house.vercel.app",
    },
    {
      title: "CallJaneDoe",
      description: `Site for communication 18+. 
The site has paid chat and paid calls through Twillio. 
A system of statuses and refunds to the client for the fact that 
they do not respond for a long time has been thought out

Technologies: GraphQlL, Next.js, Nest.js, TypeScript, TypeORM`,
      imgPath: "./calljanedoe.png",
      link: "https://calljanedoe.com",
    },
    {
      title: "Deflamel",
      description: `Worked on an app that generates images by keywords.
My task was to collect description data from several pages and send it to the server.
After that, I received a set of pictures, fonts and colors and combined them and gave 
examples to the user in poor quality.
      
Technologies: React, Redux, immutable less`,
      imgPath: "./deflamel.png",
      link: "https://deflamel.com",
    },
    {
      title: "Weshare",
      description: `It was an educational platform for Israeli students.
In this platform, you can create meetings (online lessons) 
and teachers can teach one or a group of students online.

Technologies: React, Redux toolkie, Node, MongoDB
`,
      imgPath: "./weshare.png",
      link: "https://www.weshare.net",
    },
  ];

  const CarouselWrapper = styled(Carousel)`
    > .slick-dots li button {
      background: #03a373;
    }
    > .slick-dots li.slick-active button {
      background: #03a373;
    }
  `;
  return (
    // <AnimatedComponentWrapper>
    <div className={styles.page}>
      <h1>Projects</h1>
      <CarouselWrapper autoplay>
        {projects.map(({ title, description, imgPath, link }, index) => (
          <ProjectItem
            title={title}
            description={description}
            imgPath={imgPath}
            link={link}
          />
        ))}
      </CarouselWrapper>
    </div>
    // </AnimatedComponentWrapper>
  );
};

import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = (props) => {

  const topics = props.topics.map((topic) => {

    return (
    <li key={topic.id}>
      <TopicListItem 
      label={topic.title}
      slug={topic.slug}
      />
    </li>
    );
  });

  return (
    <div className="top-nav-bar">
      <ul className="top-nav-bar__topic-list">
        {topics}
      </ul>
    </div>
  );
};

export default TopicList;

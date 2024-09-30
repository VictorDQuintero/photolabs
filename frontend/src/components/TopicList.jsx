import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, handleTopicClick}) => {

  const renderedTopics = topics.map((topic) => {

    return (
    <li key={topic.id}>
      <TopicListItem 
      label={topic.title}
      slug={topic.slug}
      onClick={() => handleTopicClick(topic.id)}
      />
    </li>
    );
  });

  return (
    <div className="top-nav-bar">
      <ul className="top-nav-bar__topic-list">
        {renderedTopics}
      </ul>
    </div>
  );
};

export default TopicList;

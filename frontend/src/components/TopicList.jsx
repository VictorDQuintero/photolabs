import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

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

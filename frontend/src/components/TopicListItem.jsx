import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ label, onClick}) => {

  return (
    <div className="topic-list__item">
      <button onClick={onClick}>
        <span className="topic-list__item span">{label}</span>
      </button>
    </div>
  );
};

export default TopicListItem;

import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ label, slug, onClick}) => {

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <button onClick={onClick}>
        <span className="topic-list__item span">{label}</span>
      </button>
    </div>
  );
};

export default TopicListItem;

import React from "react";
import useFeedItem from "../../hooks/useFeedItem";

interface IFeedItem {
  item: any;
}

export const FeedItem: React.FC<IFeedItem> = ({ item }) => {
  const { handleDelete, user } = useFeedItem();
  return (
    <p
      style={{
        padding: "16px",
        border: "2px solid black",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {item.feed}
      {item.uid === user?.uid && (
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      )}
    </p>
  );
};

import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";

import useFeed from "../../hooks/useFeed";
import { FeedItem } from "./FeedItem";

export const Feed: React.FC = () => {
  const { feed, error, loading, handleSubmit, addPostRef, logOutUser } =
    useFeed();
  return (
    <Container>
      <p>{error}</p>
      <Row>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            feed?.map((item: any) => <FeedItem key={item.id} item={item} />)
          )}
        </div>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="firstName">
            <Form.Label>Add Post</Form.Label>
            <Form.Control type="text" ref={addPostRef} required />
          </Form.Group>
          <Button className="w-100" type="submit" style={{ marginTop: "16px" }}>
            Add Feed
          </Button>
        </Form>

        <Button
          onClick={logOutUser}
          className="w-100"
          type="submit"
          style={{ marginTop: "16px" }}
        >
          Log Out
        </Button>
      </Row>
    </Container>
  );
};

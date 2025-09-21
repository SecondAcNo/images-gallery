import { Container, Row, Col, Button } from 'react-bootstrap';

const Welcome = () => (
  <div className="bg-light p-5 mb-4 rounded-3">
    <Container fluid className="py-5">
      <Row>
        <Col md={8}>
          <h1 className="display-5 fw-bold">Images Gallery</h1>
          <p className="fs-4">
            This is simple application that retrieves photos using Unsplash API.
            In order to start enter any search term in the input field.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="https://unsplash.com"
            target="_blank"
          >
            Learn more
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Welcome;

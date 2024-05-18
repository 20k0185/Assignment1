

import React from 'react';
import { Card } from 'react-bootstrap';

const Certifications = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Certifications</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Scrum Certified Personnel</Card.Subtitle>
        <Card.Text>
          I am a certified professional in Scrum, a framework for agile project management.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Certifications;

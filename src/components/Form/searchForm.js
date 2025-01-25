import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Search() {
  return (
    <Form className="d-flex">
      <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

import { Button, Form, Modal } from "react-bootstrap";
import { addTask, editTask } from "../redux/slices/crudSlide";
import { useDispatch } from "react-redux";

const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing the data of inputs in the form
    const form = new FormData(e.target);
    const newTask = Object.fromEntries(form.entries());

    if (editItem) {
      dispatch(editTask({ ...newTask, id: editItem.id }));
    } else {
      dispatch(addTask(newTask));
    }
    close();
  };

  return (
    <Modal
      className="text-black"
      show={isOpen}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {editItem ? "Edit Task" : "Create a New Task"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              required
              type="text"
              name="title"
              placeholder="Enter New Task"
            />
          </Form.Group>

          <Form.Group className="my-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              required
              type="text"
              name="author"
              placeholder="Enter Author Name"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Appointee</Form.Label>
            <Form.Control
              defaultValue={editItem?.appointee}
              required
              type="text"
              name="appointee"
              placeholder="Enter Appointee Name"
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>End Date</Form.Label>
            defaultValue={editItem?.end_date}
            <Form.Control required type="date" name="end_date" />
          </Form.Group>

          <Modal.Footer className="mt-2">
            <Button onClick={close}>Close</Button>
            <Button type="submit" variant="success">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;

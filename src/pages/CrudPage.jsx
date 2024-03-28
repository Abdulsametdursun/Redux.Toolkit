import { Button, ButtonGroup, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormModal from "../components/FormModal";
import { useState } from "react";
import { removeTask } from "../redux/slices/crudSlide";

const CrudPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.crudReducer);
  // states
  // is modal going to open
  const [isOpen, setIsOpen] = useState(false);
  // which state is going to edit
  const [editItem, setEditItem] = useState(null);

  console.log(editItem);
  return (
    <div className="px-3">
      <Button onClick={() => setIsOpen(true)}>Add New Task</Button>

      {/**Creating modal */}
      <FormModal
        editItem={editItem}
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
          setEditItem(null);
        }}
      />

      {/**Table */}
      <Table className="mt-5" variant="dark" striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Mission</th>
            <th>Author</th>
            <th>Appointee</th>
            <th>Date</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.appointee}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() => dispatch(removeTask(task.id))}
                    variant="danger"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      setEditItem(task);
                      setIsOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;

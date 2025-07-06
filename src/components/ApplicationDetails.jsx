import { MdDelete, MdEdit, MdOutlineDateRange } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import DropdownApplicationStatus from "./DropdownApplicationStatus";
import styled from "styled-components";

import { useDeleteApplication } from "./useDeleteApplication";

import Modal from "../ui/Modal";
import Menus from "../ui/Menus";
import ConfirmDelete from "../ui/ConfirmDelete";

const StyledDiv = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 80px repeat(5, 1fr) 40px;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  font-size: 15px;
`;

const Cell = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-text-color);
  font-weight: 600;
  text-transform: capitalize;
`;

const StatusCell = styled.span`
  background-color: var(--color-cell-background-color);
  width: fit-content;
  padding: 4px 8px;
  border-radius: 6px;
`;

const IconButton = styled.span`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-color);

  &:hover {
    color: var(--color-main-text-color);
  }
`;

function ApplicationDetails({ id, company, platform, status, date, notes }) {
  // const [isOpenModal, setIsOpenModal] = useState();
  const { isLoading, deleteApplication } = useDeleteApplication();

  return (
    <StyledDiv>
      <Cell>{id}</Cell>
      <Cell>{company}</Cell>
      <Cell>{platform}</Cell>

      <DropdownApplicationStatus
        status={status}
        items={[
          { value: "pending", label: "Pending" },
          { value: "rejected", label: "Rejected" },
          { value: "selected", label: "Selected" },
          { value: "interview", label: "Interview Scheduled" },
        ]}
        applicationId={id}
      />

      <Cell>
        <MdOutlineDateRange />
        {date}
      </Cell>
      <Cell>{notes}</Cell>

      {/* <Modal>
        <Modal.Open opens="application-options">
          <IconButton>
            <SlOptionsVertical />
          </IconButton>
        </Modal.Open>
        <Modal.Window name="application-options">Some data</Modal.Window>
      </Modal> */}

      <Modal>
        <Menus.Menu>
          {/* This can be used to open or close the menu */}
          {/* 'id' tells for which application to open */}
          <Menus.Toggle id={id} />

          {/* Will contain a list of buttons */}
          <Menus.List id={id}>
            <Modal.Open opens="delete-booking">
              <Menus.Button icon={<MdDelete />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete-booking">
          <ConfirmDelete
            resourceName="application"
            disabled={isLoading}
            onConfirm={() => deleteApplication(id)}
          />
        </Modal.Window>
      </Modal>
      {/* {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>Some data</Modal>
      )}
      <IconButton>
        <SlOptionsVertical onClick={() => setIsOpenModal((show) => !show)} />
      </IconButton> */}
    </StyledDiv>
  );
}

export default ApplicationDetails;

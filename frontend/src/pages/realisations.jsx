import { useRealisations, useUpdateRealisationQty } from "../api/use-api";
import {
  CTable,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
import { CTableBody } from "@coreui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth-context";

const Realisations = () => {
  const { data, isLoading, error } = useRealisations();
  const { isLoggedIn } = useContext(AuthContext);
  const updateQtyMutation = useUpdateRealisationQty();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRealisation, setSelectedRealisation] = useState(null);
  const [newQuantity, setNewQuantity] = useState("");

  const handleUpdateQty = () => {
    if (newQuantity && newQuantity > 0 && selectedRealisation) {
      updateQtyMutation.mutate({
        id: selectedRealisation._id,
        qty: Number(newQuantity),
      });
      setModalVisible(false);
      setNewQuantity("");
      setSelectedRealisation(null);
    }
  };

  const openModal = (realisation) => {
    setSelectedRealisation(realisation);
    setNewQuantity(realisation.quantity.toString());
    setModalVisible(true);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!isLoggedIn)
    return (
      <h4 className="text-center mt-5 text-info">
        You must login to access this page
      </h4>
    );

  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center mt-3">
      <h1>Realisations</h1>
      <CTable striped className="w-70">
        <CTableHead>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Materials</CTableHeaderCell>
          <CTableHeaderCell>Quantity</CTableHeaderCell>
          <CTableHeaderCell>Actions</CTableHeaderCell>
        </CTableHead>
        <CTableBody>
          {data.realisation.map((realisation) => (
            <CTableRow key={realisation.id}>
              <CTableDataCell>
                <span
                  style={{ cursor: "pointer", color: "#007bff" }}
                  onClick={() => openModal(realisation)}
                >
                  {realisation.name}
                </span>
              </CTableDataCell>
              <CTableDataCell>
                {realisation.materials
                  .map((material) => material.name)
                  .join(", ")}
              </CTableDataCell>
              <CTableDataCell>{realisation.quantity}</CTableDataCell>
              <CTableDataCell>
                <CButton
                  color="primary"
                  size="sm"
                  onClick={() => openModal(realisation)}
                  disabled={updateQtyMutation.isLoading}
                >
                  Edit
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      <CModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        backdrop="static"
      >
        <CModalHeader>
          <CModalTitle>
            Update Quantity - {selectedRealisation?.name}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="mb-3">
            <label className="form-label">
              Current Quantity: {selectedRealisation?.quantity}
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter new quantity"
              value={newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
              min="1"
            />
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton
            color="primary"
            onClick={handleUpdateQty}
            disabled={
              updateQtyMutation.isLoading || !newQuantity || newQuantity <= 0
            }
          >
            {updateQtyMutation.isLoading ? "Updating..." : "Update"}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Realisations;

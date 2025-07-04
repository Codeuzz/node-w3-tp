import { useRealisations } from "../api/use-api";
import {
  CTable,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { CTableBody } from "@coreui/react";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const Realisations = () => {
  const { data, isLoading, error } = useRealisations();
  const { isLoggedIn } = useContext(AuthContext);
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
        </CTableHead>
        <CTableBody>
          {data.realisation.map((realisation) => (
            <CTableRow key={realisation.id}>
              <CTableDataCell>{realisation.name}</CTableDataCell>
              <CTableDataCell>
                {realisation.materials
                  .map((material) => material.name)
                  .join(", ")}
              </CTableDataCell>
              <CTableDataCell>{realisation.quantity}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default Realisations;

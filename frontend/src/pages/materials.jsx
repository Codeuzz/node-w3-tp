import { useMaterials } from "../api/use-api";
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

const Materials = () => {
  const { data, isLoading, error } = useMaterials();
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
      <h1>Materials</h1>
      <CTable striped className="w-70">
        <CTableHead>
          <CTableHeaderCell>Name</CTableHeaderCell>
          <CTableHeaderCell>Company Name</CTableHeaderCell>
        </CTableHead>
        <CTableBody>
          {data.map((material) => (
            <CTableRow key={material.id}>
              <CTableDataCell>{material.name}</CTableDataCell>
              <CTableDataCell>{material.company.name}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
};

export default Materials;

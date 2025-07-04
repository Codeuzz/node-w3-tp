import { useAddRealisation, useMaterials } from "../api/use-api";
import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { CButton } from "@coreui/react";
import { useState } from "react";

const AddRealisations = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn)
    return (
      <h4 className="text-center mt-5 text-info">
        You must login to access this page
      </h4>
    );
  const { data: materialsData, isLoading } = useMaterials();
  const addRealisationMutation = useAddRealisation();
  const [materials, setMaterials] = useState(0);
  const handleAddMaterial = () => {
    setMaterials((prev) => prev + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const materialsArr = [];
    for (let i = 0; i < materials; i++) {
      const material = form[`materialId-${i}`]?.value;
      const qty = Number(form[`materialQty-${i}`]?.value);
      if (material && qty) {
        materialsArr.push({ material, qty });
      }
    }
    addRealisationMutation.mutate({
      values: {
        name: form.name.value,
        quantity: form.quantity.value,
        category: form.category.value,
        materials: materialsArr,
      },
    });
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center mt-3">
      <h1>Add Realisation</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-2 justify-content-center align-items-center mt-3 border border-primary rounded p-3 d-inline-block"
      >
        <input type="text" placeholder="Realisation Name" name="name" />
        <input type="number" placeholder="Quantity" name="quantity" />
        <input type="text" placeholder="Category" name="category" />
        <CButton color="primary" type="button" onClick={handleAddMaterial}>
          Add Material
        </CButton>
        {Array.from({ length: materials }).map((_, index) => (
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <select name={`materialId-${index}`} className="flex-1">
              {materialsData.map((material) => (
                <option key={`${material._id}-${index}`} value={material._id}>
                  {material.name}
                </option>
              ))}
            </select>
            <input
              className="flex-grow-1"
              type="number"
              placeholder="Quantity"
              name={`materialQty-${index}`}
            />
          </div>
        ))}
        <CButton color="primary" type="submit">
          Add Realisation
        </CButton>
      </form>
    </div>
  );
};

export default AddRealisations;

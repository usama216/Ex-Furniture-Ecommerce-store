import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Categories = () => {
  const [addMainCategory, setAddMainCategory] = useState("");
  const [addSubCategory, setAddSubCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleChangeCategory = (e) => {
    setAddMainCategory(e.target.value);
  };

  const handleChangeSubCategory = (e) => {
    setAddSubCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (addMainCategory.trim() !== "") {
      setCategories([...categories, addMainCategory]);
      setAddMainCategory("");
    }
  };

  const handleAddSubCategory = () => {
    if (addSubCategory.trim() !== "") {
      setCategories([...categories, addSubCategory]);
      setAddSubCategory("");
    }
  };

  return (
    <>
      <Box>
        <Box>
          <h1>Add New Category </h1>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <TextField
              type="text"
              sx={{ width: "50%" }}
              required
              value={addMainCategory}
              onChange={handleChangeCategory}
            />
            <Button variant="contained" onClick={handleAddCategory}>
              Add
            </Button>

            <TextField
              type="text"
              sx={{ width: "50%" }}
              required
              value={addSubCategory}
              onChange={handleChangeSubCategory}
            />
            <Button variant="contained" onClick={handleAddSubCategory}>
              Add Sub Category
            </Button>
          </Box>
        </Box>

        <Box>
          <h1>All Categories</h1>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default Categories;

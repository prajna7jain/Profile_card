import { Box, Chip, Grid2, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import NoData from "../Components/NoData";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);


  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")          //to get the info:'.get("API address")',
      .then((response) => {
       // console.log(response.data.recipes, 111)                        //response.data:to access
        setRecipes(response.data.recipes)
      })                                                         //exception method:try block    
      .catch((error) => {
        console.log(error)                                       //only to check if the data is there
      });                                                        //exception method:error block
    axios.get("https://dummyjson.com/recipes/tags")
      .then((response) => {
       // console.log(response.data, 222)
        setCategories(response.data, 222)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])
  //console.log(recipes, 333)
  //console.log(categories, 444)



  useEffect(() => {
    let filtered = [...recipes];
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.tags && recipe.tags.includes(selectedCategory)
      );
    }
    // Filter by search term         //filter is a func
    if (searchTerm) {
      filtered = filtered.filter((recipe) => recipe.name &&
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Set the filtered products
    setFilteredRecipes(filtered);
  }, [selectedCategory, searchTerm, recipes]);




  // useEffect(() => {
  //   let filtered = [...products];

  //   // Filter by category
  //   if (selectedCategory !== "All") {
  //     filtered = filtered.filter(
  //       (product) => product.category === selectedCategory
  //     );
  //   }
  //   // Filter by search term
  //   if (searchTerm) {
  //     filtered = filtered.filter((product) =>
  //       product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   }
  //   // Set the filtered products
  //   setFilteredProducts(filtered);
  // }, [selectedCategory, searchTerm, products]);



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 sx={{ p: 2 }} size={{ xs: 12, sm: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              <Chip
                color={selectedCategory === "All" ? "success" : "default"}
                label={"All"}
                component={Paper}
              onClick={() => setSelectedCategory("All")}
              />

              {categories.map((item,index) => (
                <Chip
                onClick={() => setSelectedCategory(item)}
                  color={selectedCategory === item ?
                    "success" : "default"}
                    key={index}
                  label={item}
                  component={Paper}
                  
                />
              ))}
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 9 }} sx={{ p: 2 }}>
          <Box>
            <TextField
              fullWidth
              type="search"
              label="Search recipes here"
              placeholder="search recipes by title"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid2 container spacing={2}>
                {filteredRecipes.length > 0 ? (filteredRecipes.map((item,index) => (
                  <Grid2 item={{ xs: 12, sm: 4 }}
                  key={index}>
                    <ProductCard recipe={item} />
                  </Grid2>
                )) ): (<Box sx={{ flexGrow: 1, p: 3 }}>
                  <Grid2 container spacing={2}>
                    <Grid2 item={{ xs: 12  }}>
                      <NoData />
                    </Grid2>
                  </Grid2>
                </Box>
                )}




              </Grid2>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

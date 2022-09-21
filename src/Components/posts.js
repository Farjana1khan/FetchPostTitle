import * as React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import "../App.css";
export default function BasicCard() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/posts`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData.posts);
        setData(actualData.posts);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h3
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          marginBottom: "20px"
        }}
      >
        Post Title
      </h3>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data &&
            data.map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card style={{ height: "100px" }} className="card">
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Title:
                    </Typography>

                    <Typography variant="body2">{item.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}

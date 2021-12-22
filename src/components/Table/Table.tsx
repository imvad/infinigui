import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
// import FilterListIcon from "@material-ui/icons/FilterList";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

interface food {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  drawer: {
    position: "relative",
    marginLeft: "auto",
    "& .MuiBackdrop-root": {
      display: "none"
    },
    "& .MuiDrawer-paper": {
      width: 200,
      position: "absolute",
      height: (props: { height: number }) => props.height,
      transition: "none !important"
    }
  }
});

const originalRows: food[] = [
  { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
];

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef();
  const [height, setHeight] = useState(0);

  const classes = useStyles({ height: height });

  useEffect(() => {
    if (open) {
      setHeight(containerRef.current.clientHeight - 64);
    } else {
      setHeight(0);
    }
  }, [open]);

  const handleFilterIconClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div ref={containerRef} style={{ position: "relative" }}>
        <AppBar position="static">
          <Toolbar style={{ display: "flex" }}>
            <IconButton
              style={{ marginLeft: "auto" }}
              color="inherit"
              aria-label="filterButton"
              onClick={handleFilterIconClick}
            >
              {/* <FilterListIcon /> */}
              click
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          open={open}
          className={classes.drawer}
          variant="persistent"
          anchor="right"
        >
          <Container>{loremIpsum}</Container>
        </Drawer>
        <Paper>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{marginRight: 200}}>
                <TableRow>
                  <TableCell>Food (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {originalRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
      <br />
      <a
        target="_blank"
        href="https://smartdevpreneur.com/the-easiest-way-to-implement-material-ui-table-search/"
      >
        How do we add search and filter to Material-UI Table?
      </a>
    </>
  );
}

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

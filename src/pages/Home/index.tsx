import React from "react";
import { Grid, Paper } from "@mui/material";
import AppBar from "../../components/CustomAppBar";
import BookPanel from "../../components/CustomBookPanel";
import BookData from "../../data/book.json";
import "./style.css";
import CustomFilter from "../../components/CustomFilter";

type IBook = {
  title: String;
  author: String;
  publisher: String;
  cost_price: String;
  discounted_price: String;
};

const HomeScreen = () => {
  return (
    <div>
      <AppBar />
      <div className="home-grid-container">
        <div className="home-grid-item-1">
          <Paper elevation={0} square>
            <CustomFilter />
          </Paper>
        </div>
        <div className="home-grid-item-2">
          <Paper elevation={0} square>
            <div className="home-right-display">
              {BookData.map((book: IBook) => (
                <div>
                  <BookPanel
                    title={book.title}
                    author={book.author}
                    publisher={book.publisher}
                    cost_price={book.cost_price}
                    discounted_price={book.discounted_price}
                  />
                </div>
              ))}
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

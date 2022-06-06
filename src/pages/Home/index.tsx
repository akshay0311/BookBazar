import React from "react";
import { Grid, Paper } from "@mui/material";
import AppBar from "../../components/CustomAppBar";
import BookPanel from "../../components/CustomBookPanel";
import BookData from "../../data/book-home.json";
import "./style.css";
import CustomFilter from "../../components/CustomFilter";
import { useNavigate } from "react-router-dom";
import { Detail } from "../../utils/constants/RouterConstants";

type IBook = {
  title: String;
  author: String;
  publisher: String;
  cost_price: String;
  discounted_price: String;
};

const HomeScreen = () => {

  const navigate = useNavigate();

  const clickCard = () => {
    navigate("/detail")
  }
  
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
              {BookData.map((book: any) => (
                <div key = {book.id}>
                  <BookPanel
                    title={book.title}
                    author={book.author}
                    publisher={book.publisher}
                    cost_price={book.cost_price}
                    discounted_price={book.discounted_price}
                    clickCard={clickCard}
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

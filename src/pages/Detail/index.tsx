import React from "react";
import CustomAppBar from "../../components/CustomAppBar";
import CustomVerticalCarousel from "../../components/CustomVerticalCarousel";
import "./style.css";
import BookData from "../../data/book-detail.json";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";

const Detail = () => {
  const specifications = [
    {
      key: "Book",
      value: BookData.title,
    },
    {
      key: "Author",
      value: BookData.author,
    },
    {
      key: "Binding",
      value: BookData.publisher,
    },
    {
      key: "Publishing Date",
      value: "2020",
    },
    {
      key: "Publisher",
      value: BookData.publisher,
    },
    {
      key: "Edition",
      value: "1st",
    },
    {
      key: "Number of Pages",
      value: 234,
    },
    {
      key: "Language",
      value: "English",
    },
  ];
  return (
    <>
      <CustomAppBar />
      <div className="detail-grid-container">
        <div className="detail-grid-item-1">
          <CustomVerticalCarousel
            thumbnails_object={BookData.book_thumbnails}
          />
        </div>
        <div className="detail-grid-item-2">
          <div className="detail-title">{BookData.title}</div>
          <div className="detail-price">
            <span className="detail-discount-price-dollar">$</span>
            <span className="detail-discount-price">
              {BookData.discounted_price}
            </span>
            <del className="detail-cost-price">$ {BookData.cost_price}</del>
            <span className="detail-discount-percentage">40% off</span>
          </div>
          <div className="detail-rating">
            <div className="detail-rating-tag">
              <span>4.6</span>
              <span className="fa fa-star checked"></span>
            </div>
            <div className="detail-rating-count">
              <span>20 ratings</span> <span>2 reviews</span>
            </div>
          </div>
          <div className="detail-specifications">
            <Card
              sx={{
                width: "95%",
                borderRadius: "0px",
                border: "1px solid #F0F0F0",
              }}
              elevation={0}
            >
              <CardContent sx={{ borderBottom: "1px solid #F0F0F0" }}>
                <Typography variant="h5" component="div">
                  Specifications
                </Typography>
              </CardContent>
              <CardContent>
                {specifications.map((specification) => (
                  <Grid
                    container
                    classes={{ root: "detail-specification-container" }}
                  >
                    <Grid item xs={3}>
                      <span className="detail-specification-key">
                        {specification.key}
                      </span>
                    </Grid>
                    <Grid item xs={9}>
                      <span className="detail-specification-value">
                        {specification.value}
                      </span>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="detail-post-question">
            <Card
              sx={{
                width: "95%",
                borderRadius: "0px",
                border: "1px solid #F0F0F0",
              }}
              elevation={0}
            >
              <CardContent>
                  <div className="detail-post-question-content">
                        <span>Have doubt regarding this product ?</span>
                        <Button variant="outlined" className = "detail-post-question-button">Post your question</Button>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

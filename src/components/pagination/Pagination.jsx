import React from "react";
import { useDispatch } from "react-redux";
import "./Pagination.scss";

export const Pagination = (props) => {
  const dispatch = useDispatch();
  const pages = [1];
  const pagination = (next) => {
    dispatch(props.take(next));
  };
  return (
    <div style={{position: props.position, left: props.left}} className="pagination">
      <div
        className={
          props.previous === null
            ? "vector_img__prev opacity"
            : "vector_img__prev"
        }
        onClick={() => pagination(props.previous)}
      ></div>
      {pages.map((page, index) => (
        <>
        <div key={index} className="pagination_box">
          {page}
        </div>
        <div className="pagination_box1">2</div>
        <div className="pagination_box1">3</div>
        </>
      ))}
      <div
        className={
          props.next === null
            ? "vector_img__next opacity"
            : "vector_img__next"
        }
        onClick={() => pagination(props.next)}
      ></div>
    </div>
  );
};

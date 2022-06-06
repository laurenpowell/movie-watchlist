import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { DetailCard } from "./DetailCard";

export const Detail = (movie) => {

  const { detail } = useContext(GlobalContext);

  return (
    <div className="detail-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Movie Detail</h1>
				</div>	
				<div>
          {detail?.length > 0 ? (
						<div>
								{detail.filter((movie, i) => i === 0)
								.map((movie, i) => (
								<DetailCard movie={movie} key={movie.id} type="watchlist" />
								))}
						</div>
						) : (
						<h4 className="no-movies">Details have been lost, try again</h4>
						)}
        </div>
      </div>
    </div>
  )
}

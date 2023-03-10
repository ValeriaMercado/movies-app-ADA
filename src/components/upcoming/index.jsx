import React from "react";
import { UpcomingTopRated } from "../boxToPickContent";

export const Upcoming = () => {
  return (
    <UpcomingTopRated searchCategory={`upcoming`} serieOrMovie={`movie`} />
  );
};

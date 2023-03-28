import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import MovieTrailer from "../moviesDetails/indexTrailer";
import { BsPlayCircle } from "react-icons/bs";
import {
  Image,
  Box,
  Text,
  Button,
  Icon,
  Flex,
  UnorderedList,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import MovieCredits from "../moviesDetails/MovieCredits";
import { useFetchDetails } from "../../hooks/useFetchDetails";
import { Context } from "../../context/Context";
import { ViewOffIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
export const copy = () => {
  
}

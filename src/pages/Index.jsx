import React, { useState } from "react";
import { Box, Grid, Heading, Button } from "@chakra-ui/react";
import { FaChessPawn, FaChessRook, FaChessKnight, FaChessBishop, FaChessQueen, FaChessKing } from "react-icons/fa";

const ChessBoard = () => {
  const [board, setBoard] = useState([
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
  ]);

  const getPieceIcon = (piece) => {
    switch (piece) {
      case "bp":
      case "wp":
        return <FaChessPawn />;
      case "br":
      case "wr":
        return <FaChessRook />;
      case "bn":
      case "wn":
        return <FaChessKnight />;
      case "bb":
      case "wb":
        return <FaChessBishop />;
      case "bq":
      case "wq":
        return <FaChessQueen />;
      case "bk":
      case "wk":
        return <FaChessKing />;
      default:
        return null;
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Chess Game</Heading>
      <Grid templateColumns="repeat(8, 1fr)" gap={0} width="400px" height="400px">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <Box key={`${rowIndex}-${colIndex}`} bg={(rowIndex + colIndex) % 2 === 0 ? "gray.100" : "gray.400"} display="flex" justifyContent="center" alignItems="center" fontSize="2xl" color={piece.startsWith("b") ? "black" : "white"}>
              {getPieceIcon(piece)}
            </Box>
          )),
        )}
      </Grid>
      <Button mt={4}>New Game</Button>
    </Box>
  );
};

const Index = () => {
  return <ChessBoard />;
};

export default Index;

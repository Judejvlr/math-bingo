import React, { useState, useEffect } from 'react';
import { Button, Card, Grid, Paper, Typography } from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import { getBingoCardNumbers } from "../services/BingoCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BingoCard() {
  const [cardNumbers, setCardNumbers] = useState<Array<string | number>>([]);
  const [selected, setSelected] = useState<Array<number | string>>(['Libre'])


  useEffect(() => {
    fetchCardNumbers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCardNumbers = () => {
    setCardNumbers(getBingoCardNumbers())
  }

  const selectedNumber = (number: number | string) => {
    selected.includes(number) ? setSelected(value => value.filter((item) => item !== number)) : setSelected((value) => [...value, number])
  }


  return (
    <Card>
      <Grid container spacing={0.5} columns={5}>
        {Array.from("BINGO").map((letter, index) => (
          <Grid item xs={1} key={index}>
            <Item>
              <Typography variant="h2">
                {letter}
              </Typography>
            </Item>
          </Grid>
        ))}
        {cardNumbers.map((number, index) => (
          <Grid item xs={1} key={index}>
            <Button
              variant="contained"
              color={selected.includes(number) ? 'primary' : 'secondary'}
              fullWidth
              onClick={() => selectedNumber(number)}
            >
              <Typography variant="h3">
                {number}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  )
}
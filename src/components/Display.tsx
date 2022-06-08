import React, { useState, useEffect } from 'react';
import { Card, Grid, Typography } from "@mui/material";
import { getOperation } from '../services/getOperation';

export default function Display() {
  const [operation, setOperation] = useState<string>();
  const allOperations = new Set()


  useEffect(() => {
    getNewOperation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewOperation = () => {
    setInterval(() => {
      let newOperation;
      do {
        newOperation = getOperation()
      } while (allOperations.has(newOperation))
      allOperations.add(newOperation)
      setOperation(newOperation)
    }, 10000)
  }


  return (
    <Card>
      <Grid container spacing={0.5} columns={5} justifyContent="center">
        <Typography variant="h1" align='center'>
          {operation}
        </Typography>
      </Grid>
    </Card>
  )
}
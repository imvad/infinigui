import React, { ReactNode } from 'react'

import { Card, CardActions, CardContent, Button, Typography, SvgIcon, SvgIconProps } from '@mui/material';
import { ThemeProvider, Button } from '@mui/material';
import { StylesProvider } from "@material-ui/core";

import customTheme from '../../lib/theme';
import './EntityCounter.css'


export interface EntityCounterProps {
  children: ReactNode | undefined;
  title: ReactNode | undefined;
  pair: ReactNode | undefined;
}

export interface CounterPairProps {
  title: string | ReactNode;
  count: string | ReactNode;
}

export interface CounterTitleProps {
  text: string | ReactNode;
  icon: SvgIconProps;
}

const EntityCounter = () => {
  return (
      <Button>asdf</Button>
    // <ThemeProvider theme={customTheme}>
    //   <Card className="card">
    //     <CardContent className="card__content">
    //       <div style={{ padding: 1 }} className="card__title">
    //         {props.title}
    //       </div>
    //       <div className='card__counter_pair'>
    //         {props.children}
    //       </div>
    //     </CardContent>
    //     <CardActions sx={{ paddingX: 0 }}>
    //       <Button color='primary' fullWidth size="small" variant='contained'>View</Button>
    //     </CardActions>
    //   </Card>
    // </ThemeProvider>
  )
}

EntityCounter.Pair = CounterPair

function CounterPair(props: CounterPairProps) {
  return (
    <div>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        {props.title}
      </Typography>
      <Typography sx={{ fontSize: 18 }} variant="body2">
        {props.count}
      </Typography>
    </div>
  )
}

export function CounterTitle({ text, icon }: CounterTitleProps) {
  return <>
    <SvgIcon>
      {icon}
    </SvgIcon>
    <Typography sx={{ fontSize: 16, marginLeft: 1 }} color="text.primary" gutterBottom>
      {text}
    </Typography>
  </>
}

export default EntityCounter

import React, { ReactNode } from 'react'

import { Card, CardActions, CardContent, Button, Typography, SvgIcon } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { StylesProvider } from "@material-ui/core";

import customTheme from '../../lib/theme';
import './EntityCounter.css'


export interface EntityCounter {
    children: ReactNode;
    title: ReactNode;
}

const IEntityCounter = (props: EntityCounter) => {
    return (
        <ThemeProvider theme={customTheme}>
            <Card className="card">
                <CardContent className="card__content">
                    <div style={{ padding: 1 }} className="card__title">
                        {props.title}
                    </div>
                    <div className='card__counter_pair'>
                        {props.children}
                    </div>
                </CardContent>
                <CardActions sx={{ paddingX: 0 }}>
                    <Button color='primary' fullWidth size="small" variant='contained'>View</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

IEntityCounter.Pair = CounterPair

export function CounterPair() {
    return (
        <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                Volumes & FS
            </Typography>
            <Typography sx={{ fontSize: 18 }} variant="body2">
                2
            </Typography>
        </div>
    )
}

export function CounterTitle() {
    return <>
        <SvgIcon>
            <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 20 20"><path d="M10.4,0.2 C6.7,0.2 0,1.4 0,4.1 L0,8 L0,10.9 L0,12.9 C0,15.5 6.7,16.7 10.4,16.7 C14,16.7 20,15.5 20,12.9 L20,10.9 L20,8 L20,4.1 C20,1.4 14,0.2 10.4,0.2 L10.4,0.2 Z M10.4,1.8 C13.7,1.8 18.5,2.8 18.5,4.1 C18.5,5.4 13.7,6.4 10.4,6.4 C7.1,6.4 1.6,5.4 1.6,4.1 C1.6,2.8 7.1,1.8 10.4,1.8 L10.4,1.8 Z"></path></svg>
        </SvgIcon>
        <Typography sx={{ fontSize: 16, marginLeft: 1 }} color="text.primary" gutterBottom>
            Pools
        </Typography>
    </>
}

export default IEntityCounter

import React from 'react';
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} would you like {props.lang}?
  </h1>
);

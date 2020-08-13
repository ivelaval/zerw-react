import React, { FC } from "react";
export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App: FC<HelloWorldProps> = ({ userName, lang }) => (
  <h1>
    Hi {userName} would you like {lang}?
  </h1>
);

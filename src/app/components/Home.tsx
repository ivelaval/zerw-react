import React, { FC } from 'react';

interface IHomeProps {
  userName: string;
  lang: string;
}

export const Home: FC<IHomeProps> = ({ userName, lang }): JSX.Element => {
  return (
    <h1>
      Hi {userName} would you like {lang}?
    </h1>
  );
}

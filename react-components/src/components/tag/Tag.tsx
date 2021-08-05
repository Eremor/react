import React from 'react';

type ITag = {
  tag: string;
};

export const Tag = (props: ITag): JSX.Element => {
  return <li className="card__tag">{props.tag}</li>;
};

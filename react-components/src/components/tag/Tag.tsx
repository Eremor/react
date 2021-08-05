import React from 'react';

type ITag = {
  tag: string;
};

export const Tag = (props: ITag): JSX.Element => {
  const { tag } = props;

  return <li className="card__tag">{tag}</li>;
};

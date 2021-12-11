import * as React from 'react';
import { PropsWithRef } from 'react';

type Props = {
  children: React.ReactNode;
  id?: number;
  image: string;
  description: string;
};

const CardCourse = ({
  children,
  id = 0,
  image = '#',
  description = '',
}: Props) => {
  return (
    <div className="col-md-4 px-auto py-1" key={id}>
      <div className="card">
        <div className="card-body ">
          {/* <img src={image} height="180" className="card-img-top" /> */}
          <img
            src="https://i.imgur.com/crEJgaf.gif.gif"
            height="180"
            className="card-img-top"
          />
          <h5 className="card-title">{children}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardCourse;

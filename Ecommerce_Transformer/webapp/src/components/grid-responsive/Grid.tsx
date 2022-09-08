import React from 'react';

const Grid = ({ children }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className="grid wide">
        {children}
    </div>
  )
}

export default Grid;
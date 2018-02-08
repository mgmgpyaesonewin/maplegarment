import React from 'react';
import StackGrid from 'react-stack-grid';

const Color = {
  background: '#e60000'
};

const ProductsView = () => (
  <StackGrid
    columnWidth={150}
  >
    <div key="key1" style={Color}>Item 1</div>
    <div key="key2" style={Color}>Item 2</div>
    <div key="key3" style={Color}>Item 3</div>
  </StackGrid>
);

export default ProductsView;

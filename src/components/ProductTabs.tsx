import { Wrapper } from '../Wrappers/ProductTabs';

const ProductTabs = () => {
  return (
    <Wrapper>
      <div className='product-tabs'>
        <button className='product-tab active'>Seitan</button>
        <button className='product-tab'>Chorizos</button>
        <button className='product-tab'>Tutitos</button>
      </div>
    </Wrapper>
  );
};

export default ProductTabs;

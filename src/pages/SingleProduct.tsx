// import { LoaderFunction, useLoaderData } from 'react-router-dom';
// import { customFetch } from '../utils/customFetch';
// import { SingleProductResponse } from '../utils/types';
import { Wrapper } from '../Wrappers/SingleProduct';
import img from '../assets/images/seitan-1.jpg';
// import { GiBiceps } from 'react-icons/gi';
//import { LuBicepsFlexed } from 'react-icons/lu';
//
// import { LuVegan } from 'react-icons/lu';

// export const loader: LoaderFunction = async ({ params }): Promise<SingleProductResponse> => {
//   const response = await customFetch(`/products/${params.id}`);
//   console.log(response);
//   return { ...response.data };
// };

const SingleProduct = () => {
  // const { data } = useLoaderData() as SingleProductResponse;

  return (
    <Wrapper>
      <div className='page-single-product'>
        <div className='product-detail'>
          <div className='container-img'>
            <img src={img} />
          </div>
          <div className='detail'>
            <h1> Seitan</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ducimus possimus, libero provident at eveniet et numquam animi quam
              quis ullam soluta inventore non error necessitatibus facilis culpa earum laboriosam?
            </p>
            <h2> $10.500</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

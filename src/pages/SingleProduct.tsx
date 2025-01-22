import { LoaderFunction, useLoaderData } from 'react-router-dom';
import { Wrapper } from '../Wrappers/SingleProduct';
import { customFetch } from '../utils/customFetch';
import { Product, SingleProductResponse } from '../utils/types';
import { addItem, removeItem } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../store';

export const loader: LoaderFunction = async ({ params }): Promise<Product> => {
  const response = await customFetch<SingleProductResponse>(`/products/${params.id}`);
  return response.data.data;
};

const SingleProduct = () => {
  const productResponse = useLoaderData() as Product;
  const { image, title, description, price, unitType, _id } = productResponse;

  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) => state.cartState.cartItems.find((product) => product.productID === _id));
  const amount = cartItem ? cartItem.amount : 0;

  const addToCart = () => {
    dispatch(
      addItem({
        productID: _id,
        title,
        price,
        amount: 0,
        description,
        totalPriceItem: price,
        image,
      }),
    );
  };

  const removeToCart = () => {
    dispatch(removeItem(productResponse._id));
  };
  return (
    <Wrapper>
      <div className='page-single-product'>
        <div className='product-detail'>
          <div className='container-img'>
            <img src={`http://localhost:8080${image}`} />
          </div>
          <div className='detail'>
            <h1> {title}</h1>
            <p>{description}</p>
            <p>{unitType}</p>
            <div className='handle-cart'>
              <h2> ${price}</h2>
              <div className='action-buttons '>
                <button className='decrement-button' onClick={removeToCart}>
                  🗑️
                </button>
                <span className='quantity'>{amount}</span>
                <button className='increment-button' onClick={addToCart}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProduct;

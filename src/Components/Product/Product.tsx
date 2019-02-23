import { FC, Fragment } from 'react'

import { faceProduct } from '../../Type/Interface';

const Product: FC<faceProduct> = ({ title, price, prodState, shipping, sold }) => (
    <Fragment>
        <h3>{title}</h3>
        <span>{price}</span>
        <span>{prodState}</span>
        <span>{shipping}</span>
        <span>{sold}</span>
    </Fragment>
);


export default Product;
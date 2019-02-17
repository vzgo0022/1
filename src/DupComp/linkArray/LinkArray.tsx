import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import { FaceLink } from '../../Type/Interface';


const LinkArray:React.FC<{ array: FaceLink[] }> =  ({ array }) => {

 const X = array.map(({ to, text, download, rel, target,type,}: FaceLink) =>
         (<Link
            to={to}
            key={Date.now()}
            rel={rel}
            target={target}
            type={type}
            download={download} > `${text}` </Link>)
   )
   return <Fragment>{X}</Fragment>
   }


export default LinkArray;






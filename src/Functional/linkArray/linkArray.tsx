import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';


 interface InterfaceLink {
   readonly to: string,
   readonly text: string,
   readonly download?: string,
   readonly rel?: string,
   readonly target?: string,
   readonly type?: string,
   readonly key?:number, 
}


const LinkArray:React.FC<{ array: InterfaceLink[] }> =  ({ array }) => {

 const X = array.map(({ to, text, download, rel, target,type,}: InterfaceLink) =>
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






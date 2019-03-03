import React, { FC, Fragment } from 'react';
import { faceAttribut } from '../../Type/Interface';

const DupTeg: FC<{ array: faceAttribut[] }> = ({ array }) => (
    <Fragment>
        {array.map(({ Tag, text, key, ...attribut }: faceAttribut) => (
            <Fragment key={`${key}+${Tag}+${text}`}>
                <Tag  {...attribut}>{text}</Tag>
            </Fragment>
        ))}
    </Fragment>
);

export default DupTeg;
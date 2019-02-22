import React, { FC, Fragment } from 'react';

import { Attribut } from '../../Type/Interface';

const DupTeg: FC<{ array: Attribut[] }> = ({ array }) => (
    <Fragment>
        {array.map(({ Tag, text, key, ...attribut }: Attribut) => (
            <Fragment key={key}>
                <Tag  {...attribut}>{text}</Tag>
            </Fragment>
        ))}
    </Fragment>
);

export default DupTeg;
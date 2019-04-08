import React, { FC, Fragment } from "react";
import { faceTeg } from "../../../Type/Interface";

const DupTeg: FC<{ array: faceTeg[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ Tag, text, key, ...attribut }: faceTeg) => (
      <Fragment key={`${key}+${Tag}+${text}`}>
        <Tag {...attribut}>{text}</Tag>
      </Fragment>
    ))}
  </Fragment>
);

export default DupTeg;

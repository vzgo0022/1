import React, { FC, Fragment } from "react";
import { faceTegOption, faceTegInput } from "../../../Type/Interface";
import UuidKey from "../../UuidKey";

export const DupTegText: FC<{ array: faceTegOption[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ Tag, text, key, ...attribut }: faceTegOption) => (
      <Fragment key={UuidKey(`${key}+${Tag}+${text}`)}>
        <Tag {...attribut}>{text}</Tag>
      </Fragment>
    ))}
  </Fragment>
);

export const DupTeg: FC<{ array: faceTegInput[] }> = ({ array }) => (
  <Fragment>
    {array.map(({ Tag, key, ...attribut }: faceTegInput) => (
      <Fragment key={UuidKey(`${key}+${Tag}`)}>
        <Tag {...attribut} />
      </Fragment>
    ))}
  </Fragment>
);

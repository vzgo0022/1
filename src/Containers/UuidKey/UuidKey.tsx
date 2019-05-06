import uuidv3 from "uuid/v3";

const UuidKey = (RandNumb: string): string => {

  return uuidv3(`${RandNumb}`, uuidv3.DNS);
};

export default UuidKey;

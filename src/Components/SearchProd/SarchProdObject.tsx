import {InputHTMLAttributes} from 'react';

export const inputSetSearch:InputHTMLAttributes<HTMLInputElement> = {
  type: "text",
  size: 50,
  maxLength: 150,
  placeholder: "Search for anything",
  alt: "search",
  spellCheck: false,
  autoComplete: "off"
};

import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376,
};


export const media = Object.keys(sizes).reduce((sum, label) => {
  const newSum = Object.assign({}, sum);

  newSum[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return newSum;
}, {});

export const zIndex1 = css`
  z-index: 1;
`;

export const zIndex2 = css`
  z-index: 10;
`;

export const zIndex3 = css`
  z-index: 20;
`;

export const zIndex4 = css`
  z-index: 30;
`;

export const paddedContent = css`
  padding: 0 8px;

  ${media.tablet`
    padding: 0 16px;
  `}
`;

export const paddedContentWithTop = css`
  padding: 8px 8px 0;

  ${media.tablet`
    padding: 16px 16px 0;
  `}
`;

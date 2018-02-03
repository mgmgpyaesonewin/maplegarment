import React from 'react';
import Styled from 'styled-components';

const Blockquote = Styled.blockquote`
  font-family: $font_0, $font_1;
  font-size: 18px;
  font-style: italic;
  /* width: 500px; */
  margin: 0.25em 0;
  padding: 0.35em 40px;
  line-height: 1.45;
  position: relative;
  color: $color_tuatara_approx;
  &:before {
    display: block;
    padding-left: 10px;
    content: "\\201C";
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: $boulder;
  }
  cite {
    color: $color_mountain_mist_approx;
    font-size: 14px;
    display: block;
    margin-top: 5px;
    &:before {
      content: "\\2014 \\2009";
    }
  }
`;

const Quote = () => (
  <div>
    <Blockquote>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris eget leo nunc, nec tempus mi?
      Curabitur id nisl mi, ut vulputate urna.
      Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae!
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Mauris eget leo nunc, nec tempus mi?
      Curabitur id nisl mi, ut vulputate urna.
      Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae!
      <cite>Somebody famous</cite>
    </Blockquote>
  </div>
);

export default Quote;

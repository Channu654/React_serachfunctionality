import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Searchbar = ({ onChange, querry, suggetions }) => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleinputchange = (e) => {
    console.log(e);
    setInputText(e.target.value);
    onChange(e.target.value);
    setLoading(true);
  };

  console.log(suggetions);

  // close button
  const handleclose = () => {
    setInputText('');
    setLoading(false);
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      <Searchbarwrapper>
        <Image src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png' />
        <Input value={inputText} onChange={handleinputchange} />
        <Rightside>
          {inputText && (
            <Image
              src='https://cdn-icons-png.flaticon.com/512/61/61155.png'
              onClick={handleclose}
            />
          )}
          {loading && (
            <StyledSpinner viewBox='0 0 50 50'>
              <circle
                className='path'
                cx='25'
                cy='25'
                r='20'
                fill='none'
                strokeWidth='4'
              />
            </StyledSpinner>
          )}
        </Rightside>
      </Searchbarwrapper>
      {!loading && suggetions.length > 0 && (
        <SuggationBox>
          {suggetions.map((el) => {
            return (
              <div>
                <h5>{el}</h5>
              </div>
            );
          })}
        </SuggationBox>
      )}
    </>
  );
};

export default Searchbar;

const Searchbarwrapper = styled.div`
  border: 1px solid black;
  padding-left: 100px;
  width: 400px;
  display: flex;
  padding: 15px;
  border-radius: 50px;
  margin-left: 500px;
`;

const Image = styled.img`
  height: 25px;
  padding-right: 50px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  flex: 1;
`;
const SuggationBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border: 3px solid black;
  height: 200px;
  width: 400px;
  overflow: auto;
  margin-left: 510px;
  border-radius: 10px;
  margin-top: 10px;
  o & * {
    text-align: left;
    padding-left: 40px;
  }
`;

const Rightside = styled.div``;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 21px;
  height: 21px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

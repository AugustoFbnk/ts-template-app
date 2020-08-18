import styled from 'styled-components';

export const DivRow = styled.div`
   &:after {
    content: "";
    display: table;
    clear: both;
   }    
`;

export const DivLabel = styled.div`
    float: left;
    width: 25%;
    margin-top: 6px;
`;

export const DivInput = styled.div`
    float: left;
    width: 75%;
    margin-top: 6px;
`;

export const DivContainer = styled.div`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  
  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
  }
  
  input[type=text], select, textarea{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }

  @media screen and (max-width: 600px) {
    ${DivLabel}, ${DivInput}, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  }
  
`;
import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;
export const Wrapper = styled.div`
width: 20rem;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ImageWrapper = styled.div`
height: 10rem;
width: 10rem;
margin: 0 0 1rem 0;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #bef7d7;
`;

export const Image = styled.img`
height: 5rem;
width: auto;
`;

export const Information = styled.div`
display: flex;
flex-direction: column;
`;

export const Greeting = styled.h1`
margin: 0 0 1rem 0;
font-weight: 600;
text-align: center;
font-size: 1.5rem;
color: #1F2937;
font-family: sans-serif;
`;

export const Text = styled.p`
color: #1F2937;
font-family: sans-serif;
text-align: center;
`;

export const Button = styled.button`
margin: 1.9rem 0 0 0;
border:none;
height: 3rem;
background-color: #FFA824;
text-align: center;
color: #fff;
font-size: 1rem;
border-radius: 0.3rem;
font-weight: 700;
&:hover{
    background-color: #db8604;
}
`;

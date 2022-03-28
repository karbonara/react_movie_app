import styled from 'styled-components'

const Input = styled.input`
width: 90vw;
margin: 20px 0;
padding: 8px;
font-size: 24px;
background: #484848;
color: #fff;
border-radius: 3px;
`;
const Button = styled.button`
width: 120px;
padding: 8px;
font-size: 16px;
background: #e5e5e5;
border: none;
background: #f60;
border: none;
color: #fff;
font-weight: 900;
border-radius: 3px;
`;

function Form({ searchMovies, setSearch }) {
    return (
        <form onSubmit={searchMovies}>
            <Input type="text" onChange={(evt) => setSearch(evt.target.value)}></Input>
            <Button>Поиск</Button>
        </form>
    )
}

export default Form;

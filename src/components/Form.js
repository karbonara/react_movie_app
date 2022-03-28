import styled from 'styled-components'

const Input = styled.input`
width: 90vw;
margin: 20px 0;
padding: 8px;
font-size: 24px
`;
const Button = styled.button`
width: 120px;
padding: 8px;
font-size: 16px;
background: #e5e5e5;
border: none;
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

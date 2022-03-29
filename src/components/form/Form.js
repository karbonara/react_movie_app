import { Input, Button } from './Form-styled';

function Form({ searchMovies, setSearch }) {
    return (
        <form onSubmit={searchMovies}>
            <Input type="text" onChange={(evt) => setSearch(evt.target.value)}></Input>
            <Button>Поиск</Button>
        </form>
    )
}

export default Form;

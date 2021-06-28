// Write your Character component here
import styled, {css} from "styled-components";

const CharacterCard = styled.div`
    width: 20em;
    color: white;
    background-color: grey;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 1em;

    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

const Character = (props) => {
    console.log(props);
    return (
        <CharacterCard>
            <h2>{props.character.name}</h2>
            <h3>{props.character.birth_year}</h3>
        </CharacterCard>
    );
}

export default Character;
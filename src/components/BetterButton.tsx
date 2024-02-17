import styled from "styled-components";

type Props = {
    title: string;
    loading?: boolean;
    onClick?: () => void;
};

const BetterButton = ({ title, loading, onClick } : Props) => {
    return (
        <StyledButton onClick={onClick} disabled={loading}>{ loading ? 'Loading...' : title }</StyledButton>
    );
};

const StyledButton = styled.button`
    background: var(--apple-green-light);
    padding: 15px 40px;
    font-family: "Anta", sans-serif;
    font-size: 18px;
    border: 3px solid var(--apple-green);
    cursor: pointer;
    color: white;
    transition: .3s ease-in-out;
    &:hover {
        background: var(--apple-green);
    }
`

export default BetterButton;
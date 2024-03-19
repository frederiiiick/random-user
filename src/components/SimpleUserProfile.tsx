import { IName, IUser } from "../Interfaces";
import styled from "styled-components";

type Props = {
    user: IUser;
    loading?: boolean;
};

const SimpleUserProfile = ({ user, loading }: Props) => {
    const formatName = (name: IName) => {
        const fullname = `${name?.first} ${name?.last}`;
        return (name?.title === 'Mr' || name?.title === 'Ms' || name?.title === 'Mrs') ? `${name?.title}. ${fullname}` : `${name?.title} ${fullname}`;
    };

    return (
        <UserContainer className={`${loading && 'loading'}`}>
            <p className='name'> {formatName(user.name!)} </p>
            <span className='email'>{user.email}</span>
        </UserContainer>
    );
};

const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--neon-blue);
    padding: 0 30px;
    box-shadow: 0px 0px 10px 7px var(--neon-blue);
    width: 40vw;
    min-height: 300px;
    background-color: var(--blue-green-light);
    font-family: "Kode Mono", monospace;
    &.loading {
        .name, .email {
            opacity: 0;
            visibility: hidden;
        }
    }
    .name, .email {
        opacity: 1;
        visibility: visible;
        transition: .3s ease-in-out
    }
    .name {
        font-size: calc(24px + 2vmin);
        margin: 0;
        color: var(--apple-green);
        line-height: 45px;
    }
    .email {
        font-size: calc(10px + 1vmin);
        margin: 0;
        color: white;
    }
    @media all and (min-width: 768px) and (max-width: 1024px) {
        width: 60vw;
    }
    @media all and (min-width: 480px) and (max-width: 768px) {
        width: 70vw;
        min-height: 50vh;
    }
    @media all and (max-width: 480px) {
        width: 65vw;
        min-height: 50vh;
    }
`

export default SimpleUserProfile;
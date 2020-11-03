import React from 'react';
import './app-header.css';
//import styled  from 'styled-components';
/*
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color:white;
    }
    h2 {
        font-size: 1.2rem;
        color:white;
    }
`*/

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Max Tugov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;
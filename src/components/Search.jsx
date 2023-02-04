
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import './Search.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionType } from '../actions';

// https://developers.google.com/custom-search/v1/using_rest
const Search = ({hideButtons = false, term}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [input, setInput] = useState(term);
    const search = (e) =>{
        e.preventDefault();
        dispatch(actionType(input));
        history.push("/search");
    }
    return(
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="search" value = {input} onChange = {(e) => { setInput(e.target.value) }} />
                <MicIcon />
            </div>
            <div className="search__buttons" style = {{display: (hideButtons ? "flex": "none")}}>
                <Button type = 'submit' onClick = {search}>Google Search</Button>
                <Button >I'm Feeling Lucky</Button>
            </div>
        </form>
    );
}
export default Search;
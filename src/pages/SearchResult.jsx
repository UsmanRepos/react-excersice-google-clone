import Search from "../components/Search";
import { useSelector } from "react-redux";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Avatar} from '@material-ui/core';

import ImageIcon from '../images/imageIcon.png';
import VedioIcon from '../images/vedioIcon.png';

import './SearchResult.css';

const SearchResult = () => {
    const term = useSelector((state) => state.SearchTheTerm );
    const {data} = useGoogleSearch(term);
    return(
        <div className = 'searchPage'>
            <div className="searchPage__header">
                <div className = "searchPage__headerLeft">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="Error" />
                    <div className="searchPage__headerBody">
                        <Search hidebuttons = {true} term = {term} />
                        <div className="searchPage__options">
                            <div className="searchPage__optionsLeft">
                                <div className="searchPage__option">
                                    <SearchIcon /> 
                                    <Link to = "/">All</Link>
                                </div>
                                <div className="searchPage__option">
                                    <img src={ImageIcon} alt="Error" />
                                    <Link to = "/">Images</Link>
                                </div>
                                <div className="searchPage__option">
                                    <DescriptionIcon />
                                    <Link to = "/">News</Link>
                                </div>
                                <div className="searchPage__option">
                                    <img src={VedioIcon} alt="Error" />
                                    <Link to = "/">Vedios</Link>
                                </div>
                                <div className="searchPage__option">
                                    <MoreVertIcon /> 
                                    <Link to = "/">More</Link>
                                </div>
                            </div>
                            <div className="searchPage__optionsRight">
                                <Link to = "/tool">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searchPage__headerRight">
                    <div className="icon"><SettingsIcon /></div>
                    <div className="icon"><WbSunnyIcon /></div>
                    <div className="icon"><AppsIcon /></div>
                    <div className="icon"><Avatar /></div>
                </div>
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link} className = "searchPage__displayLink">{ item.displayLink } <ArrowDropDownIcon /></a>
                            <a href={item.link} className="searchPage__resultTitle">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default SearchResult;
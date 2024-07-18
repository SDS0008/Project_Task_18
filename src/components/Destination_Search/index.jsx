import { Component } from "react";

import Destination_Item from '../../Destination_Item';

import './index.css';



class DestinationSearch extends Component {
    state = {
        searchInput: "",

    }


    onChangeSearchInput = event => {
        this.setState({ searchInput: event.target.value })
    }


    render() {
        const { searchInput } = this.state;

        const { destinationList } = this.props;

        const searchResults = destinationList.filter(eachDestination =>
            eachDestination.name.toLowerCase().includes(searchInput.toLowerCase())
        )

        return (
            <div className="app.container">
                <div className="destinations-search-container">
                    <h1 className="heading">Destination Search</h1>

                    <input
                        type="search"
                        className="search-input"
                        placeholder="Search"
                        value={ searchInput }
                        onChange={ this.onChangeSearchInput }
                    ></input>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/000/495/925/original/vector-search-icon-design.jpg"
                        alt="Search Icon"
                        className="search-icon" />
                </div>

                <ul className="destinations-list">
                    { searchResults.map(eachDestination => (
                        <Destination_Item
                            key={ eachDestination.id }
                            destinationDetails={ eachDestination } />
                    )) }
                </ul>
            </div>
        )

    }


}

export default DestinationSearch;
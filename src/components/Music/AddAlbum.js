import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import NB from 'nodebrainz';
import Autosuggest from 'react-autosuggest';

import * as ROUTES from '../../constants/routes';


const AddAlbumButtonBase = (props) => {
    const onClick = () => {
        props.history.push(ROUTES.ADD_ALBUM);
    };

    return (
        <button type="button" onClick={onClick}>Add Album</button>
    );
}

const AddAlbumButton = withRouter(AddAlbumButtonBase);

const INITIAL_STATE = {
    title: '',
    subtitle: '',
    artist: '',
    year: '',
    suggestions: [],
    isLoading: false,
    error: null,
};

const nodeBrainz = new NB({userAgent: 'music-wishlist-app/0.0.1 (sim.david90+musicbrainz@gmail.com)'});

const getSuggestionValue = suggestion => suggestion.name;
  
const renderSuggestion = suggestion => {
    return (
        <span>{suggestion.name}</span>
    );
}

class AddAlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };

        this.lasRequestId = null;
    }

    loadSuggestions(value) {
        if (this.lasRequestId !== null) {
            clearTimeout(this.lasRequestId);
        }

        this.setState({
            isLoading: true
        });

        this.lasRequestId = setTimeout(() => {
            nodeBrainz.search('artist', {artist: value}, (error,response) => {
                this.setState({
                    isLoading: false,
                    suggestions: Array.from(response.artists)
                });
            });
        }, 1000);
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.loadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    // TODO: here will have to save data to state that will be save to firebase about the album (bandid, albumid)
    onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
        this.setState({
            selectedBand: suggestion.id
        });
    };

    onSubmit = event => {
        event.preventDefault();
    }

    onSaveAndAdd = () => {
        alert("Save and reset form");
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    onChangeArtist = (event, { newValue, method}) => {
        this.setState({ artist: newValue });
    }

    render() {
        const {
            title,
            subtitle,
            artist,
            year,
            suggestions,
            error,
        } = this.state;

        const inputProps = {
            placeholder: "Artist",
            value: artist,
            type: "text",
            onChange: this.onChangeArtist
        };

        const currentYear = new Date().getFullYear();

        const isInvalid = title === '' || artist === '' || year < 1900 || year > currentYear;

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Album Title"
                />
                <input
                    name="subtitle"
                    value={subtitle}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Album Subtitle"
                />
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    onSuggestionSelected={this.onSuggestionSelected}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps} />
                <input
                    name="year"
                    value={year}
                    onChange={this.onChange}
                    type="number"
                    placeholder="Year"
                />
                <button disabled={isInvalid} type="submit">Add Album</button>
                <button disabled={isInvalid} onClick={this.onSaveAndAdd}>Save and add another</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default AddAlbumPage;

export { AddAlbumButton }
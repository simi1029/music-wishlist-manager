import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import NB from 'nodebrainz';

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
    error: null,
};

const nodeBrainz = new NB({userAgent: 'music-wishlist-app/0.0.1 (url)'});

class AddAlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const {artist} = this.state;
        nodeBrainz.search('artist', {artist: artist}, function(err, response){
            console.log(response);
        });
        event.preventDefault();
    }

    onSaveAndAdd = () => {
        alert("Save and reset form");
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {
            title,
            subtitle,
            artist,
            year,
            error,
        } = this.state;

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
                <input
                    name="artist"
                    value={artist}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Artist"
                />
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
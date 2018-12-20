import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

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

class AddAlbumPage extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        event.preventDefault();
    }

    onSaveAndAdd = event => {}

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const {
            title,
            error,
        } = this.state;

        const isInvalid = title === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="title"
                    value={title}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Album Title"
                />
                <button disabled={isInvalid} type="submit">Add Album</button>
                <button disabled={isInvalid} onClick={this.onSaveAndAdd()}>Save and add another</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default AddAlbumPage;

export { AddAlbumButton }
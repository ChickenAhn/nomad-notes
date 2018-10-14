import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GET_NOTES } from '../../queries';
import Note from '../Note';

export default class Notes extends Component {
  render() {
    return (
      <Query query={GET_NOTES}>
        {data =>
          data.notes
            ? data.notes.map(note => (
                <Link to={`/edit/${note.id}`}>
                  <Note>{note.title}</Note>
                </Link>
              ))
            : null
        }
      </Query>
    );
  }
}

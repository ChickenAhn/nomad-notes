import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import styled from 'styled-components';
import { GET_NOTES } from '../../queries';

const Note = styled.div`
  padding: 30;
`;
// Query
// https://www.apollographql.com/docs/react/essentials/queries.html
export default class Notes extends Component {
  render() {
    return (
      <Query query={GET_NOTES}>
        {({ loading, error, data }) =>
          data.notes
            ? data.notes.map(note => (
                <Link to={`/edit/${note.id}`} key={note.id}>
                  {/* Actually Note is just styled component  */}
                  <Note>{note.title}</Note>
                </Link>
              ))
            : null
        }
      </Query>
    );
  }
}

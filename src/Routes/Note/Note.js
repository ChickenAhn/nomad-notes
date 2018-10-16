import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_NOTE } from '../../queries';

// fragments
// https://www.apollographql.com/docs/react/advanced/fragments.html

export default class Note extends Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data.note ? (
            <>
              <h2>{data.note.title}</h2>
            </>
          ) : null
        }
      </Query>
    );
  }
}

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../Components/plus.svg';
import { GET_NOTES } from '../../queries';

const Header = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const Notes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NoteTitle = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

// Query
// https://www.apollographql.com/docs/react/essentials/queries.html
export default class NotesContainer extends Component {
  render() {
    return (
      <>
        <Header>
          <Title>
            Nomad Notes
            <Link to={'/add'}>
              <Button>
                <Plus />
              </Button>
            </Link>
          </Title>
        </Header>
        <Notes>
          <Query query={GET_NOTES}>
            {({ loading, error, data }) =>
              data.notes
                ? data.notes.map(note => (
                    <Link to={`/edit/${note.id}`} key={note.id}>
                      {/* Actually Note is just styled component  */}
                      <Note>
                        <NoteTitle>{note.title}</NoteTitle>
                      </Note>
                    </Link>
                  ))
                : null
            }
          </Query>
        </Notes>
      </>
    );
  }
}

import { gql } from '@apollo/client';

// {
//   "limit": 20,
//   "start": 0
// }

export const LOGIN = gql`
  mutation login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
			user {
				id
        username
        email
        blocked
        confirmed
        role {
          id
          name
          description
          type
        }
			}
    }
  }
`;

export const CheckIn = gql`
mutation createRegisteredTime($input: createRegisteredTimeInput) {
  createRegisteredTime(input: $input){
    registeredTime{
      id
      published_at
      user{
        id
      }
    }
  }
}
`;

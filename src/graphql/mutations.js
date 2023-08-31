import { gql } from '@apollo/client';

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

export const CHECKIN = gql`
mutation createRegisteredTime($input: createRegisteredTimeInput){
  createRegisteredTime(input: $input){
    registeredTime{
      id
      timeRegistered
    }
	}
}
`;

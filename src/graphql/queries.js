import { gql } from '@apollo/client';



export const LIST_REGISTERED_TIMES = gql`
	query registeredTimes($limit: Int, $start:Int) {
		registeredTimes(limit: $limit, start: $start ) {
		id
		timeRegistered
		user{
			id
			name
		}
		}
	}
`;

export const LIST_REGISTERED_TIMES_CONNECTION = gql`
query registeredTimesConnection($limit: Int, $start:Int) {
  registeredTimesConnection(limit: $limit, start: $start ) {
  values{
    id
    timeRegistered
    user{
      id
      name
    }
  }
    aggregate{
      count
      totalCount
    }
  }
}
`;

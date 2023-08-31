import { useQuery } from "@apollo/client";
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import { Link, useHistory } from 'react-router-dom';
import { LIST_REGISTERED_TIMES_CONNECTION } from '../../../graphql/queries';
import { formatDate, formatHour } from '../../../utils/date';
import ModalRegister from '../../organisms/Modal';
import TimeCard from '../../organisms/TimeCard';
import './style.scss';

import SideMenu from '../../molecules/SideMenu';

import { useAuth } from '../../../hooks';

const Dashboard = () => {
	const [currentTime, setCurrentTime] = useState(moment().format('H:mm'));
	const [currentDate, setCurrentDate] = useState(moment().format('DD/MM/yyyy'));
	// const [registersData, setRegistersData] = useState([]);
	const { user } = useAuth();
	console.log(user);
	const registers = JSON.parse(localStorage.getItem('@pontogo_registers'));
	const history = useHistory();
	const itemsPerPage = 9;
	const [currentPage, setCurrentPage] = useState(0);
	const { loading, error, data: registeredData } = useQuery(LIST_REGISTERED_TIMES_CONNECTION, {
		variables: { limit: itemsPerPage, start: currentPage * itemsPerPage },

	});

	console.log(registeredData)

	const handleLogout = () => {
		localStorage.removeItem('@pontogo');
		history.push('/login');
	};

	// useEffect(() => {
	// 	const startTimer = setInterval(() => {
	// 		setCurrentTime(moment().format('H:mm'));
	// 		setCurrentDate(moment().format('DD/MM/yyyy'));
	// 	}, 1000);

	// 	return () => clearInterval(startTimer);
	// }, []);

	// useEffect(() => {
	// 	if (!registers) {
	// 		return setRegistersData([]);
	// 	}
	// 	setRegistersData(
	// 		user?.role === 'colaborador'
	// 			? registers.filter((register) => register.userId === user.id).reverse()
	// 			: registers.reverse()
	// 	);
	// }, [registers, user]);


	useEffect(() => {

	}, [currentPage])

	console.log(currentPage, registeredData)

	// const pageCount = Math.ceil(registersData.length / itemsPerPage);

	const handlePageChange = ({ selected }) => {
		setCurrentPage(selected);
	};

	let totalPages = 0;

	if (registeredData) {
		totalPages = Math.ceil(registeredData.registeredTimesConnection.aggregate.count / itemsPerPage);
	}

	return (
		<div className='dashboard'>
			<SideMenu />
			<div className='dash-content'>
				<ModalRegister user={user} timeValue={currentTime} dateValue={currentDate} />
				<div className='d-flex fields'>
					<p className='fieldsCard'>Dashboard</p>
					<p className='fieldsCard-data'>Data</p>
					<p className='fieldsCard-hora'>Hora</p>
				</div>
				{!loading ? registeredData.registeredTimesConnection.values
					.map((data, index) => (
						<TimeCard
							key={index}
							personName={data.user?.name || "pessoa não identificada"}
							personIdentifier={data.user?.id}
							date={formatDate(data.timeRegistered)}
							time={`${formatHour(data.timeRegistered)}h`}
						/>
					)) : null}
				<ReactPaginate
					previousLabel={<button className="next-button"><FaAngleLeft /></button>}
					nextLabel={<button className="next-button"><FaAngleRight /></button>}
					breakLabel={'...'}
					pageCount={totalPages}
					marginPagesDisplayed={2}
					pageRangeDisplayed={5}
					onPageChange={handlePageChange}
					containerClassName={'pagination'}
					subContainerClassName={'pages pagination'}
					activeClassName={'active'}
				/>
				<div className='p-20 d-flex logout'>
					<Link to='#' className='exit-mb' onClick={handleLogout}>
						Sair
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

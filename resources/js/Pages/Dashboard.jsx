import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/inertia-react';
import { useEffect } from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import Modal from './components/Modal';
import Paginator from './components/Paginator';
import Toast from './components/Toast';

export default function Dashboard(props) {

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >

            {props.flash.success && <Toast success={props.flash.success}/>}

            <Head title="Dashboard" />

            <div className="py-12">
                <h1 className="text-xl font-bold text-center mb-4">
                    Project Monitoring
                    <label htmlFor="my-modal" className="ml-4 hover:bg-slate-800 hover:text-white py-1 px-2 rounded-md cursor-pointer">+</label>
                </h1>

                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <Modal props={props} />

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">

                        <div className="overflow-x-auto">
                            <table className='table table-compact w-full p-4'>
                                <thead className="bg-gray-300">
                                    <tr>
                                        <th>PROJECT NAME</th>
                                        <th>CLIENT</th>
                                        <th>PROJECT LEADER</th>
                                        <th>START DATE</th>
                                        <th>END DATE</th>
                                        <th>PROGRESS</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {props.projects.data.length > 0 ? props.projects.data.map((project, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{project.project_name}</td>
                                                <td>{project.client}</td>
                                                <td>
                                                    <div className="flex flex-row items-center gap-1">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/25/25634.png" alt="" className='w-[25px] h-[25px] rounded-full' />
                                                        <div className='flex flex-col'>
                                                            <span>{project.leader.name}</span>
                                                            <span className='text-slate-400'>{project.leader.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {project.start_date}
                                                </td>
                                                <td>
                                                    {project.end_date}
                                                </td>
                                                <td>
                                                    <div className='flex flex-row'>
                                                        <input type="range" name="" id="" readOnly="readonly" max="100" value={project.progress} />
                                                        <span>{project.progress}%</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='grid grid-cols-2 gap-1'>
                                                        <Link href={route('project.destroy', project.id)} method="delete" as="button" className="btn btn-error bg-red-600 p-2">
                                                            <FaTrash className='text-white' />
                                                        </Link>
                                                        <a href="" className="btn btn-success bg-green-500 p-2">
                                                            <FaPen className='text-white' />
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }) : <tr><td colspan="7" className='text-xl text-center w-full p-5'> Empty Data</td></tr>}

                                </tbody>
                            </table>
                            <div className='w-full text-center mt-5 mb-3'>
                                <Paginator meta={props.projects.meta} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

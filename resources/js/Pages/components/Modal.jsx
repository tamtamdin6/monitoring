import { Inertia } from "@inertiajs/inertia"
import { usePage } from "@inertiajs/inertia-react"
import { useState } from "react"

const Modal = ({ props }) => {



    const { errors } = usePage().props

    const [success, setSuccess] = useState(false);

    const [values, setValues] = useState({
        project_name: null,
        client: null,
        start_date: null,
        end_date: null,
        progress: null,
    })


    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('project.store'), values)
        setSuccess(true);
    }

    return (
        <>
            <div className="modal">
                <div className="modal-box relative w-full">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    {success &&
                        <div className="alert alert-success shadow-lg my-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.success}</span>
                            </div>
                        </div>}

                    <h3 className="font-bold text-lg">Add New Project</h3>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <input type="text" name="project_name" id="project_name" placeholder="Project Name" className="input input-bordered input-sm w-full max-w-xs mb-2" value={values.project_name} onChange={handleChange} />
                        {errors.project_name && <div>{errors.project_name}</div>}
                        <input type="text" name="client" id="client" placeholder="Client" className="input input-bordered input-sm w-full max-w-xs mb-2" value={values.client} onChange={handleChange} />
                        {errors.client && <div>{errors.client}</div>}
                        <input type="date" name="start_date" id="start_date" placeholder="Start Date" className="input input-bordered input-sm w-full max-w-xs mb-2" value={values.start_date} onChange={handleChange} />
                        {errors.start_date && <div>{errors.start_date}</div>}
                        <input type="date" name="end_date" id="end_date" placeholder="End Date" className="input input-bordered input-sm w-full max-w-xs mb-2" value={values.end_date} onChange={handleChange} />
                        {errors.end_date && <div>{errors.end_date}</div>}
                        <input type="number" max="100" min="0" name="progress" id="progress" placeholder="Progress" className="input input-bordered input-sm w-full max-w-xs mb-5" value={values.progress} onChange={handleChange} />
                        {errors.progress && <div>{errors.progress}</div>}

                        <button className="btn btn-sm bg-green-700 block">Save</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Modal;

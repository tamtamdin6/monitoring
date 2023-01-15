import { Link } from "@inertiajs/inertia-react";


const Paginator = ({meta}) => {

    const currentPage = meta.current_page;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;

    return (
        <>
            <div className="btn-group">
                <Link href={prev} className="btn">«</Link>
                <button className="btn"> {currentPage} </button>
                <Link href={next} className="btn">»</Link>
            </div>
        </>
    );
}

export default Paginator;

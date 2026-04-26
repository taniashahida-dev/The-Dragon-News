import Link from "next/link";


const NotFound = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col gap-4 ">
            <h1 className='text-6xl font-bold  text-purple-500 mt-36'>This page is Not Found</h1>
            <Link href="/"><button className="btn btn-primary ">Go to home</button></Link>
        </div>
    );
};

export default NotFound;
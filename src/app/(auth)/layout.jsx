import Navbar from "@/components/Navbar";


const Authlayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Authlayout;
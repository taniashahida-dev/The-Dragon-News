import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const MailLayout = ({children}) => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MailLayout;
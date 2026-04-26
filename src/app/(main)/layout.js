import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const MailLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MailLayout;
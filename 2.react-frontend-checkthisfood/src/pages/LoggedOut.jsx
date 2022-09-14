import { useAtom } from 'jotai';
import { isUserLogged } from '../atoms/userStatus';

const LoggedOut = () => {
    return <div>You are not logged in</div>;
};

export default LoggedOut;

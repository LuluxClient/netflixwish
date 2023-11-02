import { userAtom } from "../utils/globalState";
import { useAtom } from "jotai";

const Profile = () => {
    const [user, setUser] = useAtom(userAtom);

    const handleChange = (e) => {
        setUser({ ...user, name: e.target.value });
    };
    return (
        <>
                <input type="text" placeholder="Name" onChange={handleChange} />
                <input type="text" placeholder="Passion" />
                <button type="submit">Mettre à jour</button>
        </>
    );
};

export default Profile;
